"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";
import SectionTitle from "./SectionTitle";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Sample helper function to calculate days ago

const Projects = () => {
  const router = useRouter();
  const projectItems = siteConfig.projectItem.slice(0); // Use full list or slice as needed

  return (
    <section id="project" className="min-h-screen flex flex-col items-center px-4 py-10">
      <div className="text-center w-full mb-10">
        <SectionTitle side="right" title="Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {projectItems.map((project, index) => (
          <Card
            key={index}
            className="shadow-lg dark:shadow-white/20 bg-light-background dark:bg-dark-background"
          >
            <CardBody className="p-0 overflow-hidden">
              <div className="relative  w-full h-52 overflow-hidden ">
                
                <Image
                  removeWrapper
                  alt={project.label}
                  className="object-contain w-full h-full"
                  src={project.image || "/placeholder.svg"}
                  radius="none"
                />
              </div>

              <div className="p-2">
                <h2 className="text-xl font-bold mb-2 text-center text-light-text dark:text-dark-text border-b inline-block">
                  {project.label}
                </h2>
                <p className="text-light-text/80 dark:text-dark-text/80 text-sm font-semibold mb-1">
                  {project.time}
                </p>
                <p className="text-sm text-light-text/80 dark:text-dark-text/80 font-medium mb-2 line-clamp-3">
                  {project.des}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                

                <div className="flex justify-center gap-4">
                  {project.live && (
                    <Button
                      size="sm"
                      onPress={() => router.push(project.live)}
                      className="bg-light-primary dark:bg-dark-primary text-white hover:opacity-80"
                    >
                      Live Demo
                      <Image src="/project/live.png" alt="live" width={20} />
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      onPress={() => router.push(project.github)}
                      className="bg-light-secondary dark:bg-dark-secondary text-white hover:opacity-80"
                    >
                      GitHub <GithubIcon />
                    </Button>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
