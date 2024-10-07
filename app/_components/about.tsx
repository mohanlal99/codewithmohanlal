"use client";

import React, { useRef } from "react";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { motion, useInView, useScroll, useTransform, useViewportScroll } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.6, 3]);
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      className="shadow-xl flex flex-col md:flex-row md:min-h-[100vh] min-h-[80vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] overflow-hidden"
      id="about"
    >
      {/* <motion.div
        className="md:w-1/2 p-8 flex justify-center items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <Image
          alt="Background"
          removeWrapper
          className="w-full max-w-md h-auto object-cover rounded-md shadow-2xl"
          src="/about-background.jpg"
        />
      </motion.div> */}

      <motion.div

        className="relative z-10 text-center md:text-left md:w-10/12 p-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Link
            className="text-4xl font-bold mb-6 inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            href="#about"
          >
            About Me
          </Link>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 grid-cols-1 gap-6 mb-8"
          variants={containerVariants}
        >
          <motion.div
            style={{scale}}
            className="bg-background/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="badge"
              className="w-12 h-12 mb-4 dark:invert"
              src="/icons/badgeicon.svg"
            />
            <h2 className="text-xl font-bold mb-2">Experience</h2>
            <div className="flex flex-col text-center text-default-500">
              <p className="text-lg font-semibold">1 year</p>
              <p className="text-sm">Full Stack Developer</p>
            </div>
          </motion.div>

          <motion.div
          style={{scale}}
            className="bg-background/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="education"
              className="w-12 h-12 mb-4 dark:invert"
              src="/icons/education.svg"
            />
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="flex flex-col text-center text-default-500">
              <p className="text-lg font-semibold">2020-2023</p>
              <p className="text-sm">B.Sc. Bachelor's Degree</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="max-w-4xl text-start mt-6 text-lg leading-relaxed"
          variants={itemVariants}
        >
          A passionate and dedicated Full Stack Developer with a robust
          foundation in modern web development technologies, including{" "}
          <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Python, JavaScript, Django, React, Next.js, MongoDB, and MySQL
          </span>
          . Holding a Bachelor of Science degree from Maharaja Ganga Singh
          University, I have developed a keen interest in creating innovative
          and dynamic web applications.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
