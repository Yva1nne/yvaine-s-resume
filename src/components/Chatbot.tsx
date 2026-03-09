import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '你好！我是基于 AI 的数字分身。你可以问我关于经历、技能或项目的任何问题。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // 部署后，这里会调用你 Vercel 上的 Serverless Function
      // 在本地开发时，如果没有配置 VITE_CHAT_API_URL，它会默认请求 /api/chat
      const apiUrl = import.meta.env.VITE_CHAT_API_URL || '/api/chat';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '抱歉，我现在暂时无法连接到大脑（API 请求失败）。请检查后端服务是否正常运行，或者直接通过邮件联系我！' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#4da8c7] text-white border-2 border-black shadow-[4px_4px_0px_0px_black] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_black] transition-all flex items-center justify-center z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <i className="ph-bold ph-chat-circle-dots text-3xl"></i>
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white border-2 border-black shadow-[8px_8px_0px_0px_black] flex flex-col z-50 animate-fade-in">
          {/* 头部 */}
          <div className="bg-black text-white p-4 flex justify-between items-center border-b-2 border-black">
            <div className="flex items-center gap-2">
              <i className="ph-fill ph-robot text-xl text-[#4da8c7]"></i>
              <h3 className="font-bold uppercase tracking-widest text-sm">AI 助理</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#4da8c7] transition-colors">
              <i className="ph-bold ph-x text-xl"></i>
            </button>
          </div>

          {/* 消息列表 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm font-medium border-2 border-black leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#4da8c7] text-white shadow-[2px_2px_0px_0px_black]' 
                    : 'bg-white text-black shadow-[2px_2px_0px_0px_black]'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_black] flex gap-1">
                  <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入框 */}
          <div className="p-4 bg-white border-t-2 border-black flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="问我点什么..."
              className="flex-1 border-2 border-black p-2 text-sm font-medium focus:outline-none focus:shadow-[2px_2px_0px_0px_#4da8c7] transition-shadow"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-black text-white px-4 border-2 border-black hover:bg-[#4da8c7] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <i className="ph-bold ph-paper-plane-right text-lg"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
