"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

import About from "./_components/about";
import Skills from "./_components/skill";
import Projects from "./_components/project";

import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import ResumeModalImage from "@/components/model";
import { siteConfig } from "@/config/site";

export default function Home() {
  const skills = [
    "React",
    "Next.js",
    "NextUI",
    "Python",
    "Tailwind CSS",
    "Django",
    "MongoDB",
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const [index, setIndex] = useState(0);

  const RotatingText = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return <span>{skills[index]}</span>;
  };

  return (
    <>
      {/* Home Section */}
      <section
        className="flex flex-col md:h-[90vh] h-[70vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
        id="home"
      >
        <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto mb-4">
          <div className="absolute md:static h-full md:h-auto md:block md:w-1/2 blur-md md:blur-0 pt-4 md:pt-0">
            <Image
              alt="Background"
              className="hidden md:block w-full h-full object-cover rounded-full"
              src="/myimage.png"
            />
            <Image
              alt="Background"
              className="w-full h-full md:hidden pt-14"
              src="/project/my.png"
            />
          </div>

          <div className="relative z-10 text-center md:text-left md:w-1/2 p-4">
            <span>Hello I{`'`}m</span>
            <h1 className="sm:text-4xl text-3xl md:text-7xl font-bold text-primary">
              Mohanlal
            </h1>
            <p className="mt-4 text-lg capitalize">
              Aspiring full stack developer passionate about modern web
              technologies like{" "}
              <span className="text-success font-bold text-xl">
                <RotatingText />
              </span>
            </p>

            <div className="flex gap-3 justify-center items-center mt-5">
              <ResumeModalImage />
              <GithubIcon />
              <Link href="#contact" />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <section
        className="flex flex-col p-3 md:h-[90vh] h-[90vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
        id="blog"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">My Blog</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {siteConfig.MyBlog.map((blog, index) => (
              <div
                key={index}
                className=" p-4 rounded-lg border dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"
              >
                <h3 className="text-xl font-bold flex gap-2 text-primary">
                  <span className="rounded-full overflow-hidden">
                    <HeartFilledIcon />
                  </span>
                  {blog.title}
                </h3>
                <p className="text-sm text-default-500 text-start">
                  {blog.content}
                </p>
                <Link
                  className="text-blue-400 underline mt-2 inline-block"
                  href="#"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
          <Button className="mt-4" color="secondary">
            See All
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="flex flex-col items-center justify-center gap-4 h-screen p-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        id="contact"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="text-center w-full max-w-md p-6 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="p-2 rounded border border-gray-500 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="p-2 rounded border border-gray-600 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
                type="email"
              />
            </div>
            <textarea
              className="p-2 rounded border border-gray-600 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Message"
            />
            <Button className="mt-4 w-full" color="secondary">
              Send
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
