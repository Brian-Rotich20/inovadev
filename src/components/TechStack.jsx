// components/TechStack.jsx
'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaPhp, FaWordpress, FaGit, FaGithub, FaBootstrap 
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiDjango } from 'react-icons/si';

export default function TechStack() {
  const frontend = [
    { icon: <FaHtml5 size={40} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={40} />, name: 'CSS3' },
    { icon: <FaJs size={40} />, name: 'JavaScript' },
    { icon: <FaReact size={40} />, name: 'React' },
    { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
    { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
    { icon: <FaBootstrap size={40} />, name: 'Bootstrap' },
  ];

  const backend = [
    { icon: <FaNodeJs size={40} />, name: 'Node.js' },
    { icon: <FaPython size={40} />, name: 'Python' },
    { icon: <SiDjango size={40} />, name: 'Django' },
    { icon: <FaPhp size={40} />, name: 'PHP' },
    { icon: <FaWordpress size={40} />, name: 'WordPress' },
    { icon: <FaGit size={40} />, name: 'Git' },
    { icon: <FaGithub size={40} />, name: 'GitHub' },
  ];

  return (
    <section id="techstack" className="py-20">
      <div className="section-container">
        <SectionHeader title="Tech Stack" />
        
        <div className="space-y-16">
          {/* Frontend */}
          <div>
            <motion.h3
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8"
            >
              Frontend
            </motion.h3>
            
            <motion.div
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8"
            >
              {frontend.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', index * 0.1)}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="text-[#FFD700] mb-2">{tech.icon}</div>
                  <p className="text-center">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Backend */}
          <div>
            <motion.h3
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8"
            >
              Backend
            </motion.h3>
            
            <motion.div
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8"
            >
              {backend.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', index * 0.1)}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="text-[#FFD700] mb-2">{tech.icon}</div>
                  <p className="text-center">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}