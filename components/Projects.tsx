"use client";

import { ExternalLink, Github, Eye, Link2Icon } from "lucide-react";
import { GithubIcon } from "./icons";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Memory Lane Personal",
      description:
        "A personal digital scrapbook app to capture, organize, and relive memories with photos, notes, albums, and a reminisce feature.",
      image: "project/memorylane.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Firebase", "Git", "GitHub", "Vercel"],
      features: [
        "Capture and organize memories with timeline view",
        "Albums for events and occasions",
        "Reminisce feature for revisiting past memories",
        "Responsive design with optimized performance",
      ],
      github: "https://github.com/mohanlal99/memory-lane",
      demo: "https://memory-lane-rosy.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "MemeHub - Hackathon Project",
      description:
        "A full-stack meme-sharing platform featuring meme battles, AI meme creation, voting system, and trending feed, built during a hackathon.",
      image: "project/memehub.jpg",
      tech: ["HTML", "CSS", "JavaScript","Firebase", "Git", "GitHub", "Vercel"],
      features: [
        "Meme upload with likes, comments, and tags",
        "Meme battles with voting system",
        "Trending feed with 24-hour updates",
        "AI meme generator using Predis.ai",
        "Infinite scrolling for seamless user experience",
      ],
      github: "https://github.com/mohanlal99/memehub",
      demo: "https://memehub-nu.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Top Global News",
      description:
        "Responsive news platform providing real-time global news with authentication, admin dashboard, and user-personalized content.",
      image: "project/topglobalnews.jpg",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "JWT",
        "Git",
        "GitHub",
        "Vercel",
      ],
      features: [
        "Multi-category news delivery (World, Tech, Sports, Business)",
        "Admin dashboard with JWT-based authentication",
        "Role-based access control",
        "MongoDB integration for scalable storage",
        "SEO-optimized with Next.js App Router",
      ],
      github: "https://github.com/mohanlal99/Top-Global-News",
      demo: "https://topglobalnews.in",
      category: "Full Stack",
    },
    {
      title: "AI Quiz Application",
      description:
        "Interactive AI-powered quiz app with results tracking, local storage, and a responsive UI. Includes modern navigation and social links.",
      image: "project/aiquiz.png",
      tech: [
        "React",
        "Tailwind CSS",
        "Local Storage",
        "Git",
        "GitHub",
        "Vercel",
      ],
      features: [
        "Start quiz and view results",
        "Persistent quiz history using local storage",
        "Responsive design with smooth navigation",
        "Footer with GitHub and LinkedIn links",
      ],
      github: "https://github.com/mohanlal99/AI-Quiz-Application/",
      demo: "https://ai-quiz-application.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Amigo Immigration Services",
      description:
        "Responsive website for an immigration consultancy, designed with a clean and service-focused user interface.",
      image: "project/amigoimmigration.jpg",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Next UI",
        "MongoDB",
        "Git",
        "GitHub",
        "Vercel",
      ],
      features: [
        "Clean and professional UI for service presentation",
        "Responsive design optimized for all devices",
        "Dynamic pages with Next.js routing",
        "SEO-friendly structure",
      ],
      github: "https://github.com/mohanlal99/amigoimmigration",
      demo: "https://amigoimmigrant.com/",
      category: "Frontend",
    },
    {
      title: "Online Course Portal",
      description:
        "A modern course platform with secure authentication, CMS integration, and dynamic course management features.",
      image: "project/onlinecourseportal.jpg",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Hygraph",
        "Clerk",
        "Git",
        "GitHub",
        "Vercel",
      ],
      features: [
        "Secure authentication with Clerk",
        "CMS integration with Hygraph",
        "Dynamic course creation and management",
        "Responsive and modern UI",
      ],
      github: "https://github.com/mohanlal99/online-course-portal",
      demo: "https://online-courses-portal.vercel.app/",
      category: "Full Stack",
    }
  ];

  const featured = projects[0];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work in full-stack development, demonstrating
            scalable solutions and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2  mx-auto">
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-800 dark:bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex-1 justify-center">
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-800 dark:bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200 flex-1 justify-center">
                    <Link2Icon size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/mohanlal99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-lg font-medium">
            <GithubIcon size={24} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
