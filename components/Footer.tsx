import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';
import { useApp } from './ThemeContext';
import { DiscordIcon, GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from './Icons';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="pt-20 pb-12 bg-light-surface dark:bg-black border-t border-zinc-200 dark:border-zinc-900 text-zinc-500 dark:text-zinc-500 text-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">

          {/* Brand Column */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">AC</span>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mb-8 font-light">
              {t.footer.description}
            </p>

            {/* Social Grid */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-primary transition-all duration-300 border border-transparent dark:border-zinc-800 dark:hover:border-primary/50">
                <DiscordIcon />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-primary transition-all duration-300 border border-transparent dark:border-zinc-800 dark:hover:border-primary/50">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-primary transition-all duration-300 border border-transparent dark:border-zinc-800 dark:hover:border-primary/50">
                <TwitterIcon />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-primary transition-all duration-300 border border-transparent dark:border-zinc-800 dark:hover:border-primary/50">
                <GithubIcon />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-primary transition-all duration-300 border border-transparent dark:border-zinc-800 dark:hover:border-primary/50">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="md:text-right">
            <h3 className="text-primary font-bold uppercase tracking-wider mb-6">{t.footer.legal}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">{t.footer.terms}</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">{t.footer.privacy}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-300 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {PORTFOLIO_OWNER} Studios. {t.footer.rights}</p>
          <p className="text-xs opacity-50">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;