import React, { useRef, useState } from 'react';
import { SectionId } from '../types';
import { useApp } from './ThemeContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useApp();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
            form.current?.reset();
            setTimeout(() => setSuccess(false), 5000);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setLoading(false);
            setError(true);
            setTimeout(() => setError(false), 5000);
          },
        );
    }
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white dark:bg-surface relative overflow-hidden border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4">{t.contact.title}</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            {t.contact.subtitle}
          </p>
        </div>

        <form ref={form} className="max-w-lg mx-auto space-y-4" onSubmit={sendEmail}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="user_name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.contact.nameLabel}</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full bg-zinc-50 dark:bg-dark border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-zinc-400 dark:placeholder-zinc-600"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="user_email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.contact.emailLabel}</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full bg-zinc-50 dark:bg-dark border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-zinc-400 dark:placeholder-zinc-600"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.contact.messageLabel}</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full bg-zinc-50 dark:bg-dark border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder-zinc-400 dark:placeholder-zinc-600"
              placeholder={t.contact.messagePlaceholder}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-[#00c978] disabled:bg-zinc-400 disabled:cursor-not-allowed text-black font-bold py-4 rounded-full transition-all transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(0,219,131,0.39)] uppercase tracking-wide flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-black rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-black rounded-full animate-bounce delay-150"></span>
              </>
            ) : (
              t.contact.submit
            )}
          </button>

          {success && (
            <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center text-sm font-medium animate-fade-in">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl text-center text-sm font-medium animate-fade-in">
              Something went wrong. Please try again later or email me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;