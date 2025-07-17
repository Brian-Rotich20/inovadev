'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { fadeIn } from '@/lib/animations';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="section-container">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <SectionHeader title="About Me" />
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Photo */}
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex-shrink-0 mx-auto lg:mx-0"
            >
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                  <Image
                    src="/sundaybest3.png" 
                    alt="Profile photo"
                    width={320}
                    height={320}
                    className="rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-700 transform rotate-3 hover:rotate-1 transition-transform duration-300 ease-in-out"
                    style={{
                      filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
                    }}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex-1 max-w-2xl"
            >
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                Hi!👋🏻 I'm a full-stack developer with over 2 years of experience building 
                web applications that are both beautiful and functional. I help you build software that solves real-world problems.
              </p>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                I specialize in <span className="highlight">JavaScript 🚀</span> ecosystems, particularly 
                React and Next.js for front-end development, and Node.js or Django for back-end work. 
                I'm passionate about clean code, performance optimization, and creating intuitive user experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I love working with new technologies to stay at the cutting edge of web development. When I'm not coding, you'll find me 🧑‍💻 
                hanging with friends 👯, reading articles 📖, and attending tech events 💡🎤.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}