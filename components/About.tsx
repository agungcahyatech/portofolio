import React from 'react';
import { SectionId } from '../types';
import { useApp } from './ThemeContext';

const About: React.FC = () => {
  const { t } = useApp();

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white dark:bg-surface border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4">
                {t.about.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              <p>
                {t.about.description1}
              </p>
              <p>
                {t.about.description2}
              </p>
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-1 gap-6">
              {t.about.stats.map((stat: { label: string; value: string }, index: number) => (
                <div 
                  key={index} 
                  className="bg-zinc-50 dark:bg-dark p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-colors group"
                >
                  <div className="text-4xl font-display font-bold text-primary mb-2 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;