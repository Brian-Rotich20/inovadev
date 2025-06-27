'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className=" bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="section-container">
         <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
        <SectionHeader title="About Me" />
        
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-2xl"
        >
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Hi!👋🏻 I'm a full-stack developer with over 2 years of experience building 
            web applications that are both beautiful and functional. I help you building softwares that solve real-world problems.
          </p>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            I to specialise in <span className="highlight">JavaScript 🚀</span> ecosystems, particularly 
            React and Next.js for front-end development, and Node.js or Django for back-end work. 
            I'm passionate about clean code, performance optimization, and creating intuitive user experiences.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
           With new technologies to stay at the cutting edge of web development. When I'm not coding, you'll find me 🧑‍💻 
           hanging with friends 👯, reading articles 📖, and attending tech events 💡🎤.
          </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
