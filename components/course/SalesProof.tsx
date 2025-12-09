'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, ShoppingCart, Users, CheckCircle, Award } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function SalesProof() {
  const t = useTranslations('course.salesProof');
  const locale = useLocale();
  const proofItems = [
    {
      merchant: 'تاجر ناجح - مبيعات حقيقية',
      revenue: '209k',
      period: 'في 30 يوم',
      roas: '4.2x',
      screenshot: '/screenshot1.jpeg',
      color: 'from-primary-500 to-primary-600'
    },
    {
      merchant: 'متجر إلكتروني - نتائج موثقة',
      revenue: '12.7m',
      period: 'في 45 يوم',
      roas: '5.8x',
      screenshot: '/screenshot2.jpeg',
      color: 'from-vmedia-500 to-vmedia-600'
    },
    {
      merchant: 'تاجر على Vondera',
      revenue: '474k',
      period: 'في شهرين',
      roas: '6.3x',
      screenshot: '/screenshot3.jpeg',
      color: 'from-primary-500 to-vmedia-500'
    },
    {
      merchant: 'مبيعات موثقة',
      revenue: '924k',
      period: 'في 3 أسابيع',
      roas: '3.9x',
      screenshot: '/screenshot4.jpeg',
      color: 'from-vmedia-500 to-primary-600'
    }
  ];

  const stats = [
    {
      icon: DollarSign,
      value: '1.2 مليار+',
      label: 'إجمالي المبيعات',
      color: 'text-green-500'
    },
    {
      icon: Users,
      value: '15,000+',
      label: 'تاجر ناجح',
      color: 'text-blue-500'
    },
    {
      icon: ShoppingCart,
      value: '500,000+',
      label: 'طلب شهريًا',
      color: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      value: '4.8x',
      label: 'متوسط ROAS',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-2 rounded-full font-bold mb-6">
            <Award size={20} />
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-vmedia-500">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={stat.color} size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        {/* Proof Screenshots Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 overflow-hidden">
                {/* Real Screenshot */}
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-900">
                  <img
                    src={item.screenshot}
                    alt={item.merchant}
                    className="w-full h-full object-cover"
                  />

                  {/* ROAS Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-vmedia-500" size={16} />
                      <span className="font-bold text-gray-900">ROAS: {item.roas}</span>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 left-4 bg-vmedia-500 rounded-full px-3 py-1 shadow-lg flex items-center gap-1">
                    <CheckCircle className="text-white" size={14} />
                    <span className="text-white text-xs font-bold">موثق</span>
                  </div>

                  {/* Revenue Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{item.revenue}</div>
                    <div className="text-sm text-gray-600">{item.period}</div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.merchant}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-vmedia-600">
                      <DollarSign size={16} />
                      <span className="font-bold">{item.revenue}</span>
                    </div>
                    <div className="text-gray-500">{item.period}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-vmedia-500 via-vmedia-600 to-primary-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10 text-center text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-bold mb-6">
                إنجاز تاريخي 🎉
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                1.2 مليار جنيه
              </h3>
              <p className="text-2xl md:text-3xl mb-8">
                إجمالي مبيعات التجار اللي استخدموا Vondera والكورس
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">15,000+</div>
                  <div className="text-white/80">تاجر ناجح</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-white/80">طلب شهريًا</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-white/80">معدل نجاح</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-6">💬</div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
              "كنت مبتدئ تمامًا وخايف أجرب. بعد الكورس، عملت أول حملة وحققت 80 ألف جنيه مبيعات في أول شهر!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                👨‍💼
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900 text-xl">عمر محمد</div>
                <div className="text-gray-600">ميديا بايير ناجح</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
