'use client';

import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, Gift, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { useTranslations, useLocale } from 'next-intl';

export default function FinalCTA() {
  const t = useTranslations('course.finalCTA');
  const locale = useLocale();
  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdet6LOSWvwKWwBfpjcGM0jRx3Cjg8S6U_Kd4h1u9p7HMX6Uw/viewform', '_blank');
  };

  const benefits = [
    t('benefits.practical'),
    t('benefits.lessons'),
    t('benefits.pixel'),
    t('benefits.strategies'),
    t('benefits.whatsapp'),
    t('benefits.certificate'),
    t('benefits.lifetime'),
    t('benefits.qa')
  ];

  return (
    <section id="registration-form" className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-96 h-96 bg-vmedia-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Header */}
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-vmedia-400 to-vmedia-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-6"
              >
                <Gift className="animate-pulse" size={24} />
                <span>{t('badge')}</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-vmedia-400">
                  {t('titleHighlight')}
                </span>
                <br />
                {t('titleEnd')}
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                {t('subtitle')}
              </p>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <CountdownTimer size="lg" />
            </div>

            {/* Benefits List */}
            <div className="max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                <Zap className="text-yellow-400" />
                {t('benefitsTitle')}
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-right">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl"
                  >
                    <CheckCircle2 className="text-vmedia-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black text-2xl font-bold px-12 py-6 rounded-full shadow-2xl transform transition-all duration-300 inline-flex items-center gap-3"
            >
              <Rocket size={28} />
              <span>{t('ctaPrimary')}</span>
              <span className="line-through opacity-75 text-lg">{t('ctaSecondary')}</span>
            </motion.button>

            <p className="text-gray-400 mt-6 text-lg">
              {t('footer')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
