import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { QuantitySelector } from '../components/QuantitySelector';
import { useCartStore } from '../store/cartStore';
import products from '../data/products.json';
import { toast } from 'sonner@2.0.3';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const add = useCartStore(state => state.add);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard>
          <p className="text-gray-600">Product not found</p>
          <GlassButton onClick={() => navigate('/menu')} className="mt-4">
            Back to Menu
          </GlassButton>
        </GlassCard>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      add({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    toast.success(`${quantity} x ${product.name} added to cart!`);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#3b2f2f] mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative h-96 md:h-full min-h-[400px] rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 glass-dark text-white rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between py-4">
                <div>
                  <h1 className="text-[#3b2f2f] mb-4">{product.name}</h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className="text-[#3b2f2f] text-4xl">
                      R{product.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-[#3b2f2f] mb-3">
                      Quantity
                    </label>
                    <QuantitySelector
                      quantity={quantity}
                      onIncrease={() => setQuantity(q => q + 1)}
                      onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                    />
                  </div>

                  {/* Add to Cart Button */}
                  <GlassButton
                    variant="primary"
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart - R{product.price * quantity}
                  </GlassButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Related Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-[#3b2f2f] mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <GlassCard
                  key={relatedProduct.id}
                  className="cursor-pointer p-0 overflow-hidden"
                  hover
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[#3b2f2f] mb-2">{relatedProduct.name}</h3>
                    <p className="text-[#3b2f2f]">R{relatedProduct.price}</p>
                  </div>
                </GlassCard>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
