import React from 'react';
import { motion } from 'motion/react';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
        className={`glass-card rounded-xl p-6 ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
