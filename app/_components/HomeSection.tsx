"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Image, Link } from "@nextui-org/react"
import { GithubIcon } from "@/components/icons"
import ResumeModalImage from "@/components/model"

const HomeSection = () => {
  const [index, setIndex] = useState(0)
  const skills = [
    "React",
    "Next.js",
    "NextUI",
    "Python",
    "Tailwind CSS",
    "Django",
    "MongoDB",
  ]

  const RotatingText = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length)
      }, 2000)

      return () => clearInterval(interval)
    }, [])

    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills[index]}
        </motion.span>
      </AnimatePresence>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:h-[90vh] min-h-[70vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto mb-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute md:static h-full md:h-auto md:block md:w-1/2 blur-md md:blur-0 pt-4 md:pt-0"
        >
          <Image
            alt="Background"
            className="w-full h-full object-cover rounded-full"
            src="/myimage.png"
          />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center md:text-left md:w-1/2 p-4"
        >
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hello I{`'`}m
          </motion.span>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="sm:text-4xl text-3xl md:text-7xl font-bold text-primary"
          >
            Mohanlal
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-4 text-lg capitalize"
          >
            Aspiring full stack developer passionate about modern web
            technologies like{" "}
            <span className="text-success font-bold text-xl">
              <RotatingText />
            </span>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex gap-3 justify-center items-center mt-5"
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
  )
}

export default HomeSection