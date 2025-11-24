import React from 'react';
import { PORTFOLIO_OWNER, PROFILE_IMAGE_URL } from '../constants';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SectionId } from '../types';
import { useApp } from './ThemeContext';

const Hero: React.FC = () => {
  const { t } = useApp();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id={SectionId.HERO} className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-20 bg-light-surface dark:bg-dark transition-colors duration-300">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-400/20 dark:bg-zinc-800/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-20 max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in">
               <div className="h-px w-8 bg-primary"></div>
               <p className="text-primary font-mono text-sm tracking-widest uppercase">{t.hero.greeting} {PORTFOLIO_OWNER}</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-zinc-900 dark:text-white mb-6 leading-tight animate-slide-up tracking-tight">
              {t.jobTitle}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed animate-slide-up delay-100 font-light">
              {t.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-200">
              <a 
                href={`#${SectionId.PROJECTS}`}
                onClick={(e) => handleSmoothScroll(e, `#${SectionId.PROJECTS}`)}
                className="px-8 py-4 bg-primary hover:bg-[#00c978] text-black rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(0,219,131,0.5)] text-center tracking-wide"
              >
                {t.hero.ctaProject}
              </a>
              <a 
                href={`#${SectionId.CONTACT}`}
                onClick={(e) => handleSmoothScroll(e, `#${SectionId.CONTACT}`)}
                className="px-8 py-4 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 rounded-full font-bold transition-colors text-center tracking-wide"
              >
                {t.hero.ctaContact}
              </a>
            </div>

            <div className="mt-12 flex gap-6 text-zinc-500 dark:text-zinc-500 justify-center lg:justify-start animate-fade-in delay-300">
               <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200"><GithubIcon /></a>
               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center lg:justify-end relative z-10 animate-fade-in delay-200 group">
             {/* Decorative Elements */}
             <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] lg:w-[400px] lg:h-[500px]">
                {/* Glowing Back Shape */}
                <div className="absolute -inset-4 bg-primary/30 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Border Offset Effect */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-[2.5rem] translate-x-6 translate-y-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 hidden sm:block"></div>
                
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 opacity-40"></div>
                    <img 
                      src={PROFILE_IMAGE_URL}
                      alt={PORTFOLIO_OWNER} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;