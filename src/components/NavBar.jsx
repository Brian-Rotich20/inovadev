// components/NavBar.jsx 
'use client'; 
 
import Link from 'next/link'; 
import { motion } from 'framer-motion'; 
import { FiHome, FiUser, FiBriefcase, FiCode, FiFolder, FiMail } from 'react-icons/fi'; 
import { useState, useEffect } from 'react'; 
 
export default function NavBar() { 
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [ 
    { id: 'hero', icon: <FiHome size={15} />, label: 'Home' }, 
    { id: 'about', icon: <FiUser size={15} />, label: 'About' }, 
    { id: 'experience', icon: <FiBriefcase size={15} />, label: 'Experience' }, 
    { id: 'techstack', icon: <FiCode size={15} />, label: 'Tech Stack' }, 
    { id: 'projects', icon: <FiFolder size={15} />, label: 'Projects' }, 
    { id: 'contact', icon: <FiMail size={15} />, label: 'Contact' }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 
 
  return ( 
    <motion.nav 
      initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }} 
      className="
        /* Mobile: Bottom navigation */
        fixed bottom-4 left-8 right-8 z-50 
        h-16 w-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg
        shadow-2xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50
        /* Desktop: Side navigation */
        md:top-8 md:left-4 md:bottom-auto md:right-auto 
        md:h-auto md:w-16 md:rounded-3xl md:py-6
      " 
    > 
      <ul className="
        /* Mobile: Horizontal layout */
        flex flex-row justify-center items-center h-full px-2
        /* Desktop: Vertical layout */
        md:flex-col md:justify-start md:items-center md:space-y-3 md:px-0
      "> 
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          
          return (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            > 
              <Link 
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`
                  nav-item relative flex flex-col items-center justify-center 
                  p-3 rounded-2xl transition-all duration-300 group
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-[#FFD700] to-[#FFA500] shadow-lg scale-110' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-[#FFD700] hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }
                  /* Mobile adjustments */
                  md:p-4
                `} 
                aria-label={`Navigate to ${item.label} section`} 
              > 
                <span className={`
                  transition-transform duration-300 
                  ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                `}>
                  {item.icon}
                </span>
                
                {/* Active indicator dot for mobile */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 w-1 h-1 bg-white rounded-full md:hidden"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Tooltip for desktop */}
                <div className="
                  absolute left-full ml-4 px-3 py-2 
                  bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 whitespace-nowrap z-10
                  hidden md:block
                ">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
                </div>
              </Link> 
            </motion.li>
          );
        })} 
      </ul> 
    </motion.nav> 
  ); 
}