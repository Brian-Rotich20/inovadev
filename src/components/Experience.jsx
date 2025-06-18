
// components/Experience.jsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-stack Developer',
      company: 'Inova Softwares',
      period: '2023 - present',
      description: 'Inova softwares is a leading growing company responsible for developing, maintaining softwares for their client',
    },
    {
      title: ' Web Developer',
      company: 'Facols company',
      period: '2024 - 2025',
      description: 'I was responsible for developing an e-commerce website.I act also in maintaining and updating the websites',
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
         <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
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
      </div>
    </section>
  );
}
