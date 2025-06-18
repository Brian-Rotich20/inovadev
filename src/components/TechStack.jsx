'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaPhp, FaWordpress, FaGit, FaGithub, FaBootstrap 
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiDjango, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si';

export default function TechStack() {
  const frontend = [
    { icon: <FaHtml5 size={40} className="text-[#E44D26]" />, name: 'HTML5' },
    { icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, name: 'CSS3' },
    { icon: <FaJs size={40} className="text-[#F7DF1E]" />, name: 'JavaScript' },
    { icon: <FaReact size={40} className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiNextdotjs size={40} className="text-black dark:text-white" />, name: 'Next.js' },
    { icon: <SiTailwindcss size={40} className="text-[#38B2AC]" />, name: 'Tailwind CSS' },
    { icon: <FaBootstrap size={40} className="text-[#7952B3]" />, name: 'Bootstrap' },
  ];

  const backend = [
    { icon: <FaNodeJs size={40} className="text-[#339933]" />, name: 'Node.js' },
    { icon: <FaPython size={40} className="text-[#3776AB]" />, name: 'Python' },
    { icon: <SiDjango size={40} className="text-[#092E20]" />, name: 'Django' },
    { icon: <FaPhp size={40} className="text-[#777BB4]" />, name: 'PHP' },
    { icon: <FaGit size={40} className="text-[#F05032]" />, name: 'Git' },
    { icon: <FaGithub size={40} className="text-black dark:text-white" />, name: 'GitHub' },
  ];
 const database = [
  { icon: <SiMysql size={40} className="text-[#4479A1]" />, name: 'MySQL' },
  { icon: <SiPostgresql size={40} className="text-[#336791]" />, name: 'PostgreSQL' },
  { icon: <SiMongodb size={40} className="text-[#47A248]" />, name: 'MongoDB' },
  { icon: <SiFirebase size={40} className="text-[#FFCA28]" />, name: 'Firebase' },
];
  const tools = [
    { icon: <FaGithub size={40} className="text-black dark:text-white" />, name: 'GitHub' },
    { icon: <SiPostman size={40} className="text-[#FF6C37]" />, name: 'Postman' },
    { icon: <FaWordpress size={40} className="text-[#21759B]" />, name: 'WordPress' },
  ];
return (
  <section id="techstack" className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
    <div className="section-container">
      <SectionHeader title="Tech Stack" />

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Frontend
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {frontend.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 min-h-[70px] flex flex-col items-center justify-center"
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="mb-1 text-xl">
                  {tech.icon}
                </div>
                <p className="text-center text-xs font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Backend
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {backend.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 min-h-[70px] flex flex-col items-center justify-center"
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="mb-1 text-xl">
                  {tech.icon}
                </div>
                <p className="text-center text-xs font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Databases */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Databases
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {database.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 min-h-[70px] flex flex-col items-center justify-center"
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="mb-1 text-xl">
                  {tech.icon}
                </div>
                <p className="text-center text-xs font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Tools
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {tools.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 min-h-[70px] flex flex-col items-center justify-center"
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="mb-1 text-xl">
                  {tech.icon}
                </div>
                <p className="text-center text-xs font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  </section>
);
}