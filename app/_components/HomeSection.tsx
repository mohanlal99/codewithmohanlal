"use client";

import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Download, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useScroll } from "@/components/RefContext";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "mailto:mohanlalv433@gmail.com",
    icon: Mail,
    label: "Email",
    color: "hover:bg-red-500",
  },
  {
    href: "https://www.linkedin.com/in/mohan-lal-4719a9315",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    href: "https://github.com/mohanlal99",
    icon: GithubIcon,
    label: "GitHub",
    color: "hover:bg-gray-700",
  },
];

const HomeSection: React.FC = () => {
  const { aboutRef, scrollToSection } = useScroll();

  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "NextUI",
    "Tailwind CSS",
    "MongoDB",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Content */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  Hi, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  Mohanlal
                </h1>
              </div>

              <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-2">
                  Full Stack Developer passionate about modern web technologies
                  like{" "}
                </p>
                <div className="inline-flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                    {skills[currentSkillIndex]}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${link.color} hover:text-white`}
                    aria-label={link.label}>
                    <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center py-12">
            {/* Animate on mount with a slight pop + rotate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative">
              {/* Glowing gradient ring with continuous spin */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 blur-xl opacity-40 animate-spinner-linear-spin"></div>

              {/* Container that ensures the face is fully visible by pinning image to top-center */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 overflow-hidden rounded-full bg-gray-50 shadow-2xl border-4 border-white">
                <img
                  src="/myimage.png"
                  alt="Mohanlal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors animate-bounce">
            <span className="text-sm">Scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
