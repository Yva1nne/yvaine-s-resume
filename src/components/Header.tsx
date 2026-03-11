import React from 'react';
import type { TopView } from '../App';
import { profile } from '../data';

interface HeaderProps {
  activeView: TopView;
  onChange: (view: TopView) => void;
}

const navItems: TopView[] = ['home', 'projects', 'about'];

export default function Header({ activeView, onChange }: HeaderProps) {
  return (
    <header className="header-shell">
      <div className="header-brand">
        <div className="header-badge">Manifest v3.0</div>
        <div>
          <h1 className="header-title">{profile.name}</h1>
          <p className="header-subtitle">{profile.role} / {profile.location}</p>
        </div>
      </div>

      <nav className="header-nav" aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={`nav-chip ${activeView === item ? 'active' : ''}`}
          >
            {item === 'home' ? 'Home' : item === 'projects' ? 'Projects' : 'About'}
          </button>
        ))}
      </nav>
    </header>
  );
}
