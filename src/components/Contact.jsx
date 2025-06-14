'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn } from '@/lib/animations';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log(formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <SectionHeader title="Contact Me" />
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6">
              I'm always open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FiMail className="text-[#FFD700] text-xl" />
                <a href="mailto:contact@example.com" className="hover:text-[#FFD700] transition-colors">
                  contact@example.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <FiGithub className="text-[#FFD700] text-xl" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors">
                  github.com/johndoe
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <FiLinkedin className="text-[#FFD700] text-xl" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors">
                  linkedin.com/in/johndoe
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <FiTwitter className="text-[#FFD700] text-xl" />
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors">
                  @johndoe
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFD700] text-gray-900 font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}