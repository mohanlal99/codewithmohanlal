import React from "react";
import { Link } from "@nextui-org/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram,
  MessageCircle,
} from "lucide-react";

import { HeartFilledIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/918118862474",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohan-lal-4719a9315",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      href: siteConfig.links.github,
      label: "GitHub",
      color: "hover:text-gray-500",
    },
  ];

  return (
    <footer className="relative py-20 px-4 bg-gradient-to-b from-light-background to-light-background/95 dark:from-dark-background dark:to-dark-background/95">
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
              href="mailto:mohanlalv433@gmail.com"
            >
              <Mail className="w-5 h-5" />
              <span>mohanlalv433@gmail.com</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors"
              href="tel:+918118862474"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8118862474</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                className="group relative"
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative p-3 rounded-full border-2 border-light-primary/20 dark:border-dark-primary/20 bg-light-background dark:bg-dark-background group-hover:border-transparent transition-colors">
                  {React.createElement(social.icon, {
                    className: `w-6 h-6 text-light-primary dark:text-dark-primary ${social.color} transition-colors`,
                    strokeWidth: 1.5,
                  })}
                </div>
                <span className="sr-only">{social.label}</span>
              </Link>
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
