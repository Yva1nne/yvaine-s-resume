// api/chat.js
// 这是一个 Vercel Serverless Function
// 当你把整个项目推送到 GitHub 并连接到 Vercel 时，Vercel 会自动将 api/ 目录下的文件部署为 Serverless API
// 它的访问路径将是：https://你的vercel域名.vercel.app/api/chat

export default async function handler(req, res) {
  // 1. 配置 CORS (允许跨域请求)
  // 这是必须的，因为你的前端在 GitHub Pages (域名A)，后端在 Vercel (域名B)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://yva1nne.github.io/yvaine-s-resume/'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // 处理 OPTIONS 预检请求 (浏览器跨域机制)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // 2. 配置 System Prompt (你的个人信息)
    // 在这里写下你想让 AI 扮演的角色和你的简历信息
    const systemPrompt = `你是一个代表我的 AI 数字分身。你的任务是回答访客关于我（简历主人）的问题。
我的基本信息：
- 职位：AI产品经理
- 经验：熟悉大模型应用落地、需求分析、原型设计。
- 风格：专业、简洁、自信，符合粗野主义(Brutalism)的极简风格。
请用第一人称（"我"）来回答问题。如果不知道答案，请礼貌地建议访客通过邮件联系我。`;

    // 3. 调用 OpenAI API
    // 注意：请在 Vercel 的项目设置 (Settings -> Environment Variables) 中添加 OPENAI_API_KEY
    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` 
      },
      body: JSON.stringify({
        model: 'glm-4.5-air', // 你可以换成 gpt-4o 或其他模型
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    // 4. 返回结果给前端
    const reply = data.choices[0].message.content;
    res.status(200).json({ reply });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
