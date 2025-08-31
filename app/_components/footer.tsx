import React from "react";
import { Link } from "@nextui-org/link";
import { Linkedin, Mail, Phone, Instagram, MessageCircle } from "lucide-react";

import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const socialLinks = [
    {
      href: "mailto:mohanlalv433@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:bg-red-500",
    },
    {
      href: "https://www.linkedin.com/in/mohan-lal-4719a9315",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      href: "https://github.com/mohanlal99",
      icon: GithubIcon,
      label: "GitHub",
      color: "hover:bg-gray-700",
    },
  ];

  return (
    <footer className="relative py-20 px-4 bg-gradient-to-b ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent">
              Get in touch
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 italic">
              &ldquo;Transforming ideas into reality through the power of code,
              where every line unlocks new possibilities.&ldquo;
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link
              className="flex items-center gap-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              href="mailto:mohanlalv433@gmail.com">
              <Mail className="w-5 h-5" />
              <span>mohanlalv433@gmail.com</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              href="tel:+918118862474">
              <Phone className="w-5 h-5" />
              <span>+91 8118862474</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${link.color} hover:text-white`}
                aria-label={link.label}>
                <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Signature */}
          <div className="flex flex-col items-center gap-2 mt-8">
            <HeartFilledIcon className="w-6 h-6 text-light-primary dark:text-dark-primary animate-pulse" />
            <p className="text-light-text dark:text-dark-text">
              Designed by{" "}
              <span className="font-bold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary bg-clip-text text-transparent">
                Mohanlal
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
