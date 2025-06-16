// app/page.js
'use client';

import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  // Intersection Observer for navbar highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navItems.forEach((item) => {
              item.classList.remove('nav-active');
              if (item.getAttribute('href') === `#${id}`) {
                item.classList.add('nav-active');
              }
            });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="relative">
      <NavBar />
        <ThemeToggle />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
    </main>
  );
}
