"use client";

import { Image } from "@nextui-org/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import SectionTitle from "./SectionTitle";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative  overflow-hidden"
      id="about"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br " />

      <SectionTitle side="right" title="About" />
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left: About Content (70%) */}
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-[70%] pr-0 md:pr-12 mb-12 md:mb-0"
          initial="hidden"
          variants={containerVariants}
        >
          <motion.p
            className="text-[18px] font- leading-relaxed text-justify mx-3 md:mx-8 text-[#666] mb-2 "
            variants={itemVariants}
          >
            Hi, I&#39;m a passionate Full Stack Developer skilled in modern web
            technologies like{" "}
            <span className="font-semibold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent">
              TypeScript, React, Next.js, and MongoDB
            </span>
            . My focus is on crafting seamless and user-friendly digital
            experiences. With a dedication to clean and efficient code, I aim to
            solve real-world problems through innovative web applications.
            I&#39;m constantly learning and adapting to new technologies to stay
            at the forefront of web development.
          </motion.p>

          {/* Download Resume Button */}
          <motion.div className="text-center" variants={itemVariants}>
            <a
              className="inline-flex items-center text-lg font-semibold rounded-xl hover:shadow-light-primary/20 dark:hover:shadow-dark-primary/20 transition-all duration-300 transform hover:-translate-y-1"
              href="https://drive.google.com/file/d/1tRA-T2VfJ6qhT64fOOXjF-72tl4mPS5u/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Resume
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: GitHub GIF (30%) */}
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-[30%] flex justify-center items-center"
          initial="hidden"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-sm">
            {/* Decorative elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-2xl blur opacity-30" />
            <div className="relative">
              <Image
                removeWrapper
                alt="GitHub Coding GIF"
                className="rounded-xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                src="https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
