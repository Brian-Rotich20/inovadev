
// components/Experience.jsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead developer for multiple high-traffic web applications, mentoring junior developers, and implementing new technologies to improve performance and user experience.',
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      period: '2019 - 2022',
      description: 'Developed responsive websites and web applications for various clients using React, Next.js, and other modern web technologies.',
    },
    {
      title: 'Junior Web Developer',
      company: 'Startup Studio',
      period: '2017 - 2019',
      description: 'Collaborated with designers and backend developers to build user interfaces for startup products.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <SectionHeader title="Experience" />
        
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.2)}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold highlight">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
