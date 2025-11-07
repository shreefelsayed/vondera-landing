'use client';

import { motion } from 'framer-motion';
import { CreditCard, Truck, Share2, Megaphone, Plug, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function IntegrationSection() {
  const categories = [
    {
      name: 'Payment Gateways',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-600',
      integrations: ['VPay', 'PayPal', 'Stripe', 'Fawry', 'Paymob', 'Tap Payments'],
    },
    {
      name: 'Shipping',
      icon: Truck,
      color: 'from-blue-500 to-cyan-600',
      integrations: ['Aramex', 'DHL', 'FedEx', 'Bosta', 'Smsa', 'UPS'],
    },
    {
      name: 'Social Media',
      icon: Share2,
      color: 'from-pink-500 to-rose-600',
      integrations: ['Facebook', 'Instagram', 'WhatsApp', 'TikTok', 'Snapchat', 'Twitter'],
    },
    {
      name: 'Marketing',
      icon: Megaphone,
      color: 'from-orange-500 to-amber-600',
      integrations: ['Mailchimp', 'SendGrid', 'Google Ads', 'Facebook Ads', 'SMS Gateway', 'Push'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              50+ Powerful
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and scale your business seamlessly
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {category.integrations.map((integration, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {integration}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer">
            <Plug size={24} />
            <span className="font-semibold text-lg">REST API Available</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-gray-600 mt-4">Build custom integrations with our developer-friendly API</p>
        </motion.div>
      </Container>
    </section>
  );
}
