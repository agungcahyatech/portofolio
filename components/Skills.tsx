import React from 'react';
import { SectionId, Skill } from '../types';
import { useApp } from './ThemeContext';

const Skills: React.FC = () => {
  const { t } = useApp();
  const skillsData: Skill[] = t.data.skills;

  return (
    <section id={SectionId.SKILLS} className="py-24 bg-white dark:bg-surface border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4">{t.skills.title}</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="bg-zinc-50 dark:bg-dark p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-colors group shadow-sm dark:shadow-none">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 group-hover:text-primary transition-colors">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-full text-sm border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:bg-[#33e29c] hover:text-black hover:border-[#33e29c] cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(51,226,156,0.4)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;