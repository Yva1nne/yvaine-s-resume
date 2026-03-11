import React, { useMemo, useState } from 'react';
import Detail from './Detail';
import { experiences, type Experience, type ExperienceType } from '../data';
import { withBasePath } from '../utils/assets';

interface ProjectsProps {
  selectedExperience?: Experience;
  onOpenProject: (id: string) => void;
  onBackToProjects: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export default function Projects({
  selectedExperience,
  onOpenProject,
  onBackToProjects,
  onPrev,
  onNext,
  currentIndex,
  totalItems,
}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | ExperienceType>('ALL');

  const filteredExperiences = useMemo(() => {
    if (activeFilter === 'ALL') return experiences;
    return experiences.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  if (selectedExperience) {
    return (
      <Detail
        experience={selectedExperience}
        onBack={onBackToProjects}
        currentIndex={currentIndex}
        totalItems={totalItems}
        onPrev={onPrev}
        onNext={onNext}
      />
    );
  }

  return (
    <div className="page-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <div className="eyebrow">Projects</div>
            <h2 className="section-title">项目总览先帮人理解方向，再决定要深入看哪一项。</h2>
            <p className="body-small">
              这里统一收项目与实习经历。点击卡片进入下钻页后，仍然留在 Projects 栏目里。
            </p>
          </div>
          <div className="filter-row">
            {(['ALL', 'PROJECT', 'INTERNSHIP'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(item)}
                className={`nav-chip ${activeFilter === item ? 'active' : ''}`}
              >
                {item === 'ALL' ? 'All' : item === 'PROJECT' ? 'Projects' : 'Internships'}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid enhanced">
          {filteredExperiences.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenProject(item.id)}
              className="project-card interactive-card"
            >
              <div className="feature-meta">
                <span>{item.type === 'PROJECT' ? 'Project' : 'Internship'}</span>
                <span>{item.id}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-role">{item.role} / {item.company}</p>
                <p className="feature-text">{item.shortDesc}</p>
              </div>

              <div className="chip-cloud">
                {item.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="soft-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card-foot">
                <span>{item.date}</span>
                <span>查看详情</span>
              </div>

              {item.images[0] ? (
                <div className="project-thumb-wrap tall">
                  <img
                    src={withBasePath(item.images[0])}
                    alt={item.title}
                    className="project-thumb"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="project-placeholder">
                  <div className="eyebrow">Preview</div>
                  <p className="body-small">{item.highlights[0]?.desc ?? item.shortDesc}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
