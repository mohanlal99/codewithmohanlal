"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center gap-4 min-h-[60vh] p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      id="contact"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="text-center w-full max-w-md p-8 rounded-lg shadow-2xl bg-gray-800 backdrop-blur-lg border border-gray-700"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4"
          >
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              variant="bordered"
              className="flex-1"
              required
            />
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              variant="bordered"
              className="flex-1"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              variant="bordered"
              minRows={4}
              className="w-full"
              required
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-full hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </Button>
          </motion.div>
        </form>
      </motion.div>

      <ToastContainer position="bottom-right" />
    </motion.section>
  );
};

export default ContactSection;
