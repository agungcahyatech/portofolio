import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AIChatWidget from './components/AIChatWidget';
import { AppProvider } from './components/ThemeContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
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