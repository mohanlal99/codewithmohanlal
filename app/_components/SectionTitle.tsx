import React from "react";

interface SectionTitleProps {
  side: "left" | "right";
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ side, title }) => {
  const alignment = side === "left" ? "text-left" : "text-right";

  return (
    <div className={`w-full ${alignment} my-4   pb-3`}>
      <h2 className="relative text-[40px] font-bold text-light-primary mr-6 pb-2 dark:text-dark-primary">
        {title}
        <div
          className={`absolute bottom-0 ${side == "right" && "right-0"} w-44 h-1 rounded-full bg-orange-600`}
        />
        <div
          className={`absolute -bottom-3  ${side == "right" && "right-0"} w-20 h-1 rounded-full bg-orange-600`}
        />
      </h2>
    </div>
  );
};

export default SectionTitle;
