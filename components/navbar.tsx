"use client";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { useScroll } from "./RefContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { homeRef, aboutRef, projectsRef, contactRef, scrollToSection } =
    useScroll();
  return (
    <nav className="sticky top-0 z-50 bg-light-background dark:bg-dark-background font-extrabold ">
      <div className=" max-w-5xl m-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-md">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center">
              <HeartFilledIcon className="h-8 w-8 text-light-primary dark:text-dark-primary" />
              <span className="ml-2 text-base text-md text-light-primary dark:text-dark-primary">
                Mohanlal
              </span>
            </Link>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(homeRef)}>
                Home
              </button>
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(aboutRef)}>
                About
              </button>
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(projectsRef)}>
                Projects
              </button>
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(contactRef)}>
                Contact
              </button>

              <Link
                href={siteConfig.links.github}
                className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                aria-label="View GitHub profile">
                <GithubIcon className="h-6 w-6" />
              </Link>
              <ThemeSwitch />
            </div>

            {/* Mobile menu button */}

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                aria-label="Toggle menu">
                {!isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="space-y-2 pt-2">
             
                  <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(homeRef)}>
                Home
              </button>
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(aboutRef)}>
                About
              </button>
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(projectsRef)}>
                Projects
              </button>
              <button
                className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
                onClick={() => scrollToSection(contactRef)}>
                Contact
              </button>
             
              <div className="flex items-center gap-4 mt-2">
                <Link
                  href={siteConfig.links.github}
                  className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
                  <GithubIcon className="h-6 w-6" />
                </Link>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
