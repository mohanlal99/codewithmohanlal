"use client";

import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { GithubIcon, HeartFilledIcon } from "./icons";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-12 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:mohanlalv433@gmail.com"
              className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200 shadow-sm"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://linkedin.com/in/mohanlal99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://github.com/mohanlal99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200 shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon size={20} className="text-gray-700 hover:text-blue-600" />
            </a>
          </div>

          {/* Quick Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["Home", "About Me", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(
                      `#${item.toLowerCase().replace(" ", "-").replace(" me", "")}`
                    );
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <HeartFilledIcon color="red" className="w-4 h-4 animate-pulse" />
            <span>
              Designed with love by{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Mohanlal
              </span>{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
