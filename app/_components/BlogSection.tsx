import { Button } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import SectionTitle from "./SectionTitle";

import { HeartFilledIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const BlogSection = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      animate={controls}
      className="sm:p-2 min-h-screen px-3 flex flex-col items-center justify-center bg-light-background dark:bg-dark-background"
      id="blog"
      initial="hidden"
      variants={containerVariants}
    >
      <SectionTitle side="right" title="My Blog" />
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center"
        variants={containerVariants}
      >
        {siteConfig.MyBlog.map((blog, index) => (
          <motion.div
            key={index}
            className="cursor-pointer p-6 rounded-lg border dark:bg-dark-background bg-light-background shadow-md hover:shadow-xl transition-shadow duration-300"
            layoutId={blog.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedId(blog.id)}
          >
            <h3 className="text-2xl font-bold flex gap-2 text-primary">
              <HeartFilledIcon className="text-red-500" />
              {blog.title}
            </h3>
            <p className="text-sm text-light-text line-clamp-3 dark:text-dark-text text-start mt-2">
              {blog.content}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div>
        {selectedId && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="p-6 bg-light-background dark:bg-dark-background rounded-lg max-w-2xl w-full shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {siteConfig.MyBlog.map((blog) => {
                if (blog.id === selectedId) {
                  return (
                    <div key={blog.id}>
                      <h3 className="text-3xl font-bold mb-4 text-light-primary dark:text-dark-primary flex gap-2">
                        <HeartFilledIcon className="text-red-500" />
                        {blog.title}
                      </h3>
                      <p className="text-lg text-light-text dark:text-dark-text mb-4">
                        {blog.content}
                      </p>
                      <Button
                        className="bg-red-500 text-white"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </Button>
                    </div>
                  );
                }
              })}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default BlogSection;
