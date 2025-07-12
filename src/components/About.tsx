import React from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';
import shayan from '../assets/team-picture/shayan.jpg'; // Adjust the path as necessary

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: '50+', label: 'Happy Clients' },
    { icon: <Award size={32} />, number: '100+', label: 'Projects Completed' },
    { icon: <Clock size={32} />, number: '5+', label: 'Years Experience' },
    { icon: <Star size={32} />, number: '4.9', label: 'Client Rating' }
  ];

  const team = [
    {
      name: 'CEO sir',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tech enthusiast - Driving Innovation, Delivering Impact.'
    },
    {
      name: 'Shayan Dutta',
      role: 'CTO & Tech Lead',
      image: shayan,
      description: 'Creative and Critical thinker, expertise in building cross platform products.'
    },
    {
      name: 'someone',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in Cloud Operations with a passion for creating seamless mobile experiences.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers and designers committed to delivering 
            exceptional digital solutions that drive business growth and user satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center animate-fade-scale animate-delay-${(index + 1) * 100} hover-lift`}>
              <div className="text-blue-600 flex justify-center mb-4 animate-bounce-slow">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-slide-up">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-500 hover-lift hover-glow animate-slide-up animate-delay-${(index + 1) * 200}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover hover:scale-110 hover:rotate-6 transition-all duration-500"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-3 animate-shimmer">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover-glow animate-slide-up">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-gradient-animate">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2025, TechFlow Solutions started as a small team with a big vision: 
              to help businesses transform digitally and achieve their goals through innovative 
              technology solutions. Today, we've grown into a trusted partner for companies 
              of all sizes, delivering cutting-edge web and mobile applications that drive 
              real business results. Our commitment to quality, innovation, and client 
              satisfaction remains at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;