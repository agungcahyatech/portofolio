import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { MenuIcon, XIcon, SunIcon, MoonIcon, GlobeIcon } from './Icons';
import { useApp } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect slightly earlier for smoother feel
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: `#${SectionId.ABOUT}` },
    { label: t.nav.skills, href: `#${SectionId.SKILLS}` },
    { label: t.nav.projects, href: `#${SectionId.PROJECTS}` },
    { label: t.nav.contact, href: `#${SectionId.CONTACT}` },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Approximate height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md shadow-lg shadow-zinc-200/10 dark:shadow-primary/5 py-4 border-b border-white/20 dark:border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href={`#${SectionId.HERO}`} 
          onClick={(e) => handleSmoothScroll(e, `#${SectionId.HERO}`)}
          className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tighter hover:text-primary transition-colors relative group"
        >
          AC<span className="text-primary group-hover:text-white transition-colors">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          
          <div className="h-6 w-px bg-zinc-300/50 dark:bg-zinc-700/50 mx-2"></div>

          {/* Controls */}
          <button 
            onClick={toggleTheme} 
            className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors p-1"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors font-mono text-sm uppercase p-1"
            title="Switch Language"
          >
            <GlobeIcon />
            <span>{language}</span>
          </button>

          <a
            href={`#${SectionId.CONTACT}`}
            onClick={(e) => handleSmoothScroll(e, `#${SectionId.CONTACT}`)}
            className="ml-4 px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,219,131,0.2)] hover:shadow-[0_0_20px_rgba(0,219,131,0.6)]"
          >
            {t.nav.hireMe}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleTheme} 
                className="text-zinc-800 dark:text-zinc-300"
            >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
                className="text-zinc-800 dark:text-zinc-300 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-zinc-800 dark:text-zinc-300 hover:text-primary text-lg font-display"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
             <span className="text-zinc-500 dark:text-zinc-400 text-sm uppercase">Language:</span>
             <button 
                onClick={toggleLanguage}
                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-900 dark:text-white text-sm font-bold uppercase"
             >
                 {language === 'id' ? 'Bahasa Indonesia' : 'English'}
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;