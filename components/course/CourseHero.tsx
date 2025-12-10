'use client';

import { motion } from 'framer-motion';
import { Star, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { useTranslations, useLocale } from 'next-intl';

export default function CourseHero() {
  const t = useTranslations('course.hero');
  const locale = useLocale();
  
  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdet6LOSWvwKWwBfpjcGM0jRx3Cjg8S6U_Kd4h1u9p7HMX6Uw/viewform', '_blank');
  };

  return (
    <>
      {/* Hero Content Section - White Background */}
      <section className="relative bg-white overflow-hidden py-8 md:py-12" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Social Proof - Stars and Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Avatar Group */}
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold">M</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-white flex items-center justify-center text-white font-bold">A</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white flex items-center justify-center text-white font-bold">S</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-white flex items-center justify-center text-white font-bold">K</div>
              </div>

              {/* Review Count */}
              <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                <div className="text-sm font-bold text-gray-900">{t('reviews')}</div>
                <div className="text-xs text-gray-600">{t('students')}</div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2"
            >
              <span className="text-gray-900">{t('headline1')} </span>
              <span className="text-primary-500">
                {t('headline2')}
              </span>
              <span className="text-gray-900"> {t('headline3')} </span>
              <span className="text-primary-500">
                {t('headline4')}
              </span>
              <span className="text-gray-900">…</span>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl text-gray-700">
                {t('subheadline')}
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-10 leading-relaxed max-w-4xl mx-auto px-2"
            >
              {t('description')}
            </motion.p>

            {/* Yellow CTA Button - FREE */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={handleCTAClick}
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black text-lg md:text-xl lg:text-2xl font-bold px-6 md:px-12 py-4 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6 md:mb-8"
            >
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <Zap className="w-5 h-5 md:w-7 md:h-7" />
                <span>{t('ctaButton')}</span>
                <span className="hidden sm:inline line-through opacity-75 text-sm md:text-lg">{t('priceStrike')}</span>
              </div>
            </motion.button>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-center px-4"
            >
              <CountdownTimer size="lg" />
            </motion.div>

            {/* Course Schedule Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8 max-w-2xl mx-auto space-y-3"
            >
              <div className="bg-gradient-to-r from-primary-50 to-vmedia-50 border-2 border-primary-200 rounded-xl p-4">
                <p className="text-gray-900 font-bold text-base md:text-lg">{t('courseStart')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
                  <p className="text-gray-800 font-semibold text-sm md:text-base">{t('courseDuration')}</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
                  <p className="text-gray-800 font-semibold text-sm md:text-base">{t('courseFormat')}</p>
                </div>
              </div>
            </motion.div>

            {/* Instructor Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8 max-w-2xl mx-auto space-y-3"
            >
              <div className="bg-gradient-to-r from-primary-50 to-vmedia-50 border-2 border-primary-200 rounded-xl p-4">
                <p className="text-gray-900 font-bold text-base md:text-lg">{t('courseStart')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
                  <p className="text-gray-800 font-semibold text-sm md:text-base">{t('courseDuration')}</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
                  <p className="text-gray-800 font-semibold text-sm md:text-base">{t('courseFormat')}</p>
                </div>
              </div>
            </motion.div>

            {/* Instructor Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 inline-block bg-gray-100 border border-gray-200 rounded-2xl px-6 py-3"
            >
              <p className="text-gray-700 text-sm">
                {t('instructor')} <span className="text-gray-900 font-bold">{t('instructorName')}</span> - {t('instructorTitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Video Player Section - Responsive */}
      <section className="relative w-full bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* Desktop: 16:9 aspect ratio, Mobile: Vertical reels style (9:16) */}
          <div className="relative w-full md:hidden" style={{ paddingTop: '177.78%' }}>
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/course image.jpg"
              controlsList="nodownload"
              style={{ objectFit: 'cover' }}
            >
              <source src="/course.mp4" type="video/mp4" />
              المتصفح لا يدعم عرض الفيديو
            </video>
          </div>
          
          {/* Desktop view: 16:9 aspect ratio */}
          <div className="relative w-full hidden md:block" style={{ paddingTop: '56.25%' }}>
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/course image.jpg"
              controlsList="nodownload"
              style={{ objectFit: 'contain' }}
            >
              <source src="/course.mp4" type="video/mp4" />
              المتصفح لا يدعم عرض الفيديو
            </video>
          </div>
        </motion.div>
      </section>
    </>
  );
}
