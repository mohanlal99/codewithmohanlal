import { Image } from "@nextui-org/react";

import SectionTitle from "./SectionTitle";

const GithubStatus = () => {
  return (
    <section className="flex flex-col items-center py-10 p-3">
      <SectionTitle side="left" title="📊 GitHub Status" />
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* GitHub Stats */}
        <div className="flex justify-center">
          <Image
            alt="GitHub Stats"
            className="rounded-lg shadow-lg"
            height={250}
            src={`https://github-readme-stats.vercel.app/api?username=mohanlal99&show_icons=true&theme=radical`}
            width={500}
          />
        </div>

        {/* Most Used Languages */}
        <div className="flex justify-center">
          <Image
            alt="Top Languages"
            className="rounded-lg shadow-lg"
            height={250}
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mohanlal99&layout=compact&theme=radical`}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export { GithubStatus};
