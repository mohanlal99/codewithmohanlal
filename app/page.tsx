"use client";
import { useEffect } from "react";

import { useScroll } from "@/components/RefContext";
import About from "./_components/about";

import HomeSection from "./_components/HomeSection";
import Projects from "./_components/project";
import Skills from "./_components/skill";
import { GitHubStatus } from "./_components/github";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const { homeRef, aboutRef, projectsRef, contactRef, scrollToSection } =
    useScroll();

  return (
    <>
      {/* Home Section */}
      <div ref={homeRef}>
        <HomeSection />
      </div>

      {/* About Me Section */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      <GitHubStatus />

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* Contact Section */}
      {/* <div ref={contactRef}><ContactSection /></div> */}
    </>
  );
}
