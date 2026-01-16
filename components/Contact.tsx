"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mohanlalv433@gmail.com",
      href: "mailto:mohanlalv433@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8118862474",
      href: "tel:+918118862474",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajasthan, India",
      href: null,
      color: "from-orange-500 to-amber-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohanlal99",
      color: "bg-[#0077B5]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohanlal99",
      color: "bg-gray-900 dark:bg-white dark:text-gray-900",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mohanlalv433@gmail.com",
      color: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <Toaster />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:shadow-xl transition-all"
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color}`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-violet-500 transition-colors" />
                    </a>
                  ) : (
                    <div className="glass-card rounded-2xl p-6 flex items-center gap-5">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color}`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${item.color} text-white p-4 rounded-xl hover:shadow-lg hover:scale-110 transition-all`}
                    whileHover={{ rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.button
              onClick={() => window.open("https://drive.google.com/file/d/1HAos-GAzVts2LvIpldHbJUAp_rhwqJaj/view?usp=sharing", "_blank")}
              className="w-full glass-card rounded-2xl p-6 flex items-center justify-center gap-3 text-violet-600 dark:text-violet-400 font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;