import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: <Globe size={40} />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics Dashboard']
    },
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs, database design, and cloud deployment.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and visually appealing digital experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Zap size={40} />,
      title: 'Digital Consulting',
      description: 'Strategic guidance on digital transformation, technology stack selection, and project planning.',
      features: ['Strategy Planning', 'Tech Consulting', 'Project Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group hover-glow animate-fade-scale animate-delay-${(index % 6 + 1) * 100}`}
            >
              <div className="text-blue-600 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-slow">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center group-hover:text-gray-700 transition-colors duration-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-300 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;