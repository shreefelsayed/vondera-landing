'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Package, BarChart3, Users, MessageSquare, Zap } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: ShoppingCart,
      title: 'Orders',
      description: 'Manage orders with ease',
      features: ['Real-time order tracking', 'Bulk order processing', 'Automated fulfillment', 'Custom statuses'],
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 1,
      icon: Package,
      title: 'Inventory',
      description: 'Smart stock management',
      features: ['Multi-warehouse support', 'Low stock alerts', 'Batch tracking', 'Auto-reordering'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 2,
      icon: BarChart3,
      title: 'Analytics',
      description: 'AI-powered insights',
      features: ['Sales forecasting', 'Customer behavior', 'Revenue reports', 'Custom dashboards'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 3,
      icon: Users,
      title: 'Customers',
      description: 'Build relationships',
      features: ['Customer profiles', 'Segmentation', 'Loyalty programs', 'Email campaigns'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 4,
      icon: MessageSquare,
      title: 'Chat',
      description: 'Instant support',
      features: ['Live chat widget', 'AI chatbots', 'Team inbox', 'Chat analytics'],
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 5,
      icon: Zap,
      title: 'Marketing',
      description: 'Grow your business',
      features: ['Email automation', 'SMS campaigns', 'Social media tools', 'Discount codes'],
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                All in One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our powerful features designed to streamline your e-commerce operations
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={20} />
                <span>{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Features List */}
              <div>
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tabs[activeTab].color} flex items-center justify-center mb-4`}>
                    {(() => {
                      const Icon = tabs[activeTab].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{tabs[activeTab].title}</h3>
                  <p className="text-lg text-gray-600">{tabs[activeTab].description}</p>
                </div>

                <div className="space-y-4">
                  {tabs[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${tabs[activeTab].color} flex items-center justify-center flex-shrink-0 mt-1`}>
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                >
                  Explore {tabs[activeTab].title}
                </motion.button>
              </div>

              {/* Right - Demo Preview */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-gray-400">
                      app.vondera.com/{tabs[activeTab].title.toLowerCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`bg-gradient-to-br ${tabs[activeTab].color} p-8 h-96 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      {(() => {
                        const Icon = tabs[activeTab].icon;
                        return <Icon size={80} className="mx-auto mb-4 opacity-50" />;
                      })()}
                      <div className="text-2xl font-bold mb-2">{tabs[activeTab].title} Dashboard</div>
                      <div className="text-sm opacity-80">Interactive demo coming soon</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tabs[activeTab].color} flex items-center justify-center`}>
                      {(() => {
                        const Icon = tabs[activeTab].icon;
                        return <Icon size={24} className="text-white" />;
                      })()}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Active Users</div>
                      <div className="text-2xl font-bold text-gray-900">2,847</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
