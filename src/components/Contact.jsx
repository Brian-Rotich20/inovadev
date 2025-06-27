'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn } from '@/lib/animations';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiDownload, FiCopy, FiCheck, FiPhone } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ralphrotich@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const downloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf';
    link.download = 'Brian_Rotich_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container py-16">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiMail className="text-[#FFD700] text-lg" />
                <span className="text-gray-700 dark:text-gray-300">ralphrotich@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <FiCheck className="text-green-500 text-sm" />
                  ) : (
                    <FiCopy className="text-gray-500 dark:text-gray-400 text-sm" />
                  )}
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
             <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-2 md:space-x-6">
      <a href="tel:+254720060728" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
        <FiPhone size={20} />
        <span className="text-sm font-medium">+254720060728</span>
      </a>
      <a href="https://wa.me/254720060728" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-500 hover:text-green-600">
        <SiWhatsapp size={20} />
        <span className="text-sm font-medium">WhatsApp</span>
      </a>
    </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Follow Me
            </h3>
            <div className="flex justify-center space-x-6">
              <SocialLink icon={<FiGithub />} link="https://github.com/Brian-Rotich20" label="GitHub" />
              <SocialLink icon={<FiLinkedin />} link="https://linkedin.com/in/brian-rotich-11150a2a9" label="LinkedIn" />
              <SocialLink icon={<FiTwitter />} link="https://x.com/rotichbrayoo" label="Twitter" />
            </div>
          </motion.div>

          {/* Download CV */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Get My Resume
            </h3>
            <button
              onClick={downloadCV}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#FFD700] text-gray-900 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <FiDownload className="text-lg" />
              <span>Download CV</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Brian Rotich. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#about" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Projects
              </a>
              <a 
                href="#techstack" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Techstacks
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Reusable component for social links
const SocialLink = ({ icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-[#FFD700] hover:border-[#FFD700] transition-all duration-300 transform hover:scale-110"
    title={label}
  >
    <span className="text-xl">{icon}</span>
  </a>
);