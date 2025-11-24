import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { BotIcon, MessageCircleIcon, SendIcon, XIcon } from './Icons';
import { useApp } from './ThemeContext';
import { getSystemInstruction } from '../constants';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { t, language } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when language changes to greet in correct language
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: t.ai.initialMessage,
        timestamp: new Date()
      }
    ]);
  }, [language, t]);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);

    try {
      const historyForApi = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      // Pass language-specific system instruction
      const instruction = getSystemInstruction(language);
      const responseText = await sendMessageToGemini(userText, historyForApi, instruction);

      const newBotMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newBotMsg]);

    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: t.ai.error,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-dark border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up ring-1 ring-primary/20">
          {/* Header */}
          <div className="bg-zinc-50 dark:bg-surface p-4 flex justify-between items-center text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2 text-primary">
              <BotIcon />
              <span className="font-display font-bold tracking-wide animate-text-glow">{t.ai.headerTitle}</span>
            </div>
            <button onClick={toggleChat} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
              <XIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-100 dark:bg-black/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-primary text-black font-medium rounded-br-sm'
                      : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-bl-sm shadow-sm'
                    }`}
                >
                  <span className="block text-[10px] opacity-50 mb-1 uppercase tracking-wider">
                    {msg.role === 'user' ? (language === 'id' ? 'Anda' : 'You') : 'System'}
                  </span>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 text-primary p-3 rounded-2xl rounded-bl-sm border border-zinc-200 dark:border-zinc-700 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-surface border-t border-zinc-200 dark:border-zinc-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.ai.placeholder}
              className="flex-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 rounded-xl px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm font-mono placeholder-zinc-400 dark:placeholder-zinc-600"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-[#00c978] disabled:opacity-50 text-black p-2 rounded-xl transition-colors flex items-center justify-center"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isOpen ? 'rotate-180 scale-0' : 'scale-100'} transition-all duration-300 bg-primary hover:bg-[#00c978] text-black p-4 rounded-full shadow-[0_0_20px_rgba(0,219,131,0.5)] group`}
      >
        <MessageCircleIcon />
      </button>

      {!isOpen && (
        <div className="absolute -top-12 right-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-primary text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
          {'>'} {t.ai.startChat}
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;