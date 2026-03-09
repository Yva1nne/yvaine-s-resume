export type Experience = {
  id: string;
  type: 'INTERNSHIP' | 'PROJECT';
  title: string;
  date: string;
  role: string;
  company: string;
  location: string;
  teamSize: number;
  tags: string[];
  status: string;
  overview: string;
  highlights: { title: string; desc: string; icon: string }[];
  metrics: { value: string; label: string; subtext: string; symbol: string }[];
  retrospective: { title: string; desc: string; type: 'positive' | 'negative' }[];
  shortDesc: string;
  contributions: string[];
  images: string[];
};

export const experiences: Experience[] = [
  {
    id: 'PRJ_01',
    type: 'PROJECT',
    title: '晶圆制造缺陷分析系统',
    company: '浙江大学',
    date: '2024.09 - 2025.07',
    role: 'AI产品经理 / 全栈开发',
    location: '杭州',
    teamSize: 4,
    tags: ['Python', 'ResNet50', 'Transformer', '产品设计'],
    status: '已上线',
    shortDesc: '晶圆制造端到端智能缺陷分析与根本原因追踪系统。',
    overview: '针对产线良率分析依赖人工、缺乏根因追溯的痛点，主导从 0 到 1 设计“检测-诊断-溯源”闭环系统，撰写 PRD，定义缺陷分类、分割、语义诊断及“以图搜图”四大核心模块，通过 Python 完成交互原型开发与全栈集成。',
    contributions: [
      '主导从 0 到 1 设计“检测-诊断-溯源”闭环系统，撰写 PRD。',
      '定义缺陷分类、分割、语义诊断及“以图搜图”四大核心模块。',
      '通过 Python 完成交互原型开发与全栈集成。',
      '制定 ResNet50+Transformer 技术路线，解决工业少样本难题。'
    ],
    highlights: [
      { title: '多模态检索', desc: '设计多模态检索策略，实现 Top-1 准确率 96.2%及 0.03 秒实时推理。', icon: 'ph-magnifying-glass' },
      { title: '闭环系统', desc: '主导从 0 到 1 设计“检测-诊断-溯源”闭环系统，解决产线良率分析痛点。', icon: 'ph-arrows-clockwise' }
    ],
    metrics: [
      { value: '90', label: '人工标注成本降低', subtext: '显著提升产线效率', symbol: '%' },
      { value: '96.2', label: 'Top-1 准确率', subtext: '高精度缺陷识别', symbol: '%' },
      { value: '0.03', label: '实时推理', subtext: '满足工业实时性要求', symbol: 's' },
      { value: '1', label: '国家级奖项', subtext: '华为杯全国一等奖', symbol: '项' }
    ],
    retrospective: [
      { title: '商业价值落地', desc: '成功落地，将人工标注成本降低 90%。该项目荣获“华为杯”中国研究生人工智能创新大赛全国一等奖。', type: 'positive' },
      { title: '技术与业务平衡', desc: '在设计算法时，充分考虑了精度与产线效率的平衡，确保了系统的实用性。', type: 'positive' }
    ],
    images: []
  },
  {
    id: 'PRJ_02',
    type: 'PROJECT',
    title: '智能待办系统',
    company: '个人项目',
    date: '2025.09 - 2025.12',
    role: 'AI产品经理',
    location: '杭州',
    teamSize: 1,
    tags: ['Prompt Engineering', 'Vibe Coding', 'GenAI', 'LUI交互'],
    status: 'MVP验证',
    shortDesc: '甘特图风格化智能待办系统，解决复杂项目规划难题。',
    overview: '发现传统待办清单无法直观展示跨天任务并行关系的体验缺口，确定了以“甘特图可视化”为差异化的产品方向，解决复杂项目规划难题。\n\n采用 Vibe Coding 模式快速构建 MVP，实现拖拽缩放的前端交互，验证了 GenAI 在垂直生产力工具场景的落地可行性。',
    contributions: [
      '洞察用户需求，确定以“甘特图可视化”为差异化的产品方向。',
      '设计精细化 Prompt 体系，将模糊自然语言转化为结构化 JSON 指令。',
      '通过注入日历参照表与时区锁定，解决了大模型时间管理“幻觉”问题。',
      '采用 Vibe Coding 模式快速构建 MVP，实现拖拽缩放的前端交互。'
    ],
    highlights: [
      { title: '精细化 Prompt', desc: '将模糊自然语言转化为结构化 JSON 指令，实现“一句话生成复杂排期”的 LUI 交互。', icon: 'ph-chat-teardrop-text' },
      { title: '解决大模型幻觉', desc: '通过注入日历参照表与时区锁定，解决了大模型时间管理“幻觉”问题。', icon: 'ph-calendar-check' }
    ],
    metrics: [
      { value: 'Vibe', label: '开发模式', subtext: '快速构建 MVP', symbol: '' },
      { value: 'LUI', label: '交互范式', subtext: '一句话生成排期', symbol: '' },
      { value: '100', label: '核心功能', subtext: '甘特图可视化实现', symbol: '%' },
      { value: '1', label: '场景验证', subtext: '垂直生产力工具', symbol: '项' }
    ],
    retrospective: [
      { title: 'GenAI 落地验证', desc: '成功验证了 GenAI 在垂直生产力工具场景的落地可行性，探索了新的开发模式。', type: 'positive' },
      { title: '提示词工程实践', desc: '深入实践了 Prompt Engineering，有效解决了大模型在特定场景下的幻觉问题。', type: 'positive' }
    ],
    images: []
  },
  {
    id: 'PRJ_03',
    type: 'PROJECT',
    title: '集成电路行为建模',
    company: '浙江大学',
    date: '2025.08 - 2025.12',
    role: '算法工程师',
    location: '杭州',
    teamSize: 3,
    tags: ['K-Means', 'Docker', '算法工程化', '数据建模'],
    status: '已交付',
    shortDesc: '基于 AI 的跨工艺模拟集成电路行为建模。',
    overview: '面对芯片跨工艺移植数据稀缺难题，构建跨工艺参数推演平台，旨在替代高耗时的人工 SPICE 仿真流程。\n\n推动算法模型的工程化封装与 Docker 容器化部署验证，提升了设计团队的迭代效率。',
    contributions: [
      '构建跨工艺参数推演平台，替代高耗时的人工 SPICE 仿真流程。',
      '制定“物理感知+分层建模”策略。',
      '引入 K-Means 聚类解决小样本冷启动问题。',
      '推动算法模型的工程化封装与 Docker 容器化部署验证。'
    ],
    highlights: [
      { title: '物理感知+分层建模', desc: '制定“物理感知+分层建模”策略，引入 K-Means 聚类解决小样本冷启动问题。', icon: 'ph-layers' },
      { title: '工程化封装', desc: '推动算法模型的工程化封装与 Docker 容器化部署验证。', icon: 'ph-box-arrow-up' }
    ],
    metrics: [
      { value: '>0.99', label: '关键性能指标 R2', subtext: '确保模型泛化能力', symbol: '' },
      { value: '显著', label: '仿真效率提升', subtext: '替代人工 SPICE 仿真', symbol: '' },
      { value: 'Docker', label: '部署方式', subtext: '容器化部署验证', symbol: '' },
      { value: '解决', label: '冷启动问题', subtext: '引入 K-Means 聚类', symbol: '' }
    ],
    retrospective: [
      { title: '提升迭代效率', desc: '通过工程化封装和容器化部署，显著提升了设计团队的迭代效率。', type: 'positive' },
      { title: '算法与工程结合', desc: '将复杂的算法模型转化为可实际部署的工程化产品，积累了宝贵的实践经验。', type: 'positive' }
    ],
    images: []
  },
  {
    id: 'EXP_01',
    type: 'INTERNSHIP',
    title: 'AI产品经理实习生',
    company: '某知名科技公司',
    date: '2026.03 - 至今',
    role: '产品实习生',
    location: '杭州',
    teamSize: 5,
    tags: ['产品设计', '需求分析', '原型图'],
    status: '进行中',
    shortDesc: '负责AI相关产品的功能规划与落地推进。',
    overview: '在此处详细描述您的实习经历、负责的核心模块以及取得的业务成果。',
    contributions: [
      '参与核心AI产品线的功能迭代与需求调研。',
      '撰写PRD文档，绘制高保真原型图。',
      '跨部门协调研发与测试资源，保障项目按期交付。'
    ],
    highlights: [
      { title: '需求落地', desc: '成功推动多个核心功能上线，提升用户活跃度。', icon: 'ph-rocket-launch' },
      { title: '体验优化', desc: '通过用户调研优化交互流程，降低用户流失率。', icon: 'ph-chart-line-up' }
    ],
    metrics: [
      { value: '100', label: '按期交付率', subtext: '项目管理', symbol: '%' },
      { value: '3', label: '核心功能', subtext: '成功上线', symbol: '个' }
    ],
    retrospective: [
      { title: '跨部门协作', desc: '在实习期间，深刻体会到了跨部门沟通的重要性，提升了项目推进能力。', type: 'positive' }
    ],
    images: []
  }
];
