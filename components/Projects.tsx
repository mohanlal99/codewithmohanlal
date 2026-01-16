"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Eye } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);

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
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "TUMI AU – eCommerce",
      description: "Enterprise eCommerce platform focused on product personalization, promotions, and enhanced shopping experiences.",
      image: "/project/tumi.jpg",
      tech: ["JavaScript", "Shopify", "Liquid", "HTML", "CSS"],
      features: ["Wishlist functionality", "Gift Finder", "Monogram customization", "Dynamic promotions"],
      demo: "https://tumi.com.au",
      category: "Company Project",
      color: "from-amber-500 to-orange-600",
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
      color: "from-pink-500 to-rose-600",
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
      color: "from-cyan-500 to-blue-600",
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
      color: "from-emerald-500 to-teal-600",
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
      color: "from-indigo-500 to-violet-600",
    },
  ];

  const nextProject = () => setActiveProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full mb-4">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in full-stack development
          </p>
        </motion.div>

        {/* Featured Project - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${projects[activeProject].color} opacity-60`} />
                </motion.div>

                {/* Navigation */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    onClick={prevProject}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeProject 
                            ? "w-8 bg-white" 
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextProject}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                    {projects[activeProject].category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 lg:p-12 flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[activeProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Star className="w-3 h-3 text-violet-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${projects[activeProject].color} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {projects[activeProject].github && (
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.a>
                  )}
                  <motion.a
                    href={projects[activeProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${projects[activeProject].color} text-white rounded-xl font-semibold hover:shadow-lg transition-shadow`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`group cursor-pointer ${
                activeProject === index ? "ring-2 ring-violet-500" : ""
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/mohanlal99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;