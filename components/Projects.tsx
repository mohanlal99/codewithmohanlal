"use client";

import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MemeHub – Social Media Meme Platform',
      description: 'A comprehensive social media platform for meme enthusiasts with engaging features including meme battles, voting system, trending feeds, and AI-powered meme generation.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Firestore', 'Vercel'],
      features: [
        'Responsive UI with modern design',
        'Firebase authentication and real-time database',
        'Meme battles with voting system',
        'AI-powered meme generation with Predis.ai',
        'Infinite scrolling for seamless UX'
      ],
      github: 'https://github.com/mohanlal/memehub',
      demo: 'https://memehub-demo.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'Memory Lane App – Digital Scrapbook',
      description: 'A beautiful digital scrapbook application that helps users preserve personal memories through organized albums with photos, notes, and location-based mapping.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Leaflet.js', 'Vercel'],
      features: [
        'Memory albums with photos and notes',
        'Location-based memory mapping with Leaflet.js',
        'Firebase authentication and storage',
        'Dark mode support',
        'Responsive and accessible design'
      ],
      github: 'https://github.com/mohanlal/memory-lane',
      demo: 'https://memory-lane-app.vercel.app',
      category: 'Frontend'
    },
    {
      title: 'Top Global News – Modern News Platform',
      description: 'A scalable and responsive news platform delivering articles across multiple categories with a secure admin panel and clean, ad-free reading experience.',
      image: 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Next.js', 'MongoDB', 'Node.js', 'JWT', 'Tailwind CSS'],
      features: [
        'Multi-category news delivery (World, Business, Sports)',
        'Secure admin panel with JWT authentication',
        'Role-based access control',
        'MongoDB for content management',
        'Clean, ad-free reading experience'
      ],
      github: 'https://github.com/mohanlal/top-global-news',
      demo: 'https://top-global-news.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
      features: [
        'Real-time sales analytics',
        'Inventory management system',
        'Order tracking and management',
        'User role management',
        'Responsive dashboard design'
      ],
      github: 'https://github.com/mohanlal/ecommerce-dashboard',
      demo: 'https://ecommerce-dashboard-demo.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with team features, real-time updates, and project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      features: [
        'Real-time collaborative features',
        'Project and task organization',
        'Team member management',
        'Progress tracking and analytics',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/mohanlal/task-management',
      demo: 'https://task-management-demo.vercel.app',
      category: 'Full Stack'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my best work in full-stack development, demonstrating scalable solutions and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-800 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex-1 justify-center"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-200 flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/mohanlal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
          >
            <Github size={24} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;