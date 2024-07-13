import React from "react";

import { siteConfig } from "@/config/site";

const Skills = () => {
  return (
    <section
      className="shadow-md p-6 flex flex-col md:flex-row md:min-h-[100vh] min-h-[80vh] items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"
      id="skills"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">My Skills</h2>
        <div className="grid gap-5 xl:grid-cols-6  grid-cols-2 md:grid-cols-4 sm:grid-cols-3 transition-all duration-500">
          {siteConfig.skillMenuItem.map((item, index) => (
            <div
              key={index}
              className="p-2 border-primary border rounded-md font-bold hover:bg-secondary transition-all duration-500"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
