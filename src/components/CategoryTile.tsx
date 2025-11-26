import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

type CategoryTileProps = {
  name: string;
  image: string;
  count: number;
};

export function CategoryTile({ name, image, count }: CategoryTileProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate(`/menu?category=${name.toLowerCase()}`)}
      className="cursor-pointer relative h-64 rounded-xl overflow-hidden glass-card group"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b2f2f]/80 via-[#3b2f2f]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="mb-1 capitalize text-2xl">{name}</h3>
        <p className="text-white/80 text-sm">{count} {count === 1 ? 'item' : 'items'}</p>
      </div>
    </motion.div>
  );
}
