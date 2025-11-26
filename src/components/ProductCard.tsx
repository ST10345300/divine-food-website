import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useCartStore } from '../store/cartStore';
import { toast } from 'sonner@2.0.3';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const add = useCartStore(state => state.add);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    add({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <GlassCard className="overflow-hidden p-0 cursor-pointer" hover>
      <div onClick={handleViewDetails}>
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 glass-dark text-white rounded-full text-sm capitalize">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 className="mb-2 text-[#3b2f2f]">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-[#3b2f2f] text-xl">
              R{product.price}
            </span>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewDetails}
                className="p-2 glass rounded-lg hover:shadow-lg transition-all"
                aria-label="View details"
              >
                <Eye className="w-5 h-5 text-[#3b2f2f]" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="p-2 bg-[#6b7a4f] text-white rounded-lg hover:bg-[#5a6941] transition-all shadow-lg"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
