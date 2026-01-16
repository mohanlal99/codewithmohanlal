"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Linkedin, Github, Mail, Coffee } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mohanlal99", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mohanlal99", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mohanlalv433@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
              className="inline-block text-3xl font-bold font-space-grotesk"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">M</span>
              <span className="text-gray-900 dark:text-white">ohan</span>
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Full Stack Developer crafting exceptional digital experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>mohanlalv433@gmail.com</p>
              <p>+91 8118862474</p>
              <p>Rajasthan, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              & 
              <Coffee className="w-4 h-4 text-amber-600" />
              by
              <span className="font-semibold gradient-text">Mohan Lal</span>
              © {currentYear}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-500">
              Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-violet-500/25 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;