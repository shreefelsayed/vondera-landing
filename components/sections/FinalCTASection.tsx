'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Shield, HeadphonesIcon, CreditCard } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function FinalCTASection() {
  const benefits = [
    { icon: Zap, text: 'Setup in 5 minutes' },
    { icon: Shield, text: '14-day free trial' },
    { icon: HeadphonesIcon, text: '24/7 support' },
    { icon: CreditCard, text: 'No credit card required' },
  ];

  const features = [
    'Access to all premium features',
    'VMedia marketplace access',
    'Unlimited products & orders',
    '20+ free themes included',
    'Multi-channel selling',
    'Advanced analytics & reports',
    'Local payment gateways',
    'Arabic & RTL support',
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <Container>
        <div className="relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                  🚀 Join 10,000+ Successful Merchants
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Supercharge
                <br />
                Your E-Commerce Business?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Start selling online today with the most powerful e-commerce platform built for MENA merchants
              </p>
            </motion.div>
          </div>

          {/* Benefits Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white"
              >
                <benefit.icon size={20} />
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left - Form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Start Your Free Trial
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create your store in minutes. No technical skills required.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Ahmed Mohamed"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="ahmed@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Store Name
                      </label>
                      <input
                        type="text"
                        placeholder="My Awesome Store"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      Start Free Trial
                      <ArrowRight size={20} />
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </div>

                {/* Right - Features */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Everything you need to succeed:
                  </h4>

                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-violet-200">
                    <p className="text-sm text-gray-700 text-center">
                      <span className="font-bold text-violet-600">Special Offer:</span> Get 20% off your
                      first 3 months when you sign up today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '10,000+', label: 'Active Stores' },
                { value: '$50M+', label: 'Sales Processed' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.9/5', label: 'Customer Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-white/80 text-sm mb-4">Trusted by leading brands in MENA</p>
            <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
              {['SSL Secure', 'PCI Compliant', 'GDPR Ready', 'ISO Certified'].map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
