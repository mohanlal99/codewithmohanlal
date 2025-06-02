export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CodeWithMohanlal",
  description:
    "Empowering the web with modern technologies, innovative solutions, and seamless user experiences. Explore the work of a skilled Full Stack Developer specializing in JavaScript, React, Next.js, and MongoDB.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Project",
      href: "#project",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Project",
      href: "#project",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  links: {
    github: "https://github.com/mohanlal99",
  },
  projectItem: [
    {
      label: "MemoryLane Personal",
      des: "App to capture, organize, and relive life memories with photos, notes, and locations. Includes timeline, albums, and reminisce feature.",
      live: "https://memory-lane-rosy.vercel.app/",
      github: "#",
      time: "Built in 3 days",
      role: "Full-stack Developer (Solo Project)" ,
      tech: ["HTML", "CSS", "JavaScript", 'Git',"Github", "Vercel"],
      image: "project/memorylane.jpg",
    },
    {
      label: "MemeHub - Hackathon Project",
      des: "A full-stack meme-sharing platform with a creation studio, voting system, analytics, and trending feed. Built during a hackathon.",
      live: "https://memehub-nu.vercel.app/",
      github: "#",
      time: "Built in 2 days",
      role: "Frontend Developer - UI, Auth, API integration",
      tech: ["HTML", "CSS", "JavaScript",'Git',"Github", "Vercel"],
      image: "project/memehub.jpg",
    },
    {
      label: "Amigo Immigration Services",
      des: "Responsive website for an immigration consultancy with clean UI and service-focused design.",
      live: "https://amigoimmigrant.com/",
      github: "https://github.com/mohanlal99/amigoimmigration",
      time: "Built in 5 days",
      tech: ["Next.js", "Tailwind CSS", "Next UI", "Mongodb",'Git',"Github", "Vercel"],
      image: "project/amigoimmigration.jpg",
    },
    {
      label: "Online Course Portal",
      des: "Course platform with secure auth, CMS integration, and dynamic course management.",
      live: "https://online-courses-portal.vercel.app/",
      github: "https://github.com/mohanlal99/online-course-portal",
      time: "Built in 6 days",
      tech: ["Next.js", "Tailwind CSS", "Hygraph", "Clerk", 'Git',"Github", "Vercel"],
      image: "project/onlinecourseportal.jpg",
    },
    {
      label: "Top Global News",
      des: "Responsive news website with real-time global news using APIs, JWT authentication, and user-personalized content.",
      live: "https://topglobalnews.in",
      github: "https://github.com/mohanlal99/Top-Global-News",
      time: "Built in 7 days",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "JWT", "Rest Api", 'Git',"Github", "Vercel"],
      image: "project/topglobalnews.jpg",
    },
    {
      label: "Personal Portfolio",
      des: "A dynamic personal portfolio site showcasing my full-stack projects, skills, and contact info.",
      live: "https://codewithmohanlal.vercel.app/",
      github: "https://github.com/mohanlal99/codewithmohanlal",
      time: "Built in 2 days",
      tech: ["Next.js", "Tailwind CSS",'Git',"Github", "Vercel"],
      image: "project/personalportfolio.jpg",
    },
    {
      label: "Password Manager",
      des: "Secure password manager with user login and encrypted password storage, powered by MongoDB.",
      github: "https://github.com/mohanlal99/password-manager",
      time: "Built in 5 days",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "project/passwordmanager.jpg",
    },
    {
      label: "YouTube Video Downloader",
      des: "YouTube video downloader using Python and the YouTube API to fetch and download videos.",
      github: "https://github.com/mohanlal99/youtube-video-downloader",
      time: "Built in 2 days",
      tech: ["Python", "Flask"],
      image: "project/youtubevideodownloader.jpg",
    },
    {
      label: "Spotify Clone",
      des: "Clone of Spotify with interactive UI and music data fetched using the Spotify API.",
      github: "https://github.com/mohanlal99/spotify_clone",
      time: "Built in 4 days",
      tech: ["React", "Spotify API", "CSS"],
      image: "project/spotifyclone.jpg",
    },
    
  ],
  MyBlog: [
    {
      id: "0",
      image: "/project/my.png",
      title: "I Fight For The Users",
      content: `
        If you haven't been able to keep up with my blistering pace of one blog post per year, I don't blame you. There's a lot going on right now. It's a busy time. But let's pause and take a moment to celebrate that Elon Musk destroyed Twitter. I can't possibly say it better than Paul Ford so I'll just refer you there:
      `,
    },
    {
      id: "1",
      image: "/project/my.png",
      title: "The Art of Simplifying Complexity",
      content: `
        In the world of software development, simplicity is often underrated but essential. Discover how embracing simplicity can lead to more robust and maintainable code.
      `,
    },
    {
      id: "2",
      image: "/project/my.png",
      title: "Embracing Failure: Lessons from Bugs",
      content: `
        Bugs are inevitable in coding, but they also provide valuable learning opportunities. Explore how embracing failure can lead to personal and professional growth in software development.
      `,
    },
    {
      id: "3",
      image: "/project/my.png",
      title: "Beyond Code: Building a Developer Community",
      content: `
        Coding isn't just about writing lines of code. It's also about fostering a supportive community. Learn how to build and contribute to a thriving developer community.
      `,
    },
  ],
};
