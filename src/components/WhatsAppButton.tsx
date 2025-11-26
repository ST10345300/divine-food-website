import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

type WhatsAppButtonProps = {
  message?: string;
  className?: string;
  children?: React.ReactNode;
};

export function WhatsAppButton({ 
  message = '', 
  className = '',
  children = 'Chat on WhatsApp'
}: WhatsAppButtonProps) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27123456789';
  
  const handleClick = () => {
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl transition-all shadow-lg ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{children}</span>
    </motion.button>
  );
}
