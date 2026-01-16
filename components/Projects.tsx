"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Code2, Layers, ChevronRight, ChevronsUpDown } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Live Polling System",
      description: "Real-time interactive polling platform with live results, chat, and role-based dashboards for teachers and students.",
      image: "/project/livepoll.png",
      tech: ["React", "Redux", "Socket.io", "Express", "Tailwind"],
      features: ["Real-time poll creation", "Role-based dashboards", "Live results & chat", "Poll history with stats"],
      github: "https://github.com/mohanlal99/Live-Polling-System",
      demo: "https://live-polling-system-intervueio.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "TUMI AU – eCommerce",
      description: "Enterprise eCommerce platform focused on product personalization, promotions, and enhanced shopping experiences.",
      image: "/project/tumi.jpg",
      tech: ["JavaScript", "Shopify", "Liquid", "HTML", "CSS"],
      features: ["Wishlist functionality", "Gift Finder", "Monogram customization", "Dynamic promotions"],
      demo: "https://tumi.com.au",
      category: "Company Project",
    },
    {
      title: "Memory Lane Personal",
      description: "Digital scrapbook app to capture, organize, and relive memories with photos, notes, and albums.",
      image: "/project/memorylane.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      features: ["Timeline view", "Event albums", "Reminisce feature", "Responsive design"],
      github: "https://github.com/mohanlal99/memory-lane",
      demo: "https://memory-lane-rosy.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "MemeHub - Hackathon",
      description: "Full-stack meme-sharing platform featuring meme battles, AI creation, voting system, and trending feed.",
      image: "/project/memehub.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      features: ["Meme battles", "AI generator", "Voting system", "Trending feed"],
      github: "https://github.com/mohanlal99/memehub",
      demo: "https://memehub-nu.vercel.app/",
      category: "Hackathon",
    },
    {
      title: "AI Quiz Application",
      description: "Interactive AI-powered quiz app with results tracking and persistent quiz history.",
      image: "/project/aiquiz.png",
      tech: ["React", "Tailwind CSS", "Local Storage"],
      features: ["Quiz tracking", "Local storage", "Responsive UI", "Results history"],
      github: "https://github.com/mohanlal99/AI-Quiz-Application/",
      demo: "https://ai-quiz-application.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Online Course Portal",
      description: "Modern course platform with secure authentication, CMS integration, and dynamic course management.",
      image: "/project/onlinecourseportal.jpg",
      tech: ["Next.js", "Tailwind", "Hygraph", "Clerk"],
      features: ["Auth with Clerk", "CMS integration", "Dynamic courses", "Modern UI"],
      github: "https://github.com/mohanlal99/online-course-portal",
      demo: "https://online-courses-portal.vercel.app/",
      category: "Full Stack",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number[]>(
    projects.map((_, i) => i)
  );

  const isExpanded = (index: number) => expandedIndex.includes(index);

  const toggleProject = (index: number) => {
    setExpandedIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => setExpandedIndex(projects.map((_, i) => i));
  const collapseAll = () => setExpandedIndex([]);

  const allExpanded = expandedIndex.length === projects.length;

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Click to explore each project
          </p>

          {/* Expand/Collapse All Button */}
          <motion.button
            onClick={allExpanded ? collapseAll : expandAll}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 border border-violet-200 dark:border-violet-800 rounded-xl transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ChevronsUpDown className="w-4 h-4" />
            {allExpanded ? "Collapse All" : "Expand All"}
          </motion.button>
        </motion.div>

        {/* Accordion Style Projects */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                layout
                onClick={() => toggleProject(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isExpanded(index)
                    ? "glass-card"
                    : "bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
                style={{
                  borderLeft: isExpanded(index)
                    ? "4px solid rgb(139, 92, 246)"
                    : "4px solid transparent",
                }}
              >
                {/* Collapsed State */}
                <div className={`p-6 flex items-center justify-between ${isExpanded(index) ? "pb-4" : ""}`}>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl font-bold font-space-grotesk gradient-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-violet-600 dark:text-violet-400">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`hidden md:flex gap-2 ${
                        isExpanded(index) ? "opacity-0" : "opacity-100"
                      } transition-opacity`}
                    >
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 rounded-full text-xs text-violet-700 dark:text-violet-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded(index) ? 90 : 0 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-100 dark:bg-violet-900/50"
                    >
                      <ChevronRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded(index) ? "auto" : 0,
                    opacity: isExpanded(index) ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                      </div>

                      {/* Details */}
                      <div className="flex flex-col justify-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-gray-900 dark:text-white font-semibold mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-violet-500" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 rounded-lg text-sm text-violet-700 dark:text-violet-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4" />
                              Source Code
                            </motion.a>
                          )}
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl hover:shadow-xl hover:shadow-violet-500/25 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/mohanlal99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-violet-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;