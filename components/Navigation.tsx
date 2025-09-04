"use client";

import { useState, useEffect, RefObject, useRef } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { HeartFilledIcon, MoonFilledIcon, SunFilledIcon } from "./icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("touchstart", handleClickOutside);
  document.addEventListener("drag", handleClickOutside);
  
  
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
    document.addEventListener("drag", handleClickOutside);
  };
}, [isOpen]);


  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement("a");
    link.href = "/Mohan-Lal-Resume.pdf"; // This would be the actual resume file
    link.download =
      "https://drive.usercontent.google.com/u/0/uc?id=1LitTvfZ-M_fdiX6l2M-QAcsVh5xG5KWU&export=download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex gap-2 item-center text-2xl font-bold text-blue-800 dark:text-blue-400">
              <HeartFilledIcon size={32} className="text-blue-500" />{" "}
              <span> Mohanlal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme">
              {theme === "light" ? (
                <MoonFilledIcon size={20} />
              ) : (
                <SunFilledIcon size={20} />
              )}
            </button>
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-blue-800 dark:bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200">
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200">
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200">
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 w-full bg-blue-800 dark:bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200">
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
