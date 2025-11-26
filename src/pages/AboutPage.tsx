import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Heart, Leaf, Users } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish is crafted with passion and care, ensuring the highest quality in every bite.',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We source locally and sustainably, supporting our community and the environment.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building relationships, not just transactions. You\'re family here.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#3b2f2f] mb-6">About Divine Food</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to Divine Food, where every meal tells a story of tradition, 
            quality, and love. We're more than just a food service – we're a celebration 
            of flavors, craftsmanship, and the joy of sharing good food with good people.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlassCard className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[#3b2f2f] mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Divine Food was born from a simple belief: that food should be made with 
                the same care and attention you'd give to feeding your own family. 
              </p>
              <p className="text-gray-600 mb-4">
                What started as a passion for creating wholesome, delicious meals has grown 
                into a mission to bring artisanal, handcrafted food to every table. We combine 
                traditional cooking methods with fresh, locally-sourced ingredients to create 
                dishes that nourish both body and soul.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve our community with meals that are made fresh daily, 
                using recipes that have been perfected over time, always with a commitment to 
                quality, sustainability, and exceptional taste.
              </p>
            </div>
            <div 
              className="h-96 rounded-xl bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800)',
              }}
            />
          </GlassCard>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-[#3b2f2f] mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full" hover>
                  <div className="w-16 h-16 bg-[#6b7a4f]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#6b7a4f]" />
                  </div>
                  <h3 className="text-[#3b2f2f] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="bg-[#f6efe9]/70 text-center">
            <h2 className="text-[#3b2f2f] mb-4">Our Philosophy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg italic">
              "Food is not just fuel. It's information. It's connection. It's love. 
              At Divine Food, we pour our hearts into every dish, creating more than 
              just meals – we create experiences that bring people together."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
