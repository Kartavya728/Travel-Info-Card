import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import BackgroundElements from './components/BackgroundElements';
import CustomCursor from './components/CustomCursor';
import LanguageToggle from './components/LanguageToggle';
import FloatingQuickAccess from './components/FloatingQuickAccess';

// Sections
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import AcademicJourney from './sections/AcademicJourney';
import Internship from './sections/Internship';
import TravelInfo from './sections/TravelInfo';
import Addresses from './sections/Addresses';
import Contact from './sections/Contact';
import ProfessionalLinks from './sections/ProfessionalLinks';
import LostAndFound from './sections/LostAndFound';

function App() {
  useEffect(() => {
    // Initialize scrolling smooth behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <CustomCursor />
        <BackgroundElements />
        <LanguageToggle />
        <FloatingQuickAccess />
        
        <main className="relative z-10 overflow-hidden">
          <Hero />
          <AboutMe />
          <AcademicJourney />
          <Internship />
          <TravelInfo />
          <Addresses />
          <Contact />
          <ProfessionalLinks />
          <LostAndFound />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
