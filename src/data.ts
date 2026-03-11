export type ExperienceType = 'INTERNSHIP' | 'PROJECT';

export type Experience = {
  id: string;
  type: ExperienceType;
  title: string;
  date: string;
  role: string;
  company: string;
  location: string;
  teamSize: number;
  tags: string[];
  status: string;
  shortDesc: string;
  overview: string[];
  contributions: string[];
  highlights: { title: string; desc: string; icon: string }[];
  metrics: { value: string; label: string; subtext: string; symbol: string }[];
  retrospective: { title: string; desc: string; type: 'positive' | 'negative' }[];
  images: string[];
  demoUrl?: string;
  demoLabel?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  note: string;
};

export type AwardItem = {
  title: string;
  description: string;
};

export const profile = {
  name: '叶奕含',
  englishName: 'Yihan Ye',
  role: 'AI 产品经理',
  heroTitle: '把复杂 AI 方案，做成可理解、可展示、可落地的产品。',
  heroSubtitle:
    '我关注大模型应用开发、智能体工作流与 AI 产品设计，擅长把模糊需求结构化成可以被验证、被展示，也能被真正落地的方案。',
  location: 'Hangzhou, China',
  status: 'Open to Work / AI PM Intern',
  email: 'yhye@zju.edu.cn',
  currentFocus: [
    '继续积累大模型产品、知识库策略与智能体交互的落地经验。',
    '把项目叙事、交互表达和真实业务价值串成更完整的产品作品。',
    '寻找 AI 产品经理相关实习岗位，优先关注能快速试错和真实落地的团队。',
  ],
  principles: [
    '我做产品时会同时考虑信息表达、交互路径和技术可实现性，而不是把它们拆开看。',
    '我更在意用户是否能快速理解价值、是否愿意持续使用，而不是只看功能数量。',
    '我喜欢把模糊问题结构化，再与研发、算法、设计一起推进到可验证状态。',
  ],
  capabilities: [
    'LLM 应用开发',
    'CV 算法理解',
    'PyTorch',
    '0-1 产品设计',
    'PRD / 原型表达',
    'Coze / Trae',
    'Prompt Engineering',
    'Python',
    'Figma / Axure',
    'CET-6',
  ],
};

export const education: EducationItem[] = [
  {
    school: '浙江大学',
    degree: '电子信息（集成电路工程）硕士',
    period: '2024.09 - 至今',
    note: '主修人工智能辅助集成电路制造（97）、集成电路良率分析导论（98）等。',
  },
  {
    school: '浙江大学',
    degree: '电子科学与技术 本科',
    period: '2020.09 - 2024.06',
    note: '主修边缘计算开发实践（5.0）、物联网系统设计（4.5）、信号与系统（4.8）等。',
  },
];

export const awards: AwardItem[] = [
  {
    title: '全国一等奖',
    description: '“华为杯”第七届中国研究生人工智能创新大赛，全国一等奖。',
  },
  {
    title: '全国三等奖',
    description: '2025 中国研究生创“芯”大赛 EDA 精英挑战赛，全国三等奖。',
  },
  {
    title: '“互联网+”银奖',
    description: '“建行杯”第八届浙江省国际“互联网+”大学生创新创业大赛银奖。',
  },
  {
    title: '校级荣誉',
    description: '浙江大学优秀研究生、校级社会实践先进个人、优秀毕业论文及多次奖学金。',
  },
];

export const featuredProjectIds = ['PRJ_01', 'EXP_01', 'PRJ_02'];

export const experiences: Experience[] = [
  {
    id: 'PRJ_01',
    type: 'PROJECT',
    title: '晶圆制造端到端智能缺陷分析与根本原因追踪系统',
    company: '浙江大学',
    date: '2024.09 - 2025.07',
    role: 'AI 产品经理 / 全栈开发',
    location: '杭州',
    teamSize: 3,
    tags: ['Python', 'ResNet50', 'CLIP', 'YOLOv8', 'SAM', 'React', 'Flask'],
    status: '已上线（校企合作）',
    shortDesc: '围绕检测、诊断与溯源设计工业缺陷分析闭环，在真实产线数据上完成校企合作验证。',
    overview: [
      '针对产线良率分析依赖人工、缺乏根因追溯的痛点，我主导从 0 到 1 设计“检测 - 诊断 - 溯源”闭环系统，并与合作方基于真实产线数据完成训练与验证。',
      '我负责产品定义、PRD、原型表达和全栈集成，把算法能力包装成员工可直接调用的分析工具，而不是停留在实验结果层面。',
    ],
    contributions: [
      '主导从 0 到 1 设计“检测 - 诊断 - 溯源”闭环系统，撰写完整 PRD，定义缺陷检测、分割、分类与根因分析四大核心模块。',
      '完成 React + Tailwind 前端界面与 Flask API 的全栈集成，把算法能力封装为可直接调用的分析工具。',
      '针对工业少样本问题制定迁移学习路线，并结合 ResNet50、YOLOv8、SAM 与 CLIP 形成完整技术链路。',
      '在精度、推理速度与产线可用性之间做平衡，推动方案从模型结果走向真实业务闭环。',
    ],
    highlights: [
      {
        title: '产品定义 + 原型落地',
        desc: '不仅明确系统功能边界，也把原型和集成链路一起打通，让方案可以直接被演示和使用。',
        icon: 'ph-layout',
      },
      {
        title: '多模态检索策略',
        desc: '结合 CLIP + OCR 做根因分析与检索，实现 Top-1 准确率 96.2% 和 0.03 秒实时推理。',
        icon: 'ph-magnifying-glass',
      },
    ],
    metrics: [
      { value: '90', label: '人工标注成本下降', subtext: '显著提升产线效率', symbol: '%' },
      { value: '96.2', label: 'Top-1 准确率', subtext: '12 类缺陷分类准确率', symbol: '%' },
      { value: '0.03', label: '实时推理', subtext: '满足工业实时性要求', symbol: 's' },
      { value: '2000+', label: '真实产线数据', subtext: '校企合作训练样本规模', symbol: '张' },
    ],
    retrospective: [
      {
        title: '商业价值落地',
        desc: '项目成功落地，将人工标注成本降低 90%，证明 AI 能力能真正嵌入业务流程。',
        type: 'positive',
      },
      {
        title: '技术与业务平衡',
        desc: '工业场景中，算法精度只是起点，交互表达和系统可用性决定方案是否被采纳。',
        type: 'positive',
      },
    ],
    images: ['images/projects/prj01/缺陷检索网络架构.png', 'images/projects/prj01/缺陷分析界面.png'],
  },
  {
    id: 'PRJ_02',
    type: 'PROJECT',
    title: '甘特图风格化智能待办系统',
    company: '个人项目',
    date: '2025.09 - 2025.12',
    role: 'AI 产品经理',
    location: '杭州',
    teamSize: 1,
    tags: ['Prompt Engineering', 'Vibe Coding', 'GenAI', 'LUI', 'React'],
    status: 'MVP 验证',
    shortDesc: '尝试把自然语言排期、项目可视化和轻量 AI 规划结合成一个更顺手的待办工具。',
    overview: [
      '我发现传统待办清单无法直观展示跨天任务并行关系，于是确定了以“甘特图可视化”为差异化的产品方向，解决复杂项目规划难题。',
      '项目采用 Vibe Coding 快速构建 MVP，重点验证 GenAI 在垂直生产力工具场景中的真实可用性。',
    ],
    contributions: [
      '完成用户洞察与产品方向定义，明确复杂项目规划这一核心场景。',
      '设计精细化 Prompt 体系，将模糊自然语言转化为结构化 JSON 指令。',
      '通过日历参照表与时区锁定解决时间管理幻觉问题。',
      '快速完成拖拽缩放甘特图原型，并将在线体验页部署到 GitHub Pages 用于验证。',
    ],
    highlights: [
      {
        title: 'AI 交互设计',
        desc: '实现“一句话生成复杂排期”的 LUI 交互，让自然语言输入真正可用。',
        icon: 'ph-chat-teardrop-text',
      },
      {
        title: 'MVP 快速验证',
        desc: '通过 Vibe Coding 在短周期内完成高保真原型，降低方向判断成本。',
        icon: 'ph-lightning',
      },
    ],
    metrics: [
      { value: 'Vibe', label: '开发模式', subtext: '快速构建 MVP', symbol: '' },
      { value: 'LUI', label: '交互形式', subtext: '一句话生成排期', symbol: '' },
      { value: '100', label: '核心流程可用', subtext: '甘特图可视化已实现', symbol: '%' },
      { value: '1', label: '个人项目', subtext: '独立完成验证', symbol: '人' },
    ],
    retrospective: [
      {
        title: '验证了 GenAI 工具价值',
        desc: '只有当 AI 真正减少规划成本时，用户才会把它当作工具而不是演示功能。',
        type: 'positive',
      },
      {
        title: '后续应补强解释层',
        desc: '排期结果为什么这样安排，需要更明确的说明和可调节能力。',
        type: 'negative',
      },
    ],
    images: [],
    demoUrl: 'https://yva1nne.github.io/Smart-Ganttodo/',
    demoLabel: '在线体验 Smart-Ganttodo',
  },
  {
    id: 'PRJ_03',
    type: 'PROJECT',
    title: '基于 AI 的跨工艺模拟集成电路行为建模',
    company: '浙江大学',
    date: '2025.08 - 2025.12',
    role: '算法工程师',
    location: '杭州',
    teamSize: 3,
    tags: ['K-Means', 'Docker', '算法工程化', '数据建模'],
    status: '已交付',
    shortDesc: '面向跨工艺迁移场景搭建参数推演与行为建模平台，缩短设计验证周期。',
    overview: [
      '面对芯片跨工艺移植中的数据稀缺难题，我参与构建跨工艺参数推演平台，目标是替代高耗时的人工 SPICE 仿真流程。',
      '我负责模型策略工程化、Docker 化封装与部署验证，让结果不只停留在实验室里。',
    ],
    contributions: [
      '构建跨工艺参数推演平台，替代高耗时人工仿真流程。',
      '制定“物理感知 + 分层建模”策略，解决少样本冷启动问题。',
      '引入 K-Means 聚类，提升模型泛化能力。',
      '推动算法模型 Docker 化部署，提高设计团队迭代效率。',
    ],
    highlights: [
      {
        title: '物理感知 + 分层建模',
        desc: '在小样本与跨工艺条件下，保证模型稳定性和泛化能力。',
        icon: 'ph-layers',
      },
      {
        title: '工程化交付',
        desc: '把模型从算法结果推进成可部署、可复现的工程能力。',
        icon: 'ph-box-arrow-up',
      },
    ],
    metrics: [
      { value: '>0.99', label: '关键指标 R2', subtext: '确保模型泛化能力', symbol: '' },
      { value: '显著', label: '仿真效率提升', subtext: '替代人工 SPICE 流程', symbol: '' },
      { value: 'Docker', label: '部署方式', subtext: '容器化交付验证', symbol: '' },
      { value: '3', label: '团队协作规模', subtext: '算法与工程协同', symbol: '人' },
    ],
    retrospective: [
      {
        title: '算法与工程结合',
        desc: '只有把模型封装进真实工作流，算法价值才会被业务和团队真正感知。',
        type: 'positive',
      },
    ],
    images: [],
  },
  {
    id: 'EXP_01',
    type: 'INTERNSHIP',
    title: 'AI 产品经理实习生',
    company: '北京智谱华章科技股份有限公司',
    date: '2025.12 - 至今',
    role: 'AI 产品经理实习生',
    location: '杭州',
    teamSize: 5,
    tags: ['大模型产品', 'RAG 知识库', '智能体交互', '数据可视化'],
    status: '进行中',
    shortDesc: '参与城投大模型体系一期建设，负责知识库、展示大屏和智能体交互相关工作。',
    overview: [
      '我参与杭州城投集团“城智大模型体系”一期建设，负责安居集团知识库结构设计、权限配置，以及城投展示大屏与智能体交互方案。',
      '这段经历让我从更真实的 To B 项目视角理解了知识组织、展示逻辑和智能体工作流如何一起服务业务场景。',
    ],
    contributions: [
      '对比多种文档切片策略，最终确定“语义切分 + 固定窗口”混合方案。',
      '设计知识库分层结构与权限策略，提升检索准确率和访问控制能力。',
      '使用 Axure 和 Figma 主导 17 个展示页面的大屏原型与高保真设计。',
      '通过 Vibe Coding 快速构建智能体交互原型，并与前端协同落地。',
    ],
    highlights: [
      {
        title: '知识库策略优化',
        desc: '在召回率、语义完整性和响应速度之间做平衡，而不是只追求单一指标。',
        icon: 'ph-database',
      },
      {
        title: '展示型智能体交互',
        desc: '把讲解脚本、数据展示与问答能力结合成一套更有说服力的体验。',
        icon: 'ph-presentation-chart',
      },
    ],
    metrics: [
      { value: '17', label: '展示页面', subtext: '含首页、弹窗与子页面', symbol: '页' },
      { value: '1', label: '智能体工作流', subtext: '形成完整问答闭环', symbol: '套' },
      { value: 'Axure', label: '原型工具', subtext: '支撑交互表达', symbol: '' },
      { value: '进行中', label: '项目状态', subtext: '持续迭代优化', symbol: '' },
    ],
    retrospective: [
      {
        title: 'To B 项目更看重结构化表达',
        desc: '很多问题不在模型本身，而在于权限、知识组织和展示逻辑是否足够清楚。',
        type: 'positive',
      },
    ],
    images: [],
  },
];
