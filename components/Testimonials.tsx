import React from 'react';
import { SectionId, Testimonial } from '../types';
import { useApp } from './ThemeContext';
import { QuoteIcon } from './Icons';

const Testimonials: React.FC = () => {
  const { t } = useApp();
  const testimonialsData: Testimonial[] = t.data.testimonials;

  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-light-surface dark:bg-dark border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4">
            {t.testimonials.title}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-surface p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-all duration-300 relative group shadow-sm dark:shadow-none"
            >
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <QuoteIcon />
              </div>
              
              <div className="relative z-10">
                <p className="text-zinc-600 dark:text-zinc-300 mb-8 italic leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-zinc-800 rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {testimonial.author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm">
                        {testimonial.author}
                        </h4>
                        <p className="text-zinc-500 text-xs uppercase tracking-wide">
                        {testimonial.role}, {testimonial.company}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;