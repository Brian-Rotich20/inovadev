// components/Hero.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="hero-glow"></div>
      <div className="section-container">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <motion.div 
            variants={fadeIn('right', 0.3)}
            className="relative"
          >
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FFD700]">
              <Image
                src="/profile2.png"
                alt="Developer Profile"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.5)}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="highlight font-[--font-great-vibes] text-5xl md:text-7xl">Brian Rotich</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">Full Stack Developer</h2>
            <p className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-300">
              Passionate about creating elegant solutions to complex problems. 
              I build modern, responsive web applications with cutting-edge technologies.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors">
                <FiTwitter />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}