import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Detail from './components/Detail';
import Chatbot from './components/Chatbot';
import { experiences } from './data';

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedExperience = selectedId ? experiences.find(e => e.id === selectedId) : undefined;
  const categoryExperiences = selectedExperience ? experiences.filter(e => e.type === selectedExperience.type) : [];
  const currentIndex = selectedExperience ? categoryExperiences.findIndex(e => e.id === selectedId) : 0;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedId(categoryExperiences[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < categoryExperiences.length - 1) {
      setSelectedId(categoryExperiences[currentIndex + 1].id);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start justify-center py-8 px-4 md:py-16 md:px-8">
      <div className="w-full max-w-[1440px] bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden fade-in">
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-black z-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-black z-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-black z-50 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-black z-50 pointer-events-none"></div>

        {/* Consistent Header */}
        <Header />
        
        {/* Consistent Nav Bar */}
        <NavBar 
          currentView={selectedId ? 'detail' : 'home'} 
          experience={selectedExperience}
          onBack={() => setSelectedId(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={currentIndex}
          totalItems={categoryExperiences.length}
        />

        {/* Main Content Area */}
        {selectedExperience ? (
          <Detail 
            experience={selectedExperience} 
            onBack={() => setSelectedId(null)} 
            onNavigate={(id) => setSelectedId(id)}
            categoryExperiences={categoryExperiences}
            currentIndex={currentIndex}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ) : (
          <Home onSelect={(id) => setSelectedId(id)} />
        )}
      </div>
      
      {/* Global Chatbot Component */}
      <Chatbot />
    </div>
  );
}
