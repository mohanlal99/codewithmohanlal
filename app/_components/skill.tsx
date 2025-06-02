"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

import SectionTitle from "./SectionTitle";

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const skillsData = [
    {
      label: "JavaScript",
      icon: Javascript,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20",
    },
    {
      label: "React",
      icon: ReactIcon,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
    },
    {
      label: "Next.js",
      icon: Server,
      color: "text-light-primary dark:text-dark-primary",
      bgColor: "bg-light-primary/10 dark:bg-dark-primary/10",
      borderColor: "border-light-primary/20 dark:border-dark-primary/20",
    },
    {
      label: "HTML5",
      icon: Html5,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      label: "CSS3",
      icon: Css3,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      label: "Tailwind",
      icon: Layout,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
    },
    {
      label: "MongoDB",
      icon: Database,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      label: "Firebase",
      icon: DatabaseZap,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
    },
    {
      label: "Git",
      icon: GitBranch,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      label: "TypeScript",
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      label: "Clerk",
      icon: KeyRound,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
    },
    {
      label: "Hygraph",
      icon: Graph,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const proficiencyLevels = [
    { level: "Beginner", percentage: 25, color: "from-blue-400 to-blue-600" },
    {
      level: "Intermediate",
      percentage: 50,
      color: "from-green-400 to-green-600",
    },
    {
      level: "Advanced",
      percentage: 75,
      color: "from-yellow-400 to-yellow-600",
    },
    { level: "Expert", percentage: 100, color: "from-red-400 to-red-600" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-light-background dark:bg-dark-background px-4 pb-12 relative overflow-hidden"
      id="skills"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        variants={containerVariants}
      >
        {/* <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h2> */}
        <SectionTitle side="left" title="Technical Skills" />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20"
          variants={containerVariants}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative group p-6 rounded-xl border ${skill.borderColor} ${skill.bgColor} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              variants={itemVariants}
            >
              <div className="flex flex-col items-center gap-4">
                {React.createElement(skill.icon, {
                  className: `w-12 h-12 ${skill.color} transition-transform duration-300 group-hover:scale-110`,
                  strokeWidth: 1.5,
                })}
                <span className={`font-medium ${skill.color}`}>
                  {skill.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-20" variants={containerVariants}>
          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
            variants={itemVariants}
          >
            Proficiency Levels
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={item.level}
                className="relative"
                variants={itemVariants}
              >
                <div className="text-center mb-4">
                  <h4 className="text-xl font-medium text-light-text dark:text-dark-text">
                    {item.level}
                  </h4>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    animate={
                      isInView
                        ? { width: `${item.percentage}%` }
                        : { width: "0%" }
                    }
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: "0%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
