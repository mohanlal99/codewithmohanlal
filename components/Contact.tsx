"use client";

import { Mail, Phone, MapPin, Linkedin, Send, Download } from "lucide-react";
import { GithubIcon } from "./icons";
import { use, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast().toast;
  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement("a");
    link.href =
      "https://drive.usercontent.google.com/u/0/uc?id=1LitTvfZ-M_fdiX6l2M-QAcsVh5xG5KWU&export=download";
    link.download = "Mohan-Lal-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => {
    // Open resume in Google Drive (placeholder URL)
    window.open(
      "https://drive.google.com/file/d/1LitTvfZ-M_fdiX6l2M-QAcsVh5xG5KWU/view",
      "_blank"
    );
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email, save to database)
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("All fields are required");
      return;
    }
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! I'll get back to you soon.",
      duration: 5000,
      variant: "default",
      draggable: true,
    });
    

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mohanlalv433@gmail.com",
      href: "mailto:mohanlalv433@gmail.com",
      color: "bg-blue-50 text-blue-800",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8118862474",
      href: "tel:+918118862474",
      color: "bg-green-50 text-green-800",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Rajasthan, India",
      href: null,
      color: "bg-purple-50 text-purple-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohanlal99",
      href: "https://linkedin.com/in/mohanlal99",
      color: "bg-blue-50 text-blue-800",
    },
    {
      icon: <GithubIcon className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/mohanlal99",
      href: "https://github.com/mohanlal99",
      color: "bg-gray-50 text-gray-800",
    },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto py-20 bg-slate-50 dark:bg-gray-900">
      <Toaster/>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let&#39;s collaborate on your next project. I&#39;m always open to
            discussing new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 ">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg overflow-hidden">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Section */}
          
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full h-20 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or opportunity..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 dark:bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
