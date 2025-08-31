import React from "react";
import { Download, Code, Zap, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications for best user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments",
    },
  ];

  return (
    <section id="about" className="">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" side="left" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">
              Hi, I&#39;m a passionate{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{" "}
              skilled in modern web technologies like{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                TypeScript, React, Next.js, and MongoDB
              </span>
              . My focus is on crafting seamless and user-friendly digital
              experiences.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              With a dedication to clean and efficient code, I aim to solve
              real-world problems through innovative web applications. I&#39;m
              constantly learning and adapting to new technologies to stay at
              the forefront of web development.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="pt-8">
              <a
                href="https://drive.google.com/file/d/1LitTvfZ-M_fdiX6l2M-QAcsVh5xG5KWU/view"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center p-4">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif"
                  alt="Animated coding illustration"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
