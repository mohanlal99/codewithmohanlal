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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      animate="visible"
      className="flex flex-col items-center justify-center gap-4 min-h-[60vh] p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      id="contact"
      initial="hidden"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className="text-center w-full max-w-md p-8 rounded-lg shadow-2xl bg-gray-800 backdrop-blur-lg border border-gray-700"
        variants={itemVariants}
      >
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <motion.div
            className="flex flex-col md:flex-row gap-4"
            variants={itemVariants}
          >
            <Input
              required
              className="flex-1"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              variant="bordered"
              onChange={handleChange}
            />
            <Input
              required
              className="flex-1"
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              variant="bordered"
              onChange={handleChange}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Textarea
              required
              className="w-full"
              minRows={4}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              variant="bordered"
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-full hover:opacity-90 transition-all duration-300"
              type="submit"
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
