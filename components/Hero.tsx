"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Sparkles, Code2, Zap, Rocket } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const roles = ["Full Stack Developer", "React Specialist", "JavaScript", "TypeScript", "React", "Next.js", "Express", "Mongoose", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const downloadAndOpen = () => {
    window.open("https://drive.google.com/file/d/1HAos-GAzVts2LvIpldHbJUAp_rhwqJaj/view", "_blank");
    
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "https://drive.usercontent.google.com/uc?id=1HAos-GAzVts2LvIpldHbJUAp_rhwqJaj&export=download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 100);
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingIcons = [
    { icon: Code2, color: "text-violet-500", delay: 0 },
    { icon: Zap, color: "text-yellow-500", delay: 0.5 },
    { icon: Rocket, color: "text-fuchsia-500", delay: 0.1 },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-20 sm:pb-8"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:block ${item.color}`}
          style={{
            top: `${20 + index * 25}%`,
            left: index % 2 === 0 ? "10%" : "85%",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon className="w-12 h-12 opacity-20" />
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk"
              >
                <span className="text-gray-900 dark:text-white">Mohan</span>
                <span className="gradient-text"> Lal</span>
              </motion.h1>

              {/* Typing Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="h-8 sm:h-10 flex items-center justify-center lg:justify-start"
              >
                <span className="text-lg sm:text-xl md:text-2xl text-violet-600 dark:text-violet-400 font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              I craft exceptional digital experiences with modern technologies. 
              Passionate about building scalable applications that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.button
                onClick={downloadAndOpen}
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Explore Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {[
                { value: "140+", label: "LeetCode" },
                { value: "5+", label: "Projects" },
                { value: "0.5+", label: "Years Exp" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 -m-4 sm:-m-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-violet-300 dark:border-violet-700" />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 -m-8 sm:-m-16 hidden sm:block"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-dashed border-fuchsia-300 dark:border-fuchsia-700" />
              </motion.div>

              {/* Profile Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                
                <div className="relative glass-card rounded-2xl sm:rounded-3xl p-2 sm:p-3 animate-float">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 p-1">
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src="/myimage.png"
                          alt="Mohan Lal"
                          width={320}
                          height={320}
                          priority
                          className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Open to Work
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;