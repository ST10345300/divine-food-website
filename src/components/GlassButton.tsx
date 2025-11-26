import React from 'react';
import { motion } from 'motion/react';

type GlassButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export function GlassButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: GlassButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#3b2f2f] text-white hover:bg-[#4a3c3c] shadow-lg',
    secondary: 'glass-card text-[#3b2f2f] hover:shadow-xl',
    outline: 'glass border-2 border-[#3b2f2f] text-[#3b2f2f] hover:bg-[#3b2f2f] hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
