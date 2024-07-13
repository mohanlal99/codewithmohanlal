import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";

const About = () => {
  return (
    <section
      className="shadow-xl flex flex-col md:flex-row md:min-h-[100vh] min-h-[80vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
      id="about"
    >
      <div className="absolute md:static h-full md:h-auto md:block md:w-1/2 ">
        <Image
          alt="Background"
          className="w-full h-full object-cover rounded-"
          src="/about-background.jpg"
        />
      </div>
      <div className="relative z-10 text-center md:text-left md:w-1/2 p-4">
        <Link className="text-3xl text-center font-bold mb-4" href="#about">
          About Me
        </Link>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className=" border border-gray-500 rounded-md p-3 flex flex-col items-center justify-center">
            <Image
              alt="badge"
              className="w-full h-full dark:bg-white object-cover rounded-"
              src="/icons/badgeicon.svg"
              width={20}
            />
            <h2 className="text-center  font-bold">Experience</h2>
            <div className="flex flex-col text-center text-default-500">
              <p className="text-md">1 year</p>
              <p className="text-small ">Full Stack Developer</p>
            </div>
          </div>
          <div className=" border border-gray-500 rounded-md p-3 flex flex-col items-center justify-center">
            <Image
              alt="badge"
              className="w-full h-full dark:bg-white object-cover rounded-"
              src="/icons/education.svg"
              width={30}
            />
            <h2 className="text-center  font-bold">Education</h2>
            <div className="flex flex-col text-center text-default-500">
              <p className="text-md">2020-2023</p>
              <p className="text-small ">B.Sc. Becheclors Degree</p>
            </div>
          </div>
        </div>

        <p className="max-w-2xl text-start ">
          A passionate and dedicated Full Stack Developer with a robust
          foundation in modern web development technologies, including{" "}
          <span className="text-secondary font-bold">
            Python, JavaScript, Django, React, Next.js, MongoDB, and MySQL{" "}
          </span>
          . Holding a Bachelor of Science degree from Maharaja Ganga Singh
          University, I have developed a keen interest in creating innovative
          and dynamic web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
