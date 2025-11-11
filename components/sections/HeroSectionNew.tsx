'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function HeroSectionNew() {
  const locale = useLocale();
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const isRTL = locale === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: Zap, color: 'text-yellow-500', delay: 0 },
    { icon: TrendingUp, color: 'text-green-500', delay: 0.2 },
    { icon: Users, color: 'text-blue-500', delay: 0.4 },
    { icon: Sparkles, color: 'text-purple-500', delay: 0.6 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 md:pt-40 pb-20 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="default" className="bg-white/80 backdrop-blur-sm border border-violet-200 text-violet-700 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                {t('subtitle')}
              </Badge>
            </motion.div>

            {/* Headline with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Supercharge
              </span>
              <br />
              Your E-commerce
              <br />
              <span className="text-gray-900">Business</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              The all-in-one platform built for MENA merchants. Scale faster, sell smarter, grow bigger.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" className="group shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40">
                {tCommon('startFreeTrial')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group border-2 border-violet-200 hover:border-violet-300 hover:bg-violet-50">
                <Play size={20} className="mr-2" />
                {tCommon('watchDemo')}
              </Button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-500 flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required • Free 14-day trial • Cancel anytime
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: 10000, suffix: '+', label: t('stats.stores'), icon: Users },
                { value: 99.9, suffix: '%', label: t('stats.uptime'), icon: TrendingUp },
                { value: 24, suffix: '/7', label: t('stats.support'), icon: Zap },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-violet-600" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {inView && <CountUp end={stat.value} duration={2.5} separator="," />}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${index === 0 ? 'top-10 left-10' : index === 1 ? 'top-20 right-10' : index === 2 ? 'bottom-20 left-20' : 'bottom-10 right-20'} w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { duration: 0.5, delay: item.delay },
                  rotate: { duration: 0.5, delay: item.delay },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.delay,
                  },
                }}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </motion.div>
            ))}

            {/* Main Dashboard Mockup */}
            <motion.div
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-gray-400">
                    dashboard.vondera.app
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 p-8 h-96">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-white">
                        <div className="text-sm opacity-80">Today's Revenue</div>
                        <div className="text-4xl font-bold mt-1">
                          {inView && <CountUp end={12450} duration={2.5} prefix="$" separator="," />}
                        </div>
                        <div className="text-sm mt-1 text-green-300">+18% from yesterday</div>
                      </div>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="grid grid-cols-7 gap-2 h-32 items-end">
                      {[40, 60, 45, 80, 55, 90, 70].map((height, i) => (
                        <motion.div
                          key={i}
                          className="bg-white/30 backdrop-blur-sm rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Order Notification */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-gray-100"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">New Order #4521</div>
                    <div className="text-sm text-gray-600">Premium Package - $299</div>
                    <div className="text-xs text-gray-400 mt-1">Just now</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Rating */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-xs text-gray-600">10K+ reviews</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
