export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Self Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
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
      label: "Blog",
      href: "#blog",
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
  skillMenuItem: [
    {
      label: "Java Script",
    },
    {
      label: "Tailwind Css",
    },
    {
      label: "React",
    },
    {
      label: "Next Js",
    },
    {
      label: "shadcn/ui",
    },
    {
      label: "Next Ui",
    },
    {
      label: "MongoDb",
    },
    {
      label: "Postgre Sql",
    },
    {
      label: "Python",
    },
    {
      label: "Django",
    },
    {
      label: "Clerk",
    },
    {
      label: "Hygraph",
    },
  ],

  links: {
    github: "https://github.com/mohanlal99",
  },
  projectItem: [
    {
      label: "Online Course Portal",
      des: "Developed a comprehensive Online Course Portal with secure user authentication and API integration, enabling seamless course creation and management.",
      live: "https://online-courses-portal.vercel.app/",
      github: "https://github.com/mohanlal99/online-course-portal",
      time: "June 2024",
      image: "project/onlinecourseportal.jpg",
    },
    {
      label: "Personal Portfolio",
      des: "Created a dynamic and responsive personal portfolio website showcasing my projects, skills, and experience.",
      live: "https://codewithmohanlal.vercel.app/",
      github: "https://github.com/mohanlal99/codewithmohanlal",
      time: "July 2024",
      image: "project/personalportfolio.jpg",
    },
    {
      label: "Password Manager",
      des: "Built a secure password manager application with a MongoDB backend and React frontend to safely store and manage passwords.",
      github: "https://github.com/mohanlal99/password-manager",
      time: "May 2024",
      image: "project/passwordmanager.jpg",
    },
    {
      label: "To-Do List App",
      des: "Developed a feature-rich To-Do List application to help users organize their tasks efficiently with real-time updates.",
      live: "https://todo-list-project-app.vercel.app/",
      github: "https://github.com/mohanlal99/todo-list",
      time: "April 2024",
      image: "project/todolist.jpg",
    },
    {
      label: "YouTube Video Downloader",
      des: "Created a YouTube Video Downloader with a Python backend to fetch and download videos using the YouTube API.",
      github: "https://github.com/mohanlal99/youtube-video-downloader",
      time: "March 2024",
      image: "project/youtubevideodownloader.jpg",
    },
    {
      label: "Spotify Clone",
      des: "Built a Spotify clone application with a rich UI and integrated Spotify API to fetch and play songs.",
      github: "https://github.com/mohanlal99/spotify_clone",
      time: "February 2024",
      image: "project/spotifyclone.jpg",
    },
  ],
  MyBlog: [
    {
      image: "/project/my.png",
      title: "I Fight For The Users",
      content: `
        If you haven't been able to keep up with my blistering pace of one blog post per year, I don't blame you. There's a lot going on right now. It's a busy time. But let's pause and take a moment to celebrate that Elon Musk destroyed Twitter. I can't possibly say it better than Paul Ford so I'll just refer you there:
      `,
    },
    {
      image: "/project/my.png",
      title: "The Art of Simplifying Complexity",
      content: `
        In the world of software development, simplicity is often underrated but essential. Discover how embracing simplicity can lead to more robust and maintainable code.
      `,
    },
    {
      image: "/project/my.png",
      title: "Embracing Failure: Lessons from Bugs",
      content: `
        Bugs are inevitable in coding, but they also provide valuable learning opportunities. Explore how embracing failure can lead to personal and professional growth in software development.
      `,
    },
    {
      image: "/project/my.png",
      title: "Beyond Code: Building a Developer Community",
      content: `
        Coding isn't just about writing lines of code. It's also about fostering a supportive community. Learn how to build and contribute to a thriving developer community.
      `,
    },
  ],
};
