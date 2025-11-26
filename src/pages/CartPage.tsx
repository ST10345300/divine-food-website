import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, ShoppingBag } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { QuantitySelector } from '../components/QuantitySelector';
import { useCartStore } from '../store/cartStore';

export function CartPage() {
  const navigate = useNavigate();
  const { items, remove, updateQty, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <GlassCard className="py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-[#3b2f2f] mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Start adding some delicious dishes to your cart!
              </p>
              <GlassButton onClick={() => navigate('/menu')}>
                Browse Menu
              </GlassButton>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[#3b2f2f] mb-8">Your Cart</h1>

          <div className="space-y-6">
            {/* Cart Items */}
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-24 object-cover rounded-lg"
                    />

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-[#3b2f2f] mb-1">{item.name}</h3>
                        <p className="text-gray-600">R{item.price}</p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex items-center gap-4">
                        <QuantitySelector
                          quantity={item.quantity}
                          onIncrease={() => updateQty(item.id, item.quantity + 1)}
                          onDecrease={() => updateQty(item.id, item.quantity - 1)}
                        />
                        
                        <div className="text-right min-w-[80px]">
                          <p className="text-[#3b2f2f]">
                            R{item.price * item.quantity}
                          </p>
                        </div>

                        <button
                          onClick={() => remove(item.id)}
                          className="p-2 glass rounded-lg hover:bg-red-50 transition-all group"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="bg-[#f6efe9]/70">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-[#3b2f2f]">R{total()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#3b2f2f] text-xl">Total</span>
                    <span className="text-[#3b2f2f] text-2xl">
                      R{total()}
                    </span>
                  </div>

                  <GlassButton
                    variant="primary"
                    onClick={() => navigate('/checkout')}
                    className="w-full"
                  >
                    Proceed to Checkout
                  </GlassButton>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
