import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  BookOpen,
} from "lucide-react";
import { NAVIGATION_LINKS, PERSONAL_INFO, SOCIALS } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAVIGATION_LINKS.map((link) => link.href);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-surface/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          {PERSONAL_INFO.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === link.href
                      ? "text-accent"
                      : "text-secondary"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700 mx-4" />

          <div className="flex items-center space-x-4">
            <a
              href={SOCIALS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover:text-accent transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[70px] bg-surface z-40 overflow-hidden"
          >
            <div className="flex flex-col items-start justify-start h-full space-y-8 p-6">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-bold transition-colors ${
                    activeSection === link.href ? "text-accent" : "text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="flex items-center space-x-8 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full justify-center">
                {SOCIALS.map((social) => {
                  let Icon = Github;
                  switch (social.icon) {
                    case "github":
                      Icon = Github;
                      break;
                    case "linkedin":
                      Icon = Linkedin;
                      break;
                    case "twitter":
                      Icon = Twitter;
                      break;
                    case "substack":
                      Icon = BookOpen;
                      break;
                    case "email":
                      Icon = Mail;
                      break;
                  }
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      aria-label={social.platform}
                      title={social.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
