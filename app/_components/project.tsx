import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";

const Projects = () => {
  return (
    <section
      className="p-6 flex flex-col md:flex-row md:min-h-[100vh] min-h-[80vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
      id="project"
    >
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {siteConfig.projectItem.map((project, index) => (
            <Card
              key={index}
              className="max-w-sm border p-2 flex flex-col items-center dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
            >
              <Image
                alt={project.label}
                className="object-cover max-h-48"
                height={200}
                radius="md"
                src={project.image}
                width={300}
              />

              <CardBody className="text-center">
                <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                  {project.label}
                  <Image
                    alt="check icon"
                    className="dark:bg-white"
                    height={20}
                    src="/icons/check.svg"
                    width={20}
                  />
                </h2>
                <p className="text-default-500 text-sm">{project.des}</p>
                <div className="flex justify-center gap-4 mt-4">
                  {project.live && (
                    <Link
                      className=""
                      href={project.live}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button className="bg-primary dark:bg-secondary">
                        Live Demo
                        <Image alt="live" src="/project/live.png" width={20} />
                      </Button>
                    </Link>
                  )}
                  <Link
                    className=""
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button className="dark:bg-primary bg-secondary">
                      GitHub <GithubIcon />
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <Button
          className="mt-4"
          color="secondary"
          onClick={() => (window.location.href = siteConfig.links.github)}
        >
          See More...
        </Button>
      </div>
    </section>
  );
};

export default Projects;
