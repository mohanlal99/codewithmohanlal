"use client";

import { Calendar, MapPin, GraduationCap, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative web solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="bg-slate-50 dark:bg-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Dynamic Full Stack Web Developer with expertise in modern JavaScript frameworks and technologies.
                Experienced in building scalable and responsive applications with a strong focus on performance
                and user experience. Adept at problem-solving, system design, and collaborating in cross-functional
                teams to deliver production-ready solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin size={20} className="text-blue-800 dark:text-blue-400" />
                  <span>Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Calendar size={20} className="text-blue-800 dark:text-blue-400" />
                  <span>Available</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">140+</div>
                <div className="text-gray-600 dark:text-gray-300">LeetCode Problems</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-slate-50 dark:bg-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-blue-800 dark:text-blue-400" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-800 pl-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Software Development</h4>
                  <p className="text-blue-800 dark:text-blue-400 font-medium">Masai School</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">01/2025 – 08/2025 | Bengaluru</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Science in Biology</h4>
                  <p className="text-blue-800 dark:text-blue-400 font-medium">Government Nehru Memorial College</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">08/2020 – 08/2023 | Hanumangarh</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-50 dark:bg-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Code className="text-blue-800 dark:text-blue-400" />
                Coursewrok
              </h3>
              <div className="border-l-4 border-blue-800 pl-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">Software Development Trainee</h4>
                <p className="text-blue-800 dark:text-blue-400 font-medium">Masai School | 2025</p>
                <ul className="text-gray-600 dark:text-gray-300 text-sm mt-3 space-y-2">
                  <li>• Solved 140+ LeetCode problems, enhancing coding efficiency</li>
                  <li>• Participated in weekly coding contests and hackathons</li>
                  <li>• Built multiple full-stack projects with real-world applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
