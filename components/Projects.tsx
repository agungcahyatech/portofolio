import React, { useState, useMemo } from 'react';
import { SectionId, Project } from '../types';
import { ExternalLinkIcon } from './Icons';
import { useApp } from './ThemeContext';

const Projects: React.FC = () => {
  const { t } = useApp();
  const projectsData: Project[] = t.data.projects;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique technologies for filter buttons
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, [projectsData]);

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter(project => 
      project.technologies.includes(activeFilter)
    );
  }, [activeFilter, projectsData]);

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-light-surface dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4">{t.projects.title}</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === tech
                    ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(0,219,131,0.4)] scale-105'
                    : 'bg-white dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-primary dark:hover:border-primary hover:text-primary'
                }`}
              >
                {tech === 'All' ? t.projects.filterAll : tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden bg-white dark:bg-surface border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] shadow-sm hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={project.link} 
                    className="px-6 py-2 bg-primary text-black rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                  >
                    {t.projects.viewProject} <ExternalLinkIcon />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <button 
                      key={tech} 
                      onClick={(e) => { e.stopPropagation(); setActiveFilter(tech); }}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-colors border ${
                        activeFilter === tech 
                          ? 'bg-primary text-black border-primary' 
                          : 'text-primary bg-primary/5 border-primary/20 hover:bg-primary/10'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
             <div className="col-span-full flex flex-col items-center justify-center py-20 text-zinc-500">
                <p className="text-lg">No projects found with this technology.</p>
                <button 
                    onClick={() => setActiveFilter('All')} 
                    className="mt-4 text-primary hover:underline"
                >
                    Reset Filter
                </button>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;