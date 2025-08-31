import React from "react";
import SectionTitle from "./SectionTitle";

const GitHubStatus: React.FC = () => {
  const username = "mohanlal99";

  return (
    <section className=" ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="GitHub Status" side="left" />

        {/* Stats + Top Languages */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* GitHub Stats */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=1f6feb&text_color=c9d1d9`}
                alt="GitHub Stats"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Most Used Languages */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`}
                alt="Top Languages"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* GitHub Streak */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0d1117&stroke=58a6ff&ring=1f6feb&fire=f85149&currStreakLabel=58a6ff`}
              alt="GitHub Streak"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { GitHubStatus };
