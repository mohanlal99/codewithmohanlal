"use client";

import { Image, Link } from "@nextui-org/react";
import {  motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Linkedin, Mail } from "lucide-react";

import { GithubIcon } from "@/components/icons";

const HomeSection = () => {
  const [index, setIndex] = useState(0);
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "NextUI",
    "Tailwind CSS",
    "MongoDB",
  ];
  const socialLinks = [
    {
      href: "mailto:mohanlalv433@gmail.com",
      icon: <Mail />,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/mohan-lal-4719a9315",
      icon: <Linkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/mohanlal99",
      icon: <GithubIcon />,
      label: "GitHub",
    },
  ];

  const RotatingText = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div>
        <motion.span
          key={index}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills[index]}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="flex flex-col mb-20 items-center justify-center bg-light-background dark:bg-dark-background"
      id="home"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center ">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          className="relative z-10 text-center font-extrabold md:text-left md:w-1/2 p-8 m-3"
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            className="text-light-text ml-1 dark:text-dark-text"
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hi, I{`'`}m
          </motion.span>
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            className="sm:text-4xl text-3xl md:text-7xl font-bold text-light-primary dark:text-dark-primary"
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Mohanlal
          </motion.h1>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="mt-4 text-lg capitalize text-light-text dark:text-dark-text"
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            full stack developer passionate about modern web
            technologies like{" "}
            <span className="text-light-secondary dark:text-dark-secondary font-bold text-xl">
              <RotatingText />
            </span>
          </motion.div>
          <div className="mt-6 flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                isExternal
                aria-label={link.label}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-light-secondary dark:border-dark-secondary bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-secondary hover:bg-light-secondary dark:hover:bg-dark-background transition-colors duration-300"
                href={link.href}
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          className=" mt-5 md:w-1/2 md:blur-0 flex justify-end items-end p-3"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            alt="Background"
            className="w-80 object-cover shadow-white/90 shadow-2xl m-2 rounded-full "
            src="/myimage.png"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
