'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Smartphone, Bell, Package, MessageSquare, BarChart3, Users, Apple } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';

export default function MobileAppsSection() {
  const locale = useLocale();
  const t = useTranslations('mobileApps');
  const tCommon = useTranslations('common');
  const isRTL = locale === 'ar';

  const features = [
    { icon: Bell, text: t('features.notifications') },
    { icon: Package, text: t('features.inventory') },
    { icon: MessageSquare, text: t('features.chat') },
    { icon: BarChart3, text: t('features.analytics') },
    { icon: Users, text: t('features.collaboration') },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-primary-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">⭐ 4.5</div>
                  <div className="text-sm text-gray-600">{t('rating')}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">{t('downloads')}</div>
                </CardContent>
              </Card>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <Apple size={28} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <Smartphone size={28} />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <p className="text-sm text-gray-600 mt-4">{t('platforms')}</p>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative z-10 bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-gray-900">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>

                {/* Screen */}
                <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-[2.5rem] h-[600px] p-6 overflow-hidden">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-semibold">Today's Sales</div>
                      <div className="text-white text-2xl font-bold">$2,450</div>
                    </div>
                    <div className="text-white/80 text-sm">+18% from yesterday</div>
                  </div>

                  {/* Mock Chart */}
                  <div className="space-y-2">
                    {[60, 80, 45, 90, 70, 85].map((height, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-12 text-white/60 text-xs">12:{i * 2}0</div>
                        <div
                          className="bg-white/30 rounded-r-lg h-8 transition-all"
                          style={{ width: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] z-20"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Bell size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">New Order!</div>
                    <div className="text-xs text-gray-600">Order #4521 received</div>
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
