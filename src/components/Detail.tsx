import React from 'react';
import type { Experience } from '../data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { withBasePath } from '../utils/assets';

interface DetailProps {
  experience: Experience;
  onBack: () => void;
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Detail({
  experience,
  onBack,
  currentIndex,
  totalItems,
  onPrev,
  onNext,
}: DetailProps) {
  return (
    <div className="page-shell detail-shell">
      <section className="section-block">
        <div className="section-head">
          <div>
            <button type="button" className="inline-link back-link" onClick={onBack}>
              返回 Projects
            </button>
            <div className="eyebrow">Project Drill-down</div>
            <h2 className="section-title">{experience.title}</h2>
            <p className="detail-subtitle">
              {experience.role} / {experience.company} / {experience.date}
            </p>
          </div>

          <div className="detail-nav">
            <button type="button" className="icon-button" onClick={onPrev} disabled={currentIndex === 0}>
              <i className="ph-bold ph-caret-left" />
            </button>
            <span className="detail-counter">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="icon-button"
              onClick={onNext}
              disabled={currentIndex === totalItems - 1}
            >
              <i className="ph-bold ph-caret-right" />
            </button>
          </div>
        </div>

        <div className="detail-grid">
          <div className="surface-panel detail-main-panel">
            {experience.images.length > 0 ? (
              <div className="carousel-panel">
                <Carousel opts={{ align: 'start', loop: experience.images.length > 1 }}>
                  <CarouselContent>
                    {experience.images.map((item) => (
                      <CarouselItem key={item}>
                        <div className="detail-carousel-media">
                          <img
                            src={withBasePath(item)}
                            alt={experience.title}
                            className="detail-carousel-image"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {experience.images.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>
                  )}
                </Carousel>
              </div>
            ) : (
              <div className="detail-placeholder">
                <div className="eyebrow">No Media</div>
                <p className="body-small">这个条目没有配图，重点展示背景、职责、指标和复盘。</p>
              </div>
            )}

            <div className="detail-rich-copy top-gap">
              {experience.overview.map((item) => (
                <p key={item} className="body-small">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="detail-side">
            <div className="surface-panel interactive-panel">
              <div className="eyebrow">Snapshot</div>
              <div className="stack-list">
                <div className="meta-row"><span>状态</span><strong>{experience.status}</strong></div>
                <div className="meta-row"><span>地点</span><strong>{experience.location}</strong></div>
                <div className="meta-row"><span>团队</span><strong>{experience.teamSize} 人</strong></div>
              </div>
              <div className="chip-cloud top-gap">
                {experience.tags.map((tag) => (
                  <span key={tag} className="soft-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-panel interactive-panel">
              <div className="eyebrow">Core Contributions</div>
              <ul className="detail-list">
                {experience.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {experience.demoUrl && (
        <section className="section-block">
          <div className="surface-panel demo-panel">
            <div className="section-head">
              <div>
                <div className="eyebrow">Live Demo</div>
                <h3 className="section-title compact">这个项目可以直接在简历里体验。</h3>
              </div>
              <a href={experience.demoUrl} target="_blank" rel="noreferrer" className="inline-link">
                {experience.demoLabel ?? '在新标签页打开'}
              </a>
            </div>

            <div className="demo-frame-wrap">
              <iframe
                src={experience.demoUrl}
                title={experience.title}
                className="demo-frame"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>
      )}

      <section className="section-block">
        <div className="section-head">
          <div>
            <div className="eyebrow">Highlights</div>
            <h3 className="section-title compact">关键亮点、结果指标与复盘。</h3>
          </div>
          <button type="button" className="inline-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            回到顶部
          </button>
        </div>

        <div className="detail-grid secondary">
          <div className="surface-panel">
            <div className="stack-list">
              {experience.highlights.map((item) => (
                <div key={item.title} className="info-card hover-card">
                  <div className="info-head">
                    <h3>{item.title}</h3>
                    <i className={`ph-fill ${item.icon}`} />
                  </div>
                  <p className="body-small muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel">
            <div className="metrics-grid">
              {experience.metrics.map((item) => (
                <div key={`${item.label}-${item.value}`} className="metric-card hover-card">
                  <div className="metric-value">
                    {item.value}
                    <span>{item.symbol}</span>
                  </div>
                  <div className="metric-label">{item.label}</div>
                  <div className="metric-subtext">{item.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="surface-panel top-gap">
          <div className="eyebrow">Retrospective</div>
          <div className="stack-list">
            {experience.retrospective.map((item) => (
              <div key={item.title} className="info-card hover-card">
                <div className="info-head">
                  <h3>{item.title}</h3>
                  <span className={`status-pill ${item.type === 'positive' ? 'positive' : 'neutral'}`}>
                    {item.type === 'positive' ? 'Positive' : 'Watchout'}
                  </span>
                </div>
                <p className="body-small muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
