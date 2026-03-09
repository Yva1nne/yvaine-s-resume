import React from 'react';
import { experiences } from '../data';

interface HomeProps {
  onSelect: (id: string) => void;
}

export default function Home({ onSelect }: HomeProps) {
  const internships = experiences.filter(e => e.type === 'INTERNSHIP');
  const projects = experiences.filter(e => e.type === 'PROJECT');

  return (
    <div className="fade-in flex flex-col min-h-[800px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black flex-grow">
        <aside className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col bg-gray-50 h-full">
          <div className="aspect-square border-b-2 border-black relative overflow-hidden group bg-white">
            <div className="absolute inset-0 pattern-grid flex items-center justify-center">
              <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 right-4 bg-white border border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <i className="ph ph-user-circle text-2xl"></i>
            </div>
            <div className="absolute bottom-4 left-4 bg-[#4da8c7] text-white border border-black px-2 py-1 text-xs font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              出生年月：2002-08
            </div>
          </div>

          <div className="p-6 md:p-8 border-b-2 border-black flex-grow bg-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold border border-black">01</span>
              <h2 className="font-bold uppercase text-xl tracking-tight">个人简介</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-800 text-justify mb-6 font-medium">
              性格平和，与人相处融洽。责任心强，团体意识强，具有良好的逻辑思维能力、组织协调能力与规划能力，在个人生活和团队协作中能够对各项任务进行短期与长期规划，也能够积极配合其他人的工作。目标感强，乐于钻研，在工作上具有良好的执行力和自主性，能够主动、独立解决问题，信息检索能力强。
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-100 p-2 border border-black text-xs text-center font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">浙大本硕</div>
              <div className="bg-gray-100 p-2 border border-black text-xs text-center font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">AI产品与算法</div>
            </div>
          </div>

          <div className="flex flex-col bg-white">
            <a href="#" className="p-4 flex items-center justify-between hover:bg-[#4da8c7] hover:text-white transition-all group">
              <span className="text-sm font-bold">GITHUB 仓库</span>
              <i className="ph ph-arrow-up-right text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </a>
          </div>
        </aside>

        <div className="lg:col-span-8 bg-white flex flex-col">
          <div className="p-6 md:p-8 border-b-2 border-black">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#4da8c7] text-white flex items-center justify-center text-sm font-bold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">02</span>
                <h2 className="font-bold uppercase text-xl tracking-tight">教育背景与荣誉</h2>
              </div>
              <i className="ph ph-graduation-cap text-3xl"></i>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(77,168,199,1)] transition-shadow">
                <h3 className="font-bold text-xl leading-tight mb-2">浙江大学</h3>
                <p className="text-xs font-bold text-[#4da8c7] mb-4 tracking-wide">电子信息（集成电路工程） 硕士</p>
                <p className="text-xs text-gray-600 mb-6 line-clamp-2">主修课程：人工智能辅助集成电路制造（97），集成电路良率分析导论（98）等。</p>
                <div className="flex justify-between items-end border-t-2 border-dashed border-gray-300 pt-4">
                  <span className="text-xs font-bold text-gray-500">状态：在读</span>
                  <span className="text-sm font-bold bg-black text-white px-3 py-1 border border-black">2024.9-至今</span>
                </div>
              </div>
              <div className="border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(77,168,199,1)] transition-shadow">
                <h3 className="font-bold text-xl leading-tight mb-2">浙江大学</h3>
                <p className="text-xs font-bold text-[#4da8c7] mb-4 tracking-wide">电子科学与技术 本科</p>
                <p className="text-xs text-gray-600 mb-6 line-clamp-2">主修课程：边缘计算开发实践（5.0），物联网系统设计（4.5），信号与系统（4.8）等。</p>
                <div className="flex justify-between items-end border-t-2 border-dashed border-gray-300 pt-4">
                  <span className="text-xs font-bold text-gray-500">状态：已毕业</span>
                  <span className="text-sm font-bold bg-black text-white px-3 py-1 border border-black">2020.9-2024.6</span>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-gray-300 pt-6">
              <h3 className="font-bold text-sm uppercase mb-4 text-gray-800">荣誉奖项</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 group">
                  <span className="text-xs font-bold border border-black px-2 py-1 bg-white group-hover:bg-[#4da8c7] group-hover:text-white transition-colors">01</span>
                  <div>
                    <p className="text-sm font-bold leading-none mb-1 group-hover:text-[#4da8c7] transition-colors">全国一等奖</p>
                    <p className="text-xs text-gray-500">“华为杯”第七届中国研究生人工智能创新大赛</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="text-xs font-bold border border-black px-2 py-1 bg-white group-hover:bg-[#4da8c7] group-hover:text-white transition-colors">02</span>
                  <div>
                    <p className="text-sm font-bold leading-none mb-1 group-hover:text-[#4da8c7] transition-colors">全国三等奖</p>
                    <p className="text-xs text-gray-500">2025 中国研究生创“芯”大赛·EDA 精英挑战赛</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="text-xs font-bold border border-black px-2 py-1 bg-white group-hover:bg-[#4da8c7] group-hover:text-white transition-colors">03</span>
                  <div>
                    <p className="text-sm font-bold leading-none mb-1 group-hover:text-[#4da8c7] transition-colors">银奖</p>
                    <p className="text-xs text-gray-500">“建行杯”第八届浙江省国际“互联网+”大学生创新创业大赛</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="text-xs font-bold border border-black px-2 py-1 bg-white group-hover:bg-[#4da8c7] group-hover:text-white transition-colors">04</span>
                  <div>
                    <p className="text-sm font-bold leading-none mb-1 group-hover:text-[#4da8c7] transition-colors">校级荣誉</p>
                    <p className="text-xs text-gray-500">浙江大学优秀研究生，校级社会实践先进个人，优秀毕业论文等</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 flex-grow bg-gray-50/50">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 bg-[#4da8c7] text-white flex items-center justify-center text-sm font-bold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">03</span>
              <h2 className="font-bold uppercase text-xl tracking-tight">实习经历</h2>
            </div>

            <div className="relative border-l-2 border-dashed border-[#4da8c7] ml-3 space-y-10">
              {internships.map((internship) => (
                <div key={internship.id} className="relative pl-8 group">
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white border-2 border-black rounded-full group-hover:bg-[#4da8c7] transition-colors z-10"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h3 className="font-bold text-lg uppercase group-hover:text-[#4da8c7] transition-colors">{internship.title}</h3>
                    <span className="text-[10px] font-bold bg-white border border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">{internship.date}</span>
                  </div>
                  <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">{internship.role} | {internship.company}</p>
                  <ul className="text-xs text-gray-600 list-disc list-inside space-y-1 mb-3 marker:text-[#4da8c7]">
                    {internship.contributions.slice(0, 2).map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                  <button onClick={() => onSelect(internship.id)} className="text-xs font-bold border-b-2 border-black hover:text-[#4da8c7] hover:border-[#4da8c7] transition-colors pb-0.5 flex items-center gap-1">
                    查看详情 <i className="ph-bold ph-arrow-right"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black bg-gray-50 p-6 md:p-8 w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-[#4da8c7] text-white flex items-center justify-center text-sm font-bold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">04</span>
            <h2 className="font-bold uppercase text-xl tracking-tight">项目经历</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border-2 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold border border-black px-2 py-0.5 bg-gray-100 group-hover:bg-[#4da8c7] group-hover:text-white transition-colors">{project.id}</span>
                <div className="w-3 h-3 rounded-full bg-[#4da8c7] border border-black"></div>
              </div>
              <h3 className="font-bold text-2xl leading-none mb-3 uppercase">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] border border-gray-400 px-1.5 py-0.5 text-gray-600 font-bold">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-gray-600 mb-6 flex-grow line-clamp-3 font-medium">{project.shortDesc}</p>
              <button onClick={() => onSelect(project.id)} className="w-full border-2 border-black py-3 text-xs font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 group/btn">
                查看详情 <i className="ph-bold ph-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="border-t-2 border-black bg-gray-100 p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div>
            <h4 className="font-bold uppercase mb-6 flex items-center gap-2 text-lg">
              <i className="ph-fill ph-terminal-window text-2xl"></i> 系统状态
            </h4>
            <div className="space-y-3 text-xs font-bold max-w-xs font-mono">
              <div className="flex justify-between border-b border-gray-400 pb-1 border-dashed">
                <span className="text-gray-500">最后更新</span>
                <span>2024.05.21</span>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-1 border-dashed">
                <span className="text-gray-500">可用状态</span>
                <span className="text-[#4da8c7] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#4da8c7] animate-pulse"></span> 可接受工作邀约</span>
              </div>
              <div className="flex justify-between border-b border-gray-400 pb-1 border-dashed">
                <span className="text-gray-500">版本号</span>
                <span>REF_2245_B</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <p className="text-xs text-gray-500 max-w-md md:text-right leading-relaxed">
              本文档是专业能力的数字展示。所有权利由运营者保留。使用 React 和 Tailwind CSS 构建。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none bg-[#4da8c7] text-white px-8 py-4 text-sm font-bold uppercase hover:bg-white hover:text-[#4da8c7] border-2 border-[#4da8c7] transition-all shadow-[6px_6px_0px_0px_rgba(77,168,199,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                下载 PDF
              </button>
              <button className="flex-1 sm:flex-none bg-white text-black px-8 py-4 text-sm font-bold uppercase border-2 border-black hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                复制联系方式
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
