'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { DotPattern } from '@/components/ui/DotPattern';
import { RetroGrid } from '@/components/ui/RetroGrid';
import { cn } from '@/lib/utils';

export default function HeroSectionModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-40 pb-32"
    >
      {/* Background Effects */}
      <DotPattern className="opacity-30" />
      <RetroGrid className="opacity-20" angle={65} />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <Container>
        <motion.div style={{ y, opacity }} className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 border border-violet-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">
                Trusted by 10,000+ merchants across MENA
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Sell Online.{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Grow Faster.
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-violet-200/50 -z-0 origin-left"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              The all-in-one e-commerce platform built for MENA. Launch your store, connect with
              media buyers, and scale your business effortlessly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(124, 58, 237, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold text-lg hover:border-violet-300 hover:text-violet-600 transition-all"
              >
                Watch Demo
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-20"
            >
              {[
                { icon: Check, text: 'No credit card required' },
                { icon: Check, text: '14-day free trial' },
                { icon: Check, text: 'Cancel anytime' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-green-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Interactive Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: TrendingUp,
                  value: '+300%',
                  label: 'Average Revenue Growth',
                  color: 'from-green-500 to-emerald-600',
                  gradient: 'from-green-500/10 to-emerald-600/10',
                },
                {
                  icon: Users,
                  value: '10,000+',
                  label: 'Active Merchants',
                  color: 'from-violet-500 to-purple-600',
                  gradient: 'from-violet-500/10 to-purple-600/10',
                },
                {
                  icon: Zap,
                  value: '5 mins',
                  label: 'Setup Time',
                  color: 'from-orange-500 to-red-600',
                  gradient: 'from-orange-500/10 to-red-600/10',
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-violet-200 hover:shadow-xl transition-all"
                >
                  {/* Gradient background on hover */}
                  <div className={cn(
                    'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity',
                    stat.gradient
                  )} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={cn(
                      'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4',
                      stat.color
                    )}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Value */}
                    <div className={cn(
                      'text-3xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent',
                      stat.color
                    )}>
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={cn(
                      'absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px]',
                      stat.color
                    )}>
                      <div className="h-full w-full rounded-2xl bg-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full p-1"
        >
          <div className="w-1 h-2 bg-violet-600 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
