"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Link } from "@nextui-org/react";

import { GithubIcon } from "@/components/icons";
import ResumeModalImage from "@/components/model";

const HomeSection = () => {
  const [index, setIndex] = useState(0);
  const skills = [
    "React",
    "Next.js",
    "NextUI",
    "Python",
    "Tailwind CSS",
    "Django",
    "MongoDB",
  ];

  const RotatingText = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills[index]}
        </motion.span>
      </AnimatePresence>
    );
  };

  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
      id="home"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto">
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          className="absolute md:static h-full md:h-auto md:block md:w-1/2 blur-md md:blur-0 "
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            alt="Background"
            className="w-full h-full object-cover rounded-full"
            src="/myimage.png"
          />
        </motion.div>

        <motion.div
          animate={{ x: 0, opacity: 1 }}
          className="relative z-10 text-center md:text-left md:w-1/2 p-4"
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hello I{`'`}m
          </motion.span>
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            className="sm:text-4xl text-3xl md:text-7xl font-bold text-primary"
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Mohanlal
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            className="mt-4 text-lg capitalize"
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Aspiring full stack developer passionate about modern web
            technologies like{" "}
            <span className="text-success font-bold text-xl">
              <RotatingText />
            </span>
          </motion.p>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="flex gap-3 justify-center items-center mt-5"
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ResumeModalImage />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <GithubIcon />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="#contact" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
