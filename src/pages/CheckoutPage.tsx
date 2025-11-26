import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { useCartStore } from '../store/cartStore';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, total, clear } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    deliveryMethod: 'pickup',
    notes: '',
  });

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27620710311';
    
    let message = `Hello Divine Food 👋\nI would like to place an order:\n\n`;
    
    items.forEach(item => {
      message += `• ${item.name} x${item.quantity} – R${item.price * item.quantity}\n`;
    });
    
    message += `\nTotal: R${total()}\n\n`;
    message += `Name: ${formData.name}\n`;
    message += `Delivery/Pickup: ${formData.deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}\n`;
    
    if (formData.notes) {
      message += `Notes: ${formData.notes}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    // Clear cart and redirect
    clear();
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[#3b2f2f] mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <GlassCard>
              <h2 className="text-[#3b2f2f] mb-6">Your Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#3b2f2f] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b7a4f] text-[#3b2f2f]"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Delivery Method */}
                <div>
                  <label className="block text-[#3b2f2f] mb-3">
                    Order Method *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                      className={`px-4 py-3 rounded-lg transition-all ${
                        formData.deliveryMethod === 'pickup'
                          ? 'bg-[#3b2f2f] text-white'
                          : 'glass-card text-[#3b2f2f]'
                      }`}
                    >
                      Pickup
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryMethod: 'delivery' })}
                      className={`px-4 py-3 rounded-lg transition-all ${
                        formData.deliveryMethod === 'delivery'
                          ? 'bg-[#3b2f2f] text-white'
                          : 'glass-card text-[#3b2f2f]'
                      }`}
                    >
                      Delivery
                    </button>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-[#3b2f2f] mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b7a4f] text-[#3b2f2f] resize-none"
                    placeholder="Any special requests? (e.g., extra cheese, allergies)"
                  />
                </div>

                {/* Submit Button */}
                <GlassButton
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Order via WhatsApp
                </GlassButton>
              </form>
            </GlassCard>

            {/* Order Summary */}
            <div className="space-y-6">
              <GlassCard>
                <h2 className="text-[#3b2f2f] mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-[#3b2f2f]">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-[#3b2f2f]">
                        R{item.price * item.quantity}
                      </p>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="text-[#3b2f2f] text-xl">Total</span>
                      <span className="text-[#3b2f2f] text-2xl">
                        R{total()}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="bg-blue-50/50">
                <div className="flex gap-3">
                  <MessageCircle className="w-6 h-6 text-[#6b7a4f] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#3b2f2f] mb-2">WhatsApp Checkout</h3>
                    <p className="text-sm text-gray-600">
                      When you click "Send Order", you'll be redirected to WhatsApp to confirm 
                      your order with us. We'll respond with payment details and delivery/pickup information.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
