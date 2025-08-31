"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Github, Menu, X } from "lucide-react";
import { ThemeSwitch } from "@/components/theme-switch"; // keep your existing switch
import { siteConfig } from "@/config/site";
import { useScroll } from "./RefContext"; // keep your scroll context

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { homeRef, aboutRef, projectsRef, contactRef, scrollToSection } =
    useScroll();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav items connected to your refs
  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact", ref: contactRef },
  ];

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick(homeRef)}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Heart className="w-8 h-8 text-light-primary dark:text-dark-primary fill-current" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Mohanlal
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.ref)}
                className="text-gray-700 dark:text-gray-300 hover:text-light-primary dark:hover:text-dark-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}

            {/* GitHub */}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-700 dark:text-gray-300 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </Link>

            {/* Theme Switch */}
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.ref)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-light-primary dark:hover:text-dark-primary font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}

              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
