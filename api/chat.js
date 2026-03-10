const allowedOrigins = new Set([
  'https://yva1nne.github.io',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]);

export default async function handler(req, res) {
  const origin = req.headers.origin;

  res.setHeader('Access-Control-Allow-Credentials', true);
  if (origin && allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = `你是一个代表我本人的 AI 数字分身。你的任务是回答访问者关于我（简历主人）的提问。
我的基本信息：
- 职位：AI 产品经理
- 经验：熟悉大模型应用落地、需求分析、原型设计
- 风格：专业、简洁、自信
请用第一人称“我”来回答问题。如果不知道答案，请礼貌建议访问者通过邮件联系我。`;

    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'glm-4.5-air',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    const reply = data.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
