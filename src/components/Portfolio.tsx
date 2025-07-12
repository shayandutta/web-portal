import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application for healthcare management and patient monitoring.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      color: 'from-teal-500 to-green-600'
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'Real-time financial analytics dashboard with data visualization and reporting.',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'D3.js', 'PostgreSQL', 'AWS'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Restaurant Management',
      category: 'Full Stack',
      description: 'Complete restaurant management system with ordering, inventory, and analytics.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Express', 'MySQL', 'Socket.io'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Learning Management System',
      category: 'Education Platform',
      description: 'Comprehensive LMS with video streaming, assessments, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'GraphQL', 'Prisma', 'Vercel'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'IoT Dashboard',
      category: 'IoT Solution',
      description: 'Real-time IoT device monitoring and control system with advanced analytics.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular', 'Python', 'InfluxDB', 'Docker'],
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing successful projects that demonstrate our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover-glow animate-slide-up animate-delay-${(index % 6 + 1) * 100}`}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="flex gap-4">
                    <button className="bg-white text-gray-800 p-3 rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 animate-bounce-slow">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-gray-800 p-3 rounded-full hover:scale-125 hover:-rotate-12 transition-all duration-300 animate-bounce-slow animate-delay-200">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2 group-hover:text-white transition-colors duration-300">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;