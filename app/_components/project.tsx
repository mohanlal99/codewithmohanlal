"use client"

import React, { useEffect } from "react"
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { siteConfig } from "@/config/site"
import { GithubIcon } from "@/components/icons"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Projects = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
  }

  return (
    <motion.section
      ref={ref}
      className="p-6 sm:p-2 min-h-screen flex flex-col items-center justify-center dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 bg-gradient-to-br from-gray-100 via-purple-100 to-violet-200"
      id="project"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="text-center sm:p-8 w-full max-w-7xl" variants={containerVariants}>
        <motion.h2 
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          variants={titleVariants}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3"
          variants={containerVariants}
        >
          {siteConfig.projectItem.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.001 }} whileTap={{ scale: 0.95 }}>
              <Card className="border-2 border-primary/20 dark:bg-gray-800/50 bg-white/50 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardBody className="p-0">
                  <Image
                  removeWrapper
                    alt={project.label}
                    radius="md"
                    className="object-contain sm:object-cover w-full sm:h-64"
                    src={project.image}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                      {project.label}
                      <Image
                        alt="check icon"
                        className="dark:invert"
                        height={20}
                        src="/icons/check.svg"
                        width={20}
                      />
                    </h2>
                    <p className="text-default-500 text-sm mb-4">{project.des}</p>
                    <div className="flex justify-center gap-4">
                      {project.live && (
                        <Link
                          href={project.live}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Button className="bg-primary text-white hover:bg-primary/80 transition-colors">
                            Live Demo
                            <Image
                              alt="live"
                              src="/project/live.png"
                              width={20}
                            />
                          </Button>
                        </Link>
                      )}
                      <Link
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button className="bg-secondary text-white hover:bg-secondary/80 transition-colors">
                          GitHub <GithubIcon />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <Button
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = siteConfig.links.github)}
          >
            See More Projects
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Projects