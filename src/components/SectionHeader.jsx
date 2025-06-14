'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

export default function SectionHeader({ title }) {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold highlight mb-4">{title}</h2>
      <div className="w-16 h-1 bg-[#FFD700]"></div>
    </motion.div>
  );
}