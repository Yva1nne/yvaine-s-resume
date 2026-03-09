import React from 'react';

export default function Header() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black bg-white relative z-40">
      <div className="md:col-span-8 p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between min-h-[180px]">
        <div className="flex justify-between items-start mb-6">
          <span className="text-xs uppercase tracking-widest bg-[#4da8c7] text-white px-3 py-1 border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Manifest_v.2.4
          </span>
        </div>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-1">
            叶奕含
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none text-outline-black hover:text-[#4da8c7] transition-colors duration-300">
            Yvaine
          </h1>
        </div>
      </div>

      <div className="md:col-span-4 grid grid-rows-3 bg-gray-50">
        <div className="border-b-2 border-black px-6 py-4 flex items-center justify-between group cursor-crosshair hover:bg-[#4da8c7] hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider font-bold">求职岗位</span>
          <span className="font-bold text-sm">AI产品经理</span>
        </div>
        <div className="border-b-2 border-black px-6 py-4 flex items-center justify-between group cursor-crosshair hover:bg-[#4da8c7] hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider font-bold">毕业时间</span>
          <span className="font-bold text-sm">2027.6</span>
        </div>
        <div className="px-6 py-4 flex items-center justify-between group cursor-crosshair hover:bg-[#4da8c7] hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider font-bold">所在地区</span>
          <span className="font-bold text-sm">杭州</span>
        </div>
      </div>
    </header>
  );
}
