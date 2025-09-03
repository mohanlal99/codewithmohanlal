"use client";

import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Mohan Lal</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:mohanlalv433@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mohan-lal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/mohanlal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Quick Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Home', 'About Me', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase().replace(' ', '-').replace(' me', '')}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} Mohan Lal. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-8 right-8 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-all duration-200 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;