'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="section-container">
        <SectionHeader title="About Me" />
        
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-2xl"
        >
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Hi there! I'm a full-stack developer with over 2 years of experience building 
            web applications that are both beautiful and functional. My journey in web development 
            started when I built my first website at the age of 16, and I've been hooked ever since.
          </p>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            I specialize in <span className="highlight">JavaScript</span> ecosystems, particularly 
            React and Next.js for front-end development, and Node.js or Django for back-end work. 
            I'm passionate about clean code, performance optimization, and creating intuitive user experiences.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me hiking, reading science fiction, or experimenting 
            with new technologies to stay at the cutting edge of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
