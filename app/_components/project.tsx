"use client";

import React from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "@/config/site";

const Projects: React.FC = () => {
  const formatDate = (timeString: string) => {
    // If your "time" is not a date, just return it directly
    const maybeDate = Date.parse(timeString);
    if (isNaN(maybeDate)) return timeString;
    return new Date(maybeDate).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="projects" className="">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" side="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.projectItem.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 md:m-10 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.label}
                  </h3>
                  {project.time && (
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(project.time)}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.des}
                </p>

              
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
