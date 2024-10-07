import { HeartFilledIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const BlogSection = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section
      className="flex flex-col p-6 md:min-h-[80vh] min-h-[90vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
      id="blog"
    >
      <div className="text-center">
        <h2 className="text-4xl p-2 font-bold mb-6 text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text">
          My Blog
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {siteConfig.MyBlog.map((blog, index) => (
            <motion.div
              key={index}
              layoutId={blog.id}
              className="cursor-pointer p-6 rounded-lg border dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedId(blog.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold flex gap-2 text-primary">
                <HeartFilledIcon className="text-red-500" />
                {blog.title}
              </h3>
              <p className="text-sm text-default-500 text-start mt-2">
                {blog.content}
              </p>
            </motion.div>
          ))}
        </div>

        <Button className="mt-8" color="secondary">
          See All
        </Button>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="p-6 bg-white rounded-lg dark:bg-black max-w-2xl w-full shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {siteConfig.MyBlog.map((blog) => {
                if (blog.id === selectedId) {
                  return (
                    <div key={blog.id}>
                      <h3 className="text-3xl font-bold mb-4 text-primary flex gap-2">
                        <HeartFilledIcon className="text-red-500" />
                        {blog.title}
                      </h3>
                      <p className="text-lg text-default-500 mb-4">
                        {blog.content}
                      </p>
                      <Button color="danger" onClick={() => setSelectedId(null)}>
                        Close
                      </Button>
                    </div>
                  );
                }
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;
