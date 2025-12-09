'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, TrendingUp, Lightbulb, Target, Zap } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function WhoIsThisFor() {
  const t = useTranslations('course.whoIsThisFor');
  const locale = useLocale();
  const audiences = [
    {
      icon: TrendingUp,
      title: t('audiences.increasingIncome.title'),
      description: t('audiences.increasingIncome.description'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      title: t('audiences.businessOwners.title'),
      description: t('audiences.businessOwners.description'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: t('audiences.beginners.title'),
      description: t('audiences.beginners.description'),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: t('audiences.marketers.title'),
      description: t('audiences.marketers.description'),
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: t('audiences.freelancers.title'),
      description: t('audiences.freelancers.description'),
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: t('audiences.students.title'),
      description: t('audiences.students.description'),
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdet6LOSWvwKWwBfpjcGM0jRx3Cjg8S6U_Kd4h1u9p7HMX6Uw/viewform', '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full font-bold mb-6">
            {t('badge')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Audience Cards - Horizontal Scroll on Mobile */}
        <div className="mb-16">
          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-red-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${audience.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <audience.icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                  style={{ width: '300px' }}
                >
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:border-red-300 hover:shadow-2xl transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${audience.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <audience.icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {audience.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-green-500/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-green-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ضمان 100%
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ضماننا ليك
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  لو طبقت اللي في الكورس ومحققتش أي نتيجة خلال 30 يوم،
                  <br />
                  <span className="text-green-400 font-bold">هنشتغل معاك one-on-one مجانًا حتى تنجح!</span>
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  انضم للكورس دلوقتي
                </button>
                <p className="text-gray-400 mt-4">
                  مجاني تمامًا - بدون أي تكاليف خفية
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
