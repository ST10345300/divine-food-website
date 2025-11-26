import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-[#3b2f2f] mb-4 text-6xl md:text-8xl">404</h1>
              <h2 className="text-[#3b2f2f] mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Oops! Looks like this page got lost on the way to the kitchen. 
                Let's get you back to something delicious.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton
                  variant="primary"
                  onClick={() => navigate('/')}
                  className="flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </GlassButton>
                
                <GlassButton
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </GlassButton>
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
