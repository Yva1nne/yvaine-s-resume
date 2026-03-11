import React, { useEffect, useState } from 'react';
import type { TopView } from '../App';
import type { Experience } from '../data';

interface NavBarProps {
  activeView: TopView;
  selectedExperience?: Experience;
  currentIndex: number;
  totalItems: number;
}

export default function NavBar({ activeView, selectedExperience, currentIndex, totalItems }: NavBarProps) {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Shanghai',
    }).format(new Date()),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(
        new Intl.DateTimeFormat('zh-CN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Shanghai',
        }).format(new Date()),
      );
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="status-bar">
      <div className="status-copy">
        <span>{activeView === 'home' ? '首页叙事' : activeView === 'projects' ? '项目栏目' : '关于我'}</span>
        <span>Hangzhou {time}</span>
        {activeView === 'projects' && selectedExperience && (
          <span>
            当前查看 {selectedExperience.id}
            {totalItems > 0 ? ` / ${String(currentIndex + 1).padStart(2, '0')} of ${String(totalItems).padStart(2, '0')}` : ''}
          </span>
        )}
      </div>
      <div className="status-pulse">
        <span className="pulse-dot" />
        数字分身在线
      </div>
    </div>
  );
}
