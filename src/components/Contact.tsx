import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.project}
Budget Range: ${formData.budget}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:info@mantrasoft.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear about your project. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full animate-pulse-slow hover:scale-110 transition-transform duration-300">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@mantrasoft.co.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full animate-pulse-slow animate-delay-200 hover:scale-110 transition-transform duration-300">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (91) 6001612607</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full animate-pulse-slow animate-delay-400 hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office</p>
                  <p className="text-gray-600">Guwahati, 781013</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 animate-shimmer">
              <h4 className="font-bold text-gray-900 mb-2">Response Time</h4>
              <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover-glow animate-slide-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                  placeholder="Your Company"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-400 hover:shadow-md"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-slow"
              >
                Send Message
                <Send size={20} className="animate-bounce-slow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;