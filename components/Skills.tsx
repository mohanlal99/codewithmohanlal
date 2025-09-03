"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      color: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700',
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
      ]
    },
    {
      title: 'Backend Technologies',
      color: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'JWT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' }
      ]
    },
    {
      title: 'Tools & Platforms',
      color: 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${category.color}`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to a simple colored circle if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm';
                          fallback.textContent = skill.name.charAt(0);
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            GitHub Statistics
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=mohanlal&show_icons=true&theme=default&hide_border=true" 
                alt="GitHub Stats"
                className="w-full h-auto dark:hidden"
              />
              <img 
                src="https://github-readme-stats.vercel.app/api?username=mohanlal&show_icons=true&theme=dark&hide_border=true" 
                alt="GitHub Stats"
                className="w-full h-auto hidden dark:block"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=mohanlal&theme=default&hide_border=true" 
                alt="GitHub Streak"
                className="w-full h-auto dark:hidden"
              />
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=mohanlal&theme=dark&hide_border=true" 
                alt="GitHub Streak"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;