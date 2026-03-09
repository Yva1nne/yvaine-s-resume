import React from 'react';
import { Experience } from '../data';

interface NavBarProps {
  currentView: 'home' | 'detail';
  experience?: Experience;
  onBack?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalItems?: number;
}

export default function NavBar({ currentView, experience, onBack, onPrev, onNext, currentIndex = 0, totalItems = 0 }: NavBarProps) {
  if (currentView === 'home') {
    return (
      <div className="border-b-2 border-black bg-[#1a2f3d] text-[#4da8c7] py-3 select-none overflow-hidden relative z-10">
        <div className="marquee-wrapper w-full overflow-hidden">
          <div className="animate-marquee text-sm font-bold uppercase tracking-wider flex items-center gap-8">
            {Array(2).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                <span>/// LLM 应用开发</span><i className="ph ph-star-four text-white"></i>
                <span>Agent构建</span><i className="ph ph-star-four text-white"></i>
                <span>Workflow构建</span><i className="ph ph-star-four text-white"></i>
                <span>CV算法</span><i className="ph ph-star-four text-white"></i>
                <span>Python&pytorch</span><i className="ph ph-star-four text-white"></i>
                <span>Axure</span><i className="ph ph-star-four text-white"></i>
                <span>Figma</span><i className="ph ph-star-four text-white"></i>
                <span>CET-6</span><i className="ph ph-star-four text-white"></i>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="bg-[#1a2f3d] text-[#4da8c7] border-b-2 border-black p-4 md:px-8 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4 relative z-40">
      <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors group">
        <i className="ph-bold ph-arrow-left group-hover:-translate-x-1 transition-transform"></i>
        返回首页
      </button>
      
      <div className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/50">
        <span>MANIFEST_v.2.4</span>
        <span className="text-[#4da8c7]">//</span>
        <span>{experience?.type === 'PROJECT' ? '项目经历' : '实习经历'}</span>
        <span className="text-[#4da8c7]">//</span>
        <span className="text-white">{experience?.id}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button onClick={onPrev} disabled={currentIndex === 0} className="w-8 h-8 border border-[#4da8c7] text-[#4da8c7] flex items-center justify-center hover:bg-[#4da8c7] hover:text-[#1a2f3d] transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#4da8c7] disabled:cursor-not-allowed">
            <i className="ph-bold ph-caret-left"></i>
          </button>
          <span className="text-xs font-bold w-16 text-center text-white">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
          </span>
          <button onClick={onNext} disabled={currentIndex === totalItems - 1} className="w-8 h-8 border border-[#4da8c7] text-[#4da8c7] flex items-center justify-center hover:bg-[#4da8c7] hover:text-[#1a2f3d] transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#4da8c7] disabled:cursor-not-allowed">
            <i className="ph-bold ph-caret-right"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
