import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Monitor, Moon, Sun } from 'lucide-react';
import { NAVIGATION_LINKS, PERSONAL_INFO } from './constants';

// Sections
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';

type Theme = 'light' | 'dark' | 'system';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('system');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Logic
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-surface/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-primary z-50">
            {PERSONAL_INFO.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-screen bg-surface flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-surface text-center transition-colors">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">

          {/* Theme Switcher */}
          <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => toggleTheme('system')}
              className={`p-2 rounded-full transition-all ${theme === 'system'
                  ? 'bg-white dark:bg-neutral-600 text-primary shadow-sm'
                  : 'text-secondary hover:text-primary'
                }`}
              aria-label="System Theme"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleTheme('light')}
              className={`p-2 rounded-full transition-all ${theme === 'light'
                  ? 'bg-white dark:bg-neutral-600 text-primary shadow-sm'
                  : 'text-secondary hover:text-primary'
                }`}
              aria-label="Light Theme"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleTheme('dark')}
              className={`p-2 rounded-full transition-all ${theme === 'dark'
                  ? 'bg-white dark:bg-neutral-600 text-primary shadow-sm'
                  : 'text-secondary hover:text-primary'
                }`}
              aria-label="Dark Theme"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;