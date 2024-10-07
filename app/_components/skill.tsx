"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { siteConfig } from "@/config/site"
import { Image } from "@nextui-org/react"

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section
    ref={sectionRef}
    className="relative shadow-lg p-10 flex flex-col md:flex-row md:min-h-[100vh] min-h-[80vh] items-center justify-center bg-gradient-to-b from-purple-100 to-purple-300 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    id="skills"
  >
    {/* Background Image Animation */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0 flex justify-center items-center"
    >
      <Image
        alt="Background"
        className="animate-pulse w-[500px] h-[500px] object-cover opacity-50"
        src="/project/skill.png"
      />
    </motion.div>

    {/* Main Content */}
    <motion.div
      className="text-center relative z-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500"
        variants={itemVariants}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid gap-5 xl:grid-cols-6 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 transition-all duration-500"
        variants={containerVariants}
      >
        {siteConfig.skillMenuItem.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 border-2 border-purple-500 rounded-xl font-bold text-purple-600 dark:text-white hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg bg-white dark:bg-gray-800"
            variants={itemVariants}
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-6 dark:text-gray-300">Skill Proficiency</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {["Beginner", "Intermediate", "Advanced", "Expert"].map((level, index) => (
            <div
              key={level}
              className="w-full sm:w-1/4 flex-grow"
            >
              <h4 className="text-lg font-medium mb-2">{level}</h4>
              <motion.div
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${(index + 1) * 25}%` } : { width: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default Skills