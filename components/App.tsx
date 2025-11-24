import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import AIChatWidget from './AIChatWidget';
import { AppProvider } from './ThemeContext';

function AppContent() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;