'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Star, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function MediaBuyerSpotlight() {
  const locale = useLocale();
  const t = useTranslations('mediaBuyerSpotlight');
  const isRTL = locale === 'ar';

  const benefits = [
    { icon: Users, text: t('benefits.access') },
    { icon: TrendingUp, text: t('benefits.compete') },
    { icon: DollarSign, text: t('benefits.rates') },
    { icon: Award, text: t('benefits.earnings') },
    { icon: Star, text: t('benefits.reputation') },
    { icon: Briefcase, text: t('benefits.portfolio') },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-vmedia-50 via-white to-primary-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="vmedia" className="mb-4">
              VMedia Marketplace
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-vmedia-100 rounded-lg flex items-center justify-center">
                    <benefit.icon size={20} className="text-vmedia-600" />
                  </div>
                  <p className="text-gray-700 flex-1">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="vmedia" size="lg" className="group">
              {t('cta')}
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>

          {/* Right Content - Stats & Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Card - VMedia Dashboard */}
              <Card className="mb-6 bg-gradient-to-br from-vmedia-500 to-vmedia-600 border-none text-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm opacity-90 mb-1">Total Media Buyers</div>
                      <div className="text-4xl font-bold">500+</div>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Users size={32} />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <TrendingUp size={16} />
                    <span>+28% this month</span>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card hover={true}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Briefcase size={20} className="text-primary-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">2,500+</div>
                    <div className="text-sm text-gray-600">{t('stats.services')}</div>
                  </CardContent>
                </Card>

                <Card hover={true}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                        <Star size={20} className="text-secondary-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-vmedia-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-vmedia-100 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-vmedia-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Top Earner</div>
                    <div className="text-lg font-bold text-gray-900">$15K/mo</div>
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
