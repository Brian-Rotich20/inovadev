
// components/Projects.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiDjango, SiMongodb } from 'react-icons/si';
import { FaPhp, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce site with product catalog, cart, checkout, and admin dashboard.',
      image: '/project1.jpg',
      github: 'https://github.com',
      live: 'https://example.com',
      tech: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiMongodb key="mongodb" />]
    },
    {
      title: 'Inventory Management System App',
      description: 'A collaborative inventory management application with real-time updates and team features.',
      image: '/inventory.png',
      github: 'https://github.com/Brian-Rotich20/Sales-Inventory-System',
      live: 'https://example.com',
     tech: [<FaPhp key="php" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaBootstrap key="bootstrap" />]
    },
    {
      title: 'Personal Blog',
      description: 'A blog built with Django featuring dark mode, tags, categories, and a markdown editor.',
      image: '/project3.jpg',
      github: 'https://github.com',
      live: 'https://example.com',
      tech: [<SiDjango key="django" />, <SiTailwindcss key="tailwind" />]
    },
    {
      title: 'Restaurant Reservation System',
      description: 'A system for managing restaurant reservations, tables, and customer information.',
      image: '/project4.jpg',
      github: 'https://github.com',
      live: 'https://example.com',
      tech: [<FaReact key="react" />, <SiDjango key="django" />]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <SectionHeader title="Projects" />
        
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.2)}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 highlight">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex items-center mb-4 space-x-3">
                  {project.tech.map((icon, i) => (
                    <div key={i} className="text-xl text-gray-600 dark:text-gray-400">
                      {icon}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFD700] transition-colors">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFD700] transition-colors">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
