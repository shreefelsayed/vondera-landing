'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export default function TrustedBySection() {
  // Sample merchant names (replace with actual logos)
  const merchants = [
    'FashionHub', 'TechStore', 'BeautyBox', 'GadgetWorld', 'StyleMart',
    'EliteShop', 'MegaStore', 'TrendyGoods', 'PrimeDeals', 'UrbanStyle',
    'ModernLiving', 'SmartBuy', 'LuxuryLife', 'QuickShop', 'BestChoice',
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <Container>
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-2"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Join 10,000+ Successful Merchants
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* First Row - Left to Right */}
          <div className="flex mb-8">
            <motion.div
              className="flex gap-12 pr-12"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...merchants, ...merchants].map((merchant, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-40 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex items-center justify-center px-6 group-hover:border-violet-300 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-xl font-bold text-gray-400 group-hover:text-violet-600 transition-colors">
                      {merchant}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex">
            <motion.div
              className="flex gap-12 pr-12"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...merchants.reverse(), ...merchants.reverse()].map((merchant, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-40 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex items-center justify-center px-6 group-hover:border-violet-300 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-xl font-bold text-gray-400 group-hover:text-violet-600 transition-colors">
                      {merchant}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-violet-600">10K+</div>
            <div className="text-sm text-gray-600 mt-1">Active Merchants</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-violet-600">$50M+</div>
            <div className="text-sm text-gray-600 mt-1">Revenue Processed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-violet-600">15+</div>
            <div className="text-sm text-gray-600 mt-1">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-violet-600">99.9%</div>
            <div className="text-sm text-gray-600 mt-1">Uptime SLA</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
