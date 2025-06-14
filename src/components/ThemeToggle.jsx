// components/ThemeToggle.jsx
'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FiSun className="text-xl" />
      ) : (
        <FiMoon className="text-xl" />
      )}
    </motion.button>
  );
}

// context/ThemeContext.jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export function useTheme() {
//   return useContext(ThemeContext);
// }