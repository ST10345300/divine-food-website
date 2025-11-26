import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { GlassButton } from './GlassButton';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#f6efe9]" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="glass-dark rounded-2xl p-8 md:p-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white mb-4 text-shadow-soft text-5xl md:text-6xl lg:text-7xl"
          >
            Fresh. Artisanal. Divine.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Handmade meals using locally sourced ingredients.
            Experience the taste of quality and care in every bite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlassButton
              variant="primary"
              onClick={() => navigate('/menu')}
            >
              Explore Menu
            </GlassButton>
            <GlassButton
              variant="secondary"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </GlassButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
