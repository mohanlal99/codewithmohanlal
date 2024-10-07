"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useEffect } from "react";

import About from "./_components/about";
import Projects from "./_components/project";
import Skills from "./_components/skill";

import { HeartFilledIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import HomeSection from "./_components/HomeSection";
import BlogSection from "./_components/BlogSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* Home Section */}
      <HomeSection />

      {/* About Me Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
