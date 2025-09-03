"use client";

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const skills = ["Javascript", "Typescript", "React", "Next.js", "Express", "Mongoose"]
  const [skill, setSkill] = useState(skills[0]);


  useEffect(()=>{
    const interval = setInterval(()=>{
      setSkill(prev => {
        const currentIndex = skills.indexOf(prev);
        const nextIndex = (currentIndex + 1) % skills.length;
        return skills[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  },[])

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center shadow-2xl">
              {/* <span className="text-6xl font-bold text-white">ML</span> */}
              <Image
                src="https://codewithmohanlal.vercel.app/myimage.png"
                alt="Profile Picture"
                className="w-48 h-48 rounded-full object-top object-cover"
                width={192}
                height={192}
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Mohan Lal
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-800 font-medium mb-6">
            Full Stack Developer
          </h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
           Full Stack Developer passionate about modern web technologies like <br /><span
              className="inline-block ml-2 text-blue-800 font-semibold bg-gradient-to-r from-blue-50 to-white px-3 py-1 rounded-md shadow-sm transition-transform duration-300 transform hover:scale-105"
              aria-live="polite"
            >
              {skill}
            </span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:mohanlalv433@gmail.com"
              className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:text-blue-800 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/mohan-lal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:text-blue-800 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/mohanlal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:text-blue-800 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={handleScrollToAbout}
            className="animate-bounce text-blue-800 hover:text-blue-900 transition-colors duration-200"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;