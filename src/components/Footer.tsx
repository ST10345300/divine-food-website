import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27123456789';

  return (
    <footer className="glass-nav mt-20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#3b2f2f]">
              &copy; {new Date().getFullYear()} Divine Food. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Fresh. Artisanal. Divine.
            </p>
          </div>
          
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover:shadow-lg transition-all text-[#3b2f2f]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
