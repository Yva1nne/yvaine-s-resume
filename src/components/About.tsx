import React from 'react';
import { awards, education, profile } from '../data';

export default function About() {
  return (
    <div className="page-shell">
      <section className="section-block about-grid">
        <div className="surface-panel">
          <div className="eyebrow">About</div>
          <h2 className="section-title">我是怎样工作，也正在寻找什么。</h2>
          <div className="stack-list">
            {profile.principles.map((item) => (
              <p key={item} className="body-small">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="surface-panel">
          <div className="eyebrow">Contact</div>
          <p className="body-small">
            公开页面只保留必要联系信息。如果你想进一步了解我的经历、项目或者岗位匹配情况，可以直接邮件联系我。
          </p>
          <a href={`mailto:${profile.email}`} className="email-link">
            {profile.email}
          </a>
          <div className="status-pill">{profile.status}</div>
        </div>
      </section>

      <section className="section-block about-grid">
        <div className="surface-panel">
          <div className="eyebrow">Education</div>
          <div className="stack-list">
            {education.map((item) => (
              <div key={item.degree} className="info-card">
                <div className="info-head">
                  <h3>{item.school}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="body-small strong">{item.degree}</p>
                <p className="body-small muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel">
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
        <div className="surface-panel">
          <div className="eyebrow">Capabilities</div>
          <div className="chip-cloud">
            {profile.capabilities.map((item) => (
              <span key={item} className="soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
