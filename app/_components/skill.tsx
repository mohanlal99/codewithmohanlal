import React from "react";
import SectionTitle from "./SectionTitle";
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  CodepenIcon as Javascript,
  CodepenIcon as ReactIcon,
  Database,
  GitBranch,
  DatabaseZap,
  Code2,
  Server,
  Layout,
  KeyRound,
  GitGraphIcon as Graph,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Javascript className="w-10 h-10 text-yellow-400" />, level: 85 },
  { name: "React", icon: <ReactIcon className="w-10 h-10 text-blue-400" />, level: 80 },
  { name: "Next.js", icon: <Server className="w-10 h-10 text-gray-700 dark:text-white" />, level: 75 },
  { name: "HTML5", icon: <Html5 className="w-10 h-10 text-orange-500" />, level: 90 },
  { name: "CSS3", icon: <Css3 className="w-10 h-10 text-blue-500" />, level: 85 },
  { name: "Tailwind", icon: <Layout className="w-10 h-10 text-cyan-400" />, level: 80 },
  { name: "Node.js", icon: <Server className="w-10 h-10 text-green-500" />, level: 70 },
  { name: "MongoDB", icon: <Database className="w-10 h-10 text-green-500" />, level: 75 },
  { name: "Firebase", icon: <DatabaseZap className="w-10 h-10 text-blue-600" />, level: 70 },
  { name: "Git", icon: <GitBranch className="w-10 h-10 text-red-500" />, level: 85 },
  { name: "TypeScript", icon: <Code2 className="w-10 h-10 text-blue-500" />, level: 75 },
  { name: "Clerk", icon: <KeyRound className="w-10 h-10 text-violet-500" />, level: 60 },
  
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" side="left" />

        {/* All skills in a single unified grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center space-y-4">
                <div className="text-4xl mb-3">{skill.icon}</div>

                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
