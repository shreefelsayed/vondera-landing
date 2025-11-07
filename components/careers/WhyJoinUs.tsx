'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Heart, Code, Lightbulb } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function WhyJoinUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'High Growth',
      description: 'Join a fast-growing startup backed by top investors, serving 10,000+ merchants',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Work with talented people from diverse backgrounds who are passionate about e-commerce',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Globe,
      title: 'Regional Impact',
      description: 'Make a real difference in transforming e-commerce across the MENA region',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote options, and unlimited PTO to keep you energized',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Code,
      title: 'Latest Tech',
      description: 'Work with cutting-edge technology stack including Next.js, React, Node.js, and more',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Your ideas matter. We encourage experimentation and creative problem-solving',
      color: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Join
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Vondera?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building something special. Join us and be part of the e-commerce revolution in MENA.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6`}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
