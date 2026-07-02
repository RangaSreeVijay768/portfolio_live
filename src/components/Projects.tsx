
import { useState } from 'react';
import { Github, Link, Code, Zap, User } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart Veggies – Inventory & Business Management Platform',
      description: 'Full-stack business management platform designed for vegetable market vendors to manage daily transactions, stock entries from farmer trucks, item tracking, sales analytics, and electronic weighing scale integration.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'web',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      github: 'https://github.com/yourusername/vegetable-market-management.git',
      live: 'https://smart-veggies.vercel.app/',
      features: [
        'Daily Transaction Management',
        'Stock Entry from Farmer Trucks',
        'Inventory Tracking by Item',
        'Sales & Profit Analytics Dashboard',
        'Electronic Weighing Scale Integration',
        'Vendor Reports & History'
      ]
    },
    {
      id: 2,
      title: 'Wallpapers Mobile App',
      description: 'Flutter mobile app with rich wallpaper collection, auto-change functionality, and seamless user experience with Google Drive integration.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'mobile',
      tech: ['Flutter', 'Dart', 'Google Drive API', 'PostgreSQL', 'Node', 'Express'],
      github: 'https://github.com/RangaSreeVijay768/wallpaper_app_flutter',
      live: '',
      features: ['Auto Wallpaper Change', 'Categories', 'Download Option', 'Offline Access']
    },
    {
      id: 3,
      title: 'E-Commerce Website (MERN)',
      description: 'Full-stack e-commerce platform with user authentication, product management, shopping cart, and secure payment integration using Stripe API.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay'],
      github: 'https://github.com/RangaSreeVijay768/ecommerceWebsite.git',
      live: 'https://ranga-ecommerce.vercel.app',
      features: ['User Authentication', 'Payment Gateway', 'Admin Panel', 'Real-time Updates']
    },
    {
      id: 4,
      title: 'Car Racing Game Website',
      description: 'Interactive car racing game with increasing difficulty levels, score tracking, and responsive design for optimal gaming experience.',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'web',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RangaSreeVijay768/Car-Game.git',
      live: 'https://ranga-car-game.vercel.app/',
      features: ['Score System', 'Responsive Design', 'Sound Effects']
    },
    {
      id: 5,
      title: 'Event Management Website',
      description: 'A web application to manage and organize events with features for event creation, user registration, live updates, and admin controls.',
      image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'web',
      tech: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/rangasreevijay768/event-management',
      live: 'https://ranga-event-management.vercel.app/',
      features: ['Event Listing', 'User Registration', 'Admin Panel', 'Live Updates']
    },
    {
      id: 6,
      title: 'Salon Management Mobile App (Full Stack)',
      description: 'Mobile-based salon management application designed to streamline customer handling, service management, employee tracking, inventory control, transaction recording, and business analytics.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'mobile',
      tech: ['Flutter', 'Node.js', 'Express', 'PostgreSQL'],
      github: '',
      live: '',
      features: [
        'Customer Management (CRUD)',
        'Service Management (CRUD)',
        'Employee Management (CRUD)',
        'Inventory Tracking',
        'Transaction Records & Billing',
        'Sales & Performance Analytics Dashboard'
      ]
    },
    {
      id: 7,
      title: 'College Management System',
      description: 'Comprehensive mobile application for college services including website access, fee payment, and material download functionality.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=600',
      category: 'mobile',
      tech: ['Flutter', 'Dart', 'Google Drive API', 'Firebase', 'PostgreSQL', 'Node', 'Express'],
      github: 'https://github.com/RangaSreeVijay768/SVCK_Online.git',
      live: '',
      features: ['Student Portal', 'Fee Payment', 'Material Access', 'Notifications']
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'mobile', label: 'Mobile Apps', icon: User },
    { key: 'web', label: 'Web Apps', icon: Zap },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.key
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'glass-card text-gray-300 hover:text-white hover:scale-105'
                }`}
            >
              <filter.icon size={18} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Link size={16} />
                      </a>
                    )}
                  </div>
                </div> */}
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2.5 bg-blue-500/50 text-white rounded hover:bg-blue-500 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/rangasreevijay768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white rounded-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
