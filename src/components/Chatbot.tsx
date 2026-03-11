import React, { useEffect, useRef, useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '你好，我是站内的数字分身。你可以直接问我项目经历、实习内容，或者你想知道我为什么想做 AI 产品。',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (rawMessage: string) => {
    const userMsg = rawMessage.trim();
    if (!userMsg || isLoading) return;

    const apiUrl = import.meta.env.VITE_CHAT_API_URL || '/api/chat';
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    if (userMsg === input.trim()) {
      setInput('');
    }
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '当前聊天服务暂时不可用。你也可以先浏览项目栏目，或者直接邮件联系我。',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    await sendMessage(input);
  };

  return (
    <>
      {!isOpen && (
        <button type="button" onClick={() => setIsOpen(true)} className="chat-entry" aria-label="Open chat">
          <span className="pulse-dot" />
          Ask My AI
        </button>
      )}

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div>
              <div className="eyebrow">Digital Twin</div>
              <h3>可以直接问我</h3>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="icon-button">
              <i className="ph-bold ph-x" />
            </button>
          </div>

          <div className="chat-hint-row">
            {['你最近在做什么？', '介绍一下缺陷分析项目', '为什么想做 AI 产品？'].map((item) => (
              <button
                key={item}
                type="button"
                className="soft-chip"
                onClick={() => void sendMessage(item)}
                disabled={isLoading}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="chat-messages">
            {messages.map((item, index) => (
              <div key={`${item.role}-${index}`} className={`chat-row ${item.role}`}>
                <div className={`chat-bubble ${item.role}`}>{item.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-row assistant">
                <div className="chat-bubble assistant">正在整理回答...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-bar">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleSend();
              }}
              placeholder="输入你想问的问题"
              className="chat-input"
            />
            <button type="button" onClick={handleSend} disabled={isLoading || !input.trim()} className="cta-primary small">
              发送
            </button>
          </div>
        </div>
      )}
    </>
  );
}
