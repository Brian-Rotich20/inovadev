// components/Hero.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFolder } from 'react-icons/fi';
import { fadeIn, staggerContainer } from '@/lib/animations';

// Animated SVG Component for Ideas Illustration
const IdeaIllustration = () => {
  return (
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 lg:top-20 lg:right-20 opacity-30 dark:opacity-20 pointer-events-none">
      {/* Main light bulb */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-gray-800 dark:text-gray-200">
          {/* Light bulb body */}
          <ellipse
            cx="40"
            cy="32"
            rx="12"
            ry="16"
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          {/* Bulb base */}
          <rect
            x="34"
            y="46"
            width="12"
            height="8"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.7"
          />
          {/* Screw threads */}
          <line x1="34" y1="49" x2="46" y2="49" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <line x1="34" y1="51.5" x2="46" y2="51.5" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Light rays */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 left-0"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
          <line x1="29" y1="19" x2="24" y2="14" stroke="#FCD34D" strokeWidth="1.5" className="dark:stroke-yellow-300" />
          <line x1="51" y1="19" x2="56" y2="14" stroke="#FCD34D" strokeWidth="1.5" className="dark:stroke-yellow-300" />
          <line x1="21" y1="32" x2="13" y2="32" stroke="#FCD34D" strokeWidth="1.5" className="dark:stroke-yellow-300" />
          <line x1="59" y1="32" x2="67" y2="32" stroke="#FCD34D" strokeWidth="1.5" className="dark:stroke-yellow-300" />
          <line x1="29" y1="45" x2="24" y2="50" stroke="#FCD34D" strokeWidth="1.5" className="dark:stroke-yellow-300" />
          <line x1="51" y1="45" x2="56" y2="50" stroke="#FCD34D" strokeWidth="1.5" className="dark:stroke-yellow-300" />
        </svg>
      </motion.div>

      {/* Floating code elements - hidden on mobile */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1 left-4 text-blue-600 dark:text-blue-400 font-mono text-xs opacity-70 hidden sm:block"
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        className="absolute top-4 right-1 text-green-600 dark:text-green-400 font-mono text-xs opacity-70 hidden sm:block"
      >
        { }
      </motion.div>
    </div>
  );
};

// Ray.so Code Screenshot Component
const RayCodeImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <div className="relative group max-w-fit">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Ray image container */}
        <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-gray-700/30 shadow-2xl">
          <Image
            src="/rayimage2.png"
            alt="Code snippet showcase - showcasing clean, readable code structure"
            width={300}
            height={250}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            priority={false}
          />
          
          {/* Floating badge */}
          <div className="absolute -top-3 -right-3 bg-[#FFD700] text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Hey 👋🏻
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen py-4 sm:py-6 md:py-8 flex items-center relative overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="hero-glow"></div>
      
      {/* Idea Illustration */}
      <IdeaIllustration />
      

      
      <div className="section-container">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          
          {/* Mobile Layout (< 768px) */}
          <div className="block md:hidden">
            <motion.div 
              variants={fadeIn('up', 0.3)}
              className="text-center space-y-6"
            >
              {/* Profile Picture */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto">
                <Image
                  src="/profile1.png"
                  alt="Brian Rotich"
                  width={96}
                  height={96}
                  className="object-cover"
                  priority
                />
              </div>
        
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  Brian Rotich
                </h1>
                <h2 className="text-base sm:text-lg mb-4 text-gray-600 dark:text-gray-300">
                  JavaScript Ecosystem Developer
                </h2>
              </div>
              
              <p className="text-sm sm:text-base max-w-sm mx-auto text-gray-700 dark:text-gray-300 leading-relaxed px-4">
                I help you build high-performance software applications with scalable architectures 
                and secure APIs.
              </p>
            
            <div className="flex justify-center space-x-4"> {/* Social icons */}
                <a 
                  href="https://github.com/Brian-Rotich20" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icons"
                  aria-label="GitHub Profile"
                >
                  <FiGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/brian-rotich-11150a2a9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin />
                </a>
                <a 
                  href="https://x.com/rotichbrayoo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icons"
                  aria-label="Twitter Profile"
                >
                  <FiTwitter />
                </a>
              </div>
              
              {/* CTA Buttons */}
<div className="flex gap-2 w-full max-w-md mx-auto mt-6 px-4">
  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#FFD700] text-gray-900 text-xs sm:text-sm font-medium rounded-md hover:bg-yellow-500 transition shadow"
  >
    <FiMail className="text-sm sm:text-base" />
    Contact Me
  </button>
  <button 
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2 border border-[#FFD700] text-[#FFD700] text-xs sm:text-sm font-medium rounded-md hover:bg-[#FFD700] hover:text-gray-900 transition"
  >
    <FiFolder className="text-sm sm:text-base" />
    View Projects
  </button>
</div>


              
              {/* Ray Code Image */}
              <RayCodeImage />
            </motion.div>
          </div>

          {/* Tablet Layout (768px - 1023px) */}
          <div className="hidden md:block lg:hidden">
            <motion.div 
              variants={fadeIn('up', 0.3)}
              className="text-center space-y-8"
            >
              {/* Profile Picture */}
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-3 border-[#FFD700]">
                <Image
                  src="/profile1.png"
                  alt="Brian Rotich"
                  width={128}
                  height={128}
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name and Title */}
              <div>
                <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Brian Rotich
                </h1>
                <h2 className="text-xl mb-6 text-gray-600 dark:text-gray-300">
                  JavaScript Ecosystem Developer
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-base max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
                I help you build high-performance software applications with scalable architectures 
                and secure APIs. Leveraging the latest technologies and industry best practices to 
                ensure quality, performance, and security.
              </p>
              
              {/* Social Icons */}
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/Brian-Rotich20" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="GitHub Profile"
                >
                  <FiGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/brian-rotich-11150a2a9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin />
                </a>
                <a 
                  href="https://x.com/rotichbrayoo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Twitter Profile"
                >
                  <FiTwitter />
                </a>
              </div>
              
        
              {/* Ray Code Image */}
              <div className="flex justify-center">
                <RayCodeImage />
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            
            {/* Left side - Profile and Info */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              className="flex items-center gap-8"
            >
              {/* Profile Picture */}
              <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full overflow-hidden flex-shrink-0 border-3 border-[#FFD700]">
                <Image
                  src="/profile1.png"
                  alt="Brian Rotich"
                  width={112}
                  height={112}
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Info */}
              <div className="text-left">
                <h1 className="text-3xl xl:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Brian Rotich
                </h1>
                <h2 className="text-xl xl:text-2xl mb-6 text-gray-600 dark:text-gray-300">
                  JavaScript Ecosystem Developer
                </h2>
                <p className="text-base xl:text-lg max-w-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I help you build high-performance software applications with scalable architectures 
                  and secure APIs. Leveraging the latest technologies and industry best practices to 
                  ensure quality, performance, and security.
                </p>
              </div>
            </motion.div>
            
            {/* Right side - Social Icons and CTA Buttons */}
            <motion.div 
              variants={fadeIn('left', 0.5)}
              className="flex flex-col items-end gap-8"
            >
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/Brian-Rotich20" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="GitHub Profile"
                >
                  <FiGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/brian-rotich-11150a2a9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin />
                </a>
                <a 
                  href="https://x.com/rotichbrayoo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-800 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-yellow-400 transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="LinkedIn Profile"
                >
                  <FiTwitter />
                </a>
              </div>

              
              {/* Ray Code Image */}
              <RayCodeImage />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}