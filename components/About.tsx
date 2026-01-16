"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap, Briefcase, Award, ExternalLink, Code2, Brain } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2025",
      title: "Software Development",
      subtitle: "Masai School, Bengaluru",
      description: "Intensive full-stack development program",
      icon: Code2,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      year: "2020-2023",
      title: "B.Sc in Biology",
      subtitle: "Govt. Nehru Memorial College",
      description: "Foundation in analytical thinking",
      icon: GraduationCap,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const highlights = [
    {
      icon: Brain,
      value: "140+",
      label: "LeetCode Problems",
      color: "bg-gradient-to-br from-orange-400 to-rose-500",
      link: "https://leetcode.com/u/mohanlal99/",
    },
    {
      icon: Award,
      value: "5+",
      label: "Projects Built",
      color: "bg-gradient-to-br from-emerald-400 to-teal-500",
    },
    {
      icon: Briefcase,
      value: "0.5+",
      label: "Year Experience",
      color: "bg-gradient-to-br from-violet-400 to-purple-500",
    },
  ];

  return (
    <section id="about" className="py-12 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-violet-100 dark:bg-violet-900/50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </span>
                Professional Summary
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Dynamic Full Stack Web Developer with expertise in modern JavaScript frameworks. 
                Experienced in building scalable and responsive applications with a strong focus 
                on performance and user experience. Adept at problem-solving, system design, 
                and collaborating in cross-functional teams to deliver production-ready solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  <span>Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 text-violet-500" />
                  <span>Available Now</span>
                </div>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className={`${item.color} rounded-2xl p-4 text-white text-center transform group-hover:scale-105 transition-transform`}>
                      <item.icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-xs opacity-80">{item.label}</div>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 p-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="p-2 bg-violet-100 dark:bg-violet-900/50 rounded-xl">
                <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </span>
              Education Journey
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-500" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow">
                    <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-violet-600 dark:text-violet-400 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coursework Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-violet-500" />
                Coursework Highlights
              </h4>
              <ul className="space-y-2">
                {[
                  "Solved 140+ LeetCode problems",
                  "Weekly coding contests & hackathons",
                  "Built multiple full-stack projects",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;