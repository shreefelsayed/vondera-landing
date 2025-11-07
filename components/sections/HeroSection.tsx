'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Apple, Smartphone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');
  const isRTL = locale === 'ar';

  const stats = [
    { label: t('stats.stores'), value: '10,000+' },
    { label: t('stats.uptime'), value: '99.9%' },
    { label: t('stats.support'), value: '24/7' },
  ];

  return (
    <section
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="vmedia" className="mb-6">
              {t('subtitle')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" className="group">
                {tCommon('startFreeTrial')}
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play size={20} className="mr-2" />
                {tCommon('watchDemo')}
              </Button>
            </div>

            {/* App Download Buttons */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-4 font-medium">{tCommon('downloadApp')}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <Apple size={28} />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <Smartphone size={28} />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Desktop Dashboard Mockup */}
              <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-200 bg-white">
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gradient-to-br from-primary-500 to-secondary-600 h-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-4">V</div>
                    <div className="text-xl">Dashboard Preview</div>
                  </div>
                </div>
              </div>

              {/* Mobile App Mockup - Floating */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 lg:-left-12 w-48 md:w-56 rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-white z-20"
              >
                <div className="bg-gradient-to-br from-vmedia-500 to-primary-600 h-96 flex flex-col items-center justify-center p-6">
                  <Smartphone size={48} className="text-white mb-4" />
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">Vondera</div>
                    <div className="text-sm">Mobile App</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - 4.5★ Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.5</div>
                    <div className="text-xs text-gray-600">50K+ downloads</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
