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
    console.log(formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="section-container">
        <SectionHeader title="Contact Me" />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6 text-gray-800 dark:text-gray-300">
              I'm always open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-4">
              <ContactItem icon={<FiMail />} text="ralphrotich@gmail.com" link="mailto:ralphrotich@gmail.com" />
              <ContactItem icon={<FiGithub />} text="Brian-Rotich20" link="https://github.com/Brian-Rotich20" />
              <ContactItem icon={<FiLinkedin />} text="Brian Rotich" link="https://linkedin.com/in/brian-rotich-11150a2a9" />
              <ContactItem icon={<FiTwitter />} text="@rotichbrayoo" link="https://x.com/rotichbrayoo" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"
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

// Reusable component for contact items
const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-4">
    <span className="text-[#FFD700] text-xl">{icon}</span>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 dark:text-gray-300 hover:text-[#FFD700] transition-colors"
    >
      {text}
    </a>
  </div>
);

// Reusable component for form inputs
const FormField = ({ label, name, type, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-100">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"
    />
  </div>
);
