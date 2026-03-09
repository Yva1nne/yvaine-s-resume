import React, { useEffect, useState } from 'react';
import { Experience } from '../data';

interface DetailProps {
  experience: Experience;
  onBack: () => void;
  onNavigate: (id: string) => void;
  categoryExperiences: Experience[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Detail({ experience, onBack, onNavigate, categoryExperiences, currentIndex, onPrev, onNext }: DetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [experience.id]);

  useEffect(() => {
    if (experience.images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % experience.images.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [experience.id, experience.images.length]);

  return (
    <div className="fade-in flex flex-col min-h-[800px] bg-white">
      <header className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black bg-white">
        <div className="lg:col-span-8 p-6 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black pattern-grid relative">
          <div className="flex items-start justify-between mb-8">
            <span className="px-4 py-1.5 bg-[#4da8c7] text-white text-xs font-bold uppercase border border-black shadow-[4px_4px_0px_0px_black]">
              {experience.id}
            </span>
            <span className="text-xs font-bold bg-white border border-black px-2 py-1">{experience.date}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.85] tracking-tight mb-8">
            {experience.title.split(' ')[0]}<br/>
            <span className="text-outline-black text-[#d0dde8] hover:text-[#4da8c7] transition-colors duration-300">
              {experience.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <div className="flex flex-wrap gap-3">
            {experience.tags.map((tag, i) => (
              <span key={i} className="border border-black px-3 py-1 text-xs font-bold bg-white shadow-[2px_2px_0px_0px_black] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_black] transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-gray-50 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl uppercase mb-6 flex items-center gap-2">
              <i className="ph-fill ph-info text-[#4da8c7]"></i> 快速概览
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-dashed border-black pb-2">
                <span className="text-xs text-gray-500 font-bold uppercase">角色</span>
                <span className="text-sm font-bold text-right">{experience.role}</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-black pb-2">
                <span className="text-xs text-gray-500 font-bold uppercase">公司</span>
                <span className="text-sm font-bold text-right">{experience.company}</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-black pb-2">
                <span className="text-xs text-gray-500 font-bold uppercase">团队规模</span>
                <div className="flex text-[#4da8c7]">
                  {Array(experience.teamSize).fill(0).map((_, i) => (
                    <i key={i} className="ph-fill ph-user"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_black] flex items-center justify-between">
              <span className="text-xs font-bold uppercase">状态</span>
              <span className={`flex items-center gap-2 text-xs font-bold px-2 py-0.5 ${experience.status === '已上线' ? 'text-green-600 border-green-600 bg-green-50' : 'text-blue-600 border-blue-600 bg-blue-50'} border`}>
                <span className={`w-2 h-2 rounded-full ${experience.status === '已上线' ? 'bg-green-500' : 'bg-blue-500'} animate-pulse`}></span>
                {experience.status}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b-2 border-black bg-gray-100 p-6 md:p-12">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold border border-black">01</span>
            <h2 className="font-bold uppercase text-2xl tracking-tight">界面展示</h2>
          </div>
        </div>

        <div className="w-full aspect-video bg-[#1a2f3d] border-2 border-black shadow-[8px_8px_0px_0px_black] relative overflow-hidden group flex items-center justify-center">
          {experience.images.length > 0 ? (
            <>
              {experience.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Gallery image ${idx + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  referrerPolicy="no-referrer"
                />
              ))}
              {experience.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {experience.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full border border-white transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-transparent hover:bg-white/50'}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-[#4da8c7] font-mono text-sm">暂无图片数据</div>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        <aside className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-50 p-6 md:p-8 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold border border-black">02</span>
            <h2 className="font-bold uppercase text-xl tracking-tight">规格与详情</h2>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-dashed border-gray-300 pb-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">类别</h4>
              <p className="font-bold text-lg">{experience.type === 'PROJECT' ? '项目经历' : '实习经历'}</p>
            </div>

            <div className="border-b-2 border-dashed border-gray-300 pb-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">技术栈</h4>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, i) => (
                  <span key={i} className="bg-white border border-black px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border-b-2 border-dashed border-gray-300 pb-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">主要贡献</h4>
              <ul className="text-sm font-bold space-y-2">
                {experience.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="ph-bold ph-check text-[#4da8c7] mt-1"></i> 
                    <span className="font-medium text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8 bg-white p-6 md:p-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 bg-[#4da8c7] text-white flex items-center justify-center text-sm font-bold border border-black shadow-[3px_3px_0px_0px_black]">03</span>
              <h2 className="font-bold uppercase text-xl tracking-tight">执行摘要</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 border-l-4 border-[#4da8c7] p-6 mb-6">
                <p className="text-base md:text-lg leading-relaxed font-medium text-gray-800 m-0 whitespace-pre-wrap">
                  {experience.overview.split('\n\n')[0]}
                </p>
              </div>
              {experience.overview.split('\n\n').slice(1).map((para, i) => (
                <p key={i} className="text-sm md:text-base leading-loose text-gray-600 mb-4 font-medium text-justify">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 bg-[#4da8c7] text-white flex items-center justify-center text-sm font-bold border border-black shadow-[3px_3px_0px_0px_black]">04</span>
              <h2 className="font-bold uppercase text-xl tracking-tight">核心亮点</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {experience.highlights.map((h, i) => (
                <div key={i} className="border-2 border-black p-5 hover:shadow-[6px_6px_0px_0px_#4da8c7] transition-shadow group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-[#4da8c7] transition-colors">{h.title}</h3>
                    <i className={`ph-fill ${h.icon} text-2xl text-gray-300 group-hover:text-[#4da8c7]`}></i>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <section className="border-b-2 border-black bg-gray-50 border-t-2 border-t-black p-6 md:p-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold border border-black">05</span>
          <h2 className="font-bold uppercase text-xl tracking-tight">影响与指标</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experience.metrics.map((m, i) => (
            <div key={i} className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_black] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute -right-4 -top-4 text-9xl text-gray-100 font-bold z-0 rotate-12 group-hover:text-[#4da8c7]/10 transition-colors">{m.symbol}</div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#4da8c7] mb-2 font-mono">{m.value}{m.symbol}</div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{m.label}</h4>
                <p className="text-[10px] text-gray-500 font-bold">{m.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold border border-black">06</span>
          <h2 className="font-bold uppercase text-xl tracking-tight">项目回顾</h2>
        </div>

        <div className="border-l-2 border-black ml-4 space-y-8 relative">
          {experience.retrospective.map((r, i) => (
            <div key={i} className="relative pl-8">
              <div className={`absolute -left-[13px] top-0 w-6 h-6 border-2 border-black ${r.type === 'positive' ? 'bg-[#4da8c7]' : 'bg-white'}`}></div>
              <h3 className="font-bold text-lg uppercase mb-2">{r.title}</h3>
              <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-black bg-[#1a2f3d] p-8 md:p-12 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left w-full md:w-auto">
            <button onClick={onBack} className="text-2xl font-bold uppercase hover:text-[#4da8c7] transition-colors flex items-center gap-2 group">
              <i className="ph-bold ph-arrow-left group-hover:-translate-x-2 transition-transform"></i> 返回首页
            </button>
          </div>

          <div className="text-right w-full md:w-auto flex items-center gap-4 justify-end">
            <button onClick={onPrev} disabled={currentIndex === 0} className="w-10 h-10 border-2 border-[#4da8c7] text-[#4da8c7] flex items-center justify-center hover:bg-[#4da8c7] hover:text-[#1a2f3d] transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#4da8c7] disabled:cursor-not-allowed">
              <i className="ph-bold ph-caret-left"></i>
            </button>
            <span className="text-xs font-bold w-16 text-center text-white">
              {String(currentIndex + 1).padStart(2, '0')} / {String(categoryExperiences.length).padStart(2, '0')}
            </span>
            <button onClick={onNext} disabled={currentIndex === categoryExperiences.length - 1} className="w-10 h-10 border-2 border-[#4da8c7] text-[#4da8c7] flex items-center justify-center hover:bg-[#4da8c7] hover:text-[#1a2f3d] transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#4da8c7] disabled:cursor-not-allowed">
              <i className="ph-bold ph-caret-right"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
