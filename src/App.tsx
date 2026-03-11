import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Chatbot from './components/Chatbot';
import { experiences } from './data';

export type TopView = 'home' | 'projects' | 'about';

export default function App() {
  const [view, setView] = useState<TopView>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedExperience = useMemo(
    () => (selectedProjectId ? experiences.find((item) => item.id === selectedProjectId) : undefined),
    [selectedProjectId],
  );

  const categoryExperiences = useMemo(() => {
    if (!selectedExperience) return [];
    return experiences.filter((item) => item.type === selectedExperience.type);
  }, [selectedExperience]);

  const currentIndex = useMemo(() => {
    if (!selectedExperience) return 0;
    return categoryExperiences.findIndex((item) => item.id === selectedExperience.id);
  }, [categoryExperiences, selectedExperience]);

  const openProjects = () => {
    setView('projects');
  };

  const openProjectDetail = (id: string) => {
    setView('projects');
    setSelectedProjectId(id);
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setView('projects');
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProjectId(categoryExperiences[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < categoryExperiences.length - 1) {
      setSelectedProjectId(categoryExperiences[currentIndex + 1].id);
    }
  };

  return (
    <div className="site-shell">
      <div className="site-frame">
        <Header activeView={view} onChange={(nextView) => {
          setView(nextView);
          if (nextView !== 'projects') setSelectedProjectId(null);
        }} />
        <NavBar
          activeView={view}
          selectedExperience={selectedExperience}
          currentIndex={currentIndex}
          totalItems={categoryExperiences.length}
        />

        <main className="main-stage">
          {view === 'home' && (
            <Home onOpenProjects={openProjects} onOpenProject={openProjectDetail} />
          )}
          {view === 'projects' && (
            <Projects
              selectedExperience={selectedExperience}
              onOpenProject={openProjectDetail}
              onBackToProjects={handleBackToProjects}
              onPrev={handlePrev}
              onNext={handleNext}
              currentIndex={currentIndex}
              totalItems={categoryExperiences.length}
            />
          )}
          {view === 'about' && <About />}
        </main>
      </div>

      <Chatbot />
    </div>
  );
}
