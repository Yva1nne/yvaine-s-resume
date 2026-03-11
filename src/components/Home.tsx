import React from 'react';
import { awards, education, featuredProjectIds, experiences, profile } from '../data';
import { withBasePath } from '../utils/assets';

interface HomeProps {
  onOpenProjects: () => void;
  onOpenProject: (id: string) => void;
}

export default function Home({ onOpenProjects, onOpenProject }: HomeProps) {
  const featured = featuredProjectIds
    .map((id) => experiences.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="page-shell">
      <section className="hero-grid">
        <div className="hero-copy surface-panel compact-hero">
          <div className="eyebrow">Home / Manifest</div>
          <div className="hero-topline">
            <div className="hero-portrait-wrap">
              <img
                src={withBasePath('assets/profile.jpg')}
                alt={profile.englishName}
                className="hero-portrait"
              />
            </div>
            <div className="hero-intro">
              <div className="hero-person-meta">
                <span>{profile.role}</span>
                <span>{profile.location}</span>
                <span>{profile.status}</span>
              </div>
              <h2 className="hero-title">{profile.heroTitle}</h2>
              <p className="hero-text">{profile.heroSubtitle}</p>
            </div>
          </div>
          <div className="chip-cloud">
            {profile.capabilities.slice(0, 6).map((item) => (
              <span key={item} className="soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-side">
          <div className="surface-panel floating-card large">
            <div className="eyebrow">Current Focus</div>
            <div className="stack-list">
              {profile.currentFocus.map((item) => (
                <p key={item} className="body-small">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="surface-panel floating-card accent">
            <div className="eyebrow">Tech Stack</div>
            <div className="chip-cloud">
              {profile.capabilities.map((item) => (
                <span key={item} className="soft-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block home-summary-grid">
        <div className="surface-panel timeline-panel">
          <div className="eyebrow">Education</div>
          <div className="timeline-list">
            {education.map((item) => (
              <div key={item.degree} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="info-head">
                    <h3>{item.school}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="body-small strong">{item.degree}</p>
                  <p className="body-small muted">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel recognition-panel">
          <div className="eyebrow">Recognition</div>
          <div className="stack-list">
            {awards.map((item) => (
              <div key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p className="body-small muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected Work</div>
            <h3 className="section-title">从精选项目认识我正在解决的问题。</h3>
          </div>
          <button type="button" onClick={onOpenProjects} className="inline-link">
            查看全部项目
          </button>
        </div>

        <div className="feature-grid">
          {featured.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`feature-card ${index === 0 ? 'wide' : ''}`}
              onClick={() => onOpenProject(item.id)}
            >
              <div className="feature-meta">
                <span>{item.type === 'PROJECT' ? 'Project' : 'Internship'}</span>
                <span>{item.date}</span>
              </div>
              <h4 className="feature-title">{item.title}</h4>
              <p className="feature-text">{item.shortDesc}</p>
              <div className="chip-cloud">
                {item.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="soft-chip">
                    {tag}
                  </span>
                ))}
              </div>
              {item.images.length > 0 && (
                <div className="feature-image-wrap">
                  <img
                    src={withBasePath(item.images[0])}
                    alt={item.title}
                    className="feature-image"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
