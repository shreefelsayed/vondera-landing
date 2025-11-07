'use client';

import { motion } from 'framer-motion';
import { Heart, Palmtree, GraduationCap, Home, Utensils, Dumbbell, Package, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Palmtree,
      title: 'Unlimited PTO',
      description: 'Take time off when you need it. We trust you to manage your time',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: GraduationCap,
      title: 'Learning Budget',
      description: '$2,000/year for courses, conferences, and books to grow your skills',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Home,
      title: 'Remote Friendly',
      description: 'Work from anywhere with flexible hours and home office stipend',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Utensils,
      title: 'Meals & Snacks',
      description: 'Free lunch daily and stocked kitchen with healthy snacks',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Dumbbell,
      title: 'Gym Membership',
      description: 'Stay healthy with our gym membership reimbursement program',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Package,
      title: 'Latest Equipment',
      description: 'MacBook Pro, monitors, and any tools you need to do your best work',
      color: 'from-gray-500 to-slate-600',
    },
    {
      icon: TrendingUp,
      title: 'Stock Options',
      description: 'Own a piece of Vondera and benefit from our growth',
      color: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perks &{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team because your success is our success
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h3>
          <p className="text-xl mb-8 text-white/90">
            Start your journey with Vondera today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All Open Positions
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
