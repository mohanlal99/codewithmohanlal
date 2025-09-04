"use client";

import { ArrowDown, Github, Linkedin, Mail, Code, Database, Globe, Smartphone, Cpu, Zap, Terminal, Layers } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GithubIcon } from './icons';
import Link from 'next/link';

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

  // Tech icons for floating animation
  const techIcons = [
    { Icon: Code, delay: 0, duration: 20 },
    { Icon: Database, delay: 2, duration: 25 },
    { Icon: Globe, delay: 4, duration: 22 },
    { Icon: Smartphone, delay: 6, duration: 18 },
    { Icon: Cpu, delay: 8, duration: 24 },
    { Icon: Zap, delay: 10, duration: 21 },
    { Icon: Terminal, delay: 12, duration: 19 },
    { Icon: Layers, delay: 14, duration: 23 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br  from-slate-50 via-blue-50 to-lime-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 dark:text-blue-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {techIcons.map((item, index) => (
            <div
              key={index}
              className="absolute opacity-10 dark:opacity-15 text-blue-600 dark:text-blue-400"
              style={{
                left: `${15 + (index * 10)}%`,
                top: `${20 + (index % 3) * 25}%`,
                animation: `float-tech ${item.duration}s ease-in-out infinite`,
                animationDelay: `${item.delay}s`
              }}
            >
              <item.Icon size={40 + (index % 3) * 10} />
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path
            d="M0,800 Q250,700 500,800 T1000,800"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
        </svg>

        {/* Corner Decorations */}
        <div className="absolute top-10 left-10 opacity-5 dark:opacity-30">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-500">
            <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="20" cy="30" r="1" fill="currentColor" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <circle cx="80" cy="70" r="1.5" fill="currentColor" className="animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 opacity-5 dark:opacity-30">
          
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-indigo-500">
            <polygon points="60,10 90,50 60,90 30,50" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '6s' }} />
            <circle cx="60" cy="60" r="3" fill="currentColor" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center shadow-2xl ring-4 ring-white/50 dark:ring-white/20 hover:ring-blue-400/50 transition-all duration-300 hover:shadow-blue-500/25">
              <Image
                quality={100}
                priority={true}
                src="/myimage.png"
                alt="Profile Picture"
                className="w-48 h-48 rounded-full object-top object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <p className='text-lg md:text-base text-gray-500 dark:text-gray-400 mb-2 tracking-wide drop-shadow-sm'>Hi, I&#39;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
            Mohanlal
          </h1>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
           Full Stack Developer passionate about modern web technologies like <br />
           <span
              className=" inline-block ml-2 text-blue-800 dark:text-blue-300 font-semibold bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-blue-200/50 dark:border-blue-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              aria-live="polite"
            >
              
              
              {skill}
            </span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="mailto:mohanlalv433@gmail.com"
              className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-700 hover:text-blue-800 dark:hover:text-blue-400 transition-all duration-300 border border-white/50 dark:border-gray-700/50"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </Link>
            <a
              href="https://linkedin.com/in/mohanlal99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-700 hover:text-blue-800 dark:hover:text-blue-400 transition-all duration-300 border border-white/50 dark:border-gray-700/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/mohanlal99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-700 hover:text-blue-800 dark:hover:text-blue-400 transition-all duration-300 border border-white/50 dark:border-gray-700/50"
              aria-label="GitHub"
            >
              <GithubIcon/>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={handleScrollToAbout}
            className="animate-bounce text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200 drop-shadow-sm"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-tech {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.1; 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-5px) translateX(-8px) rotate(180deg); 
            opacity: 0.2; 
          }
          75% { 
            transform: translateY(-15px) translateX(5px) rotate(270deg); 
            opacity: 0.25; 
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;