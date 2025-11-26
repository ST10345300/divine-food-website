import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';

export function ContactPage() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27123456789';

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: whatsappNumber,
      action: `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
      actionText: 'Chat Now',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@divinefood.co.za',
      action: 'mailto:hello@divinefood.co.za',
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Cape Town, South Africa',
      action: null,
      actionText: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Sat: 9am - 8pm\nSunday: 10am - 6pm',
      action: null,
      actionText: null,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#3b2f2f] mb-6">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our menu, want to place a special order, or just want to say hi? 
            We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full" hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6b7a4f]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#6b7a4f]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#3b2f2f] mb-2">{info.title}</h3>
                    <p className="text-gray-600 mb-4 whitespace-pre-line">
                      {info.content}
                    </p>
                    {info.action && (
                      <a
                        href={info.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6b7a4f] hover:underline inline-block"
                      >
                        {info.actionText} →
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="bg-[#6b7a4f]/10 text-center">
            <MessageCircle className="w-16 h-16 text-[#6b7a4f] mx-auto mb-4" />
            <h2 className="text-[#3b2f2f] mb-4">Fastest Way to Reach Us</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For immediate assistance or to place an order, send us a message on WhatsApp. 
              We typically respond within minutes during business hours.
            </p>
            <GlassButton
              variant="primary"
              onClick={() => window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`, '_blank')}
              className="mx-auto"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Chat on WhatsApp
            </GlassButton>
          </GlassCard>
        </motion.div>

        {/* Map Section (Optional - Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="p-0 overflow-hidden">
            <div 
              className="w-full h-96 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1576096155624-c6c0ead9441a?w=1200)',
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
                <p className="text-white text-lg">📍 Cape Town, South Africa</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
