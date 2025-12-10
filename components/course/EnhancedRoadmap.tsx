'use client';

import { motion } from 'framer-motion';
import {
  PlayCircle,
  ShoppingCart,
  Code,
  Target,
  Video,
  Image,
  BarChart3,
  Rocket,
  CheckCircle2,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { useTranslations, useLocale } from 'next-intl';

export default function EnhancedRoadmap() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [showAllModules, setShowAllModules] = useState(false);
  const t = useTranslations('course.roadmap');
  const locale = useLocale();

  const modules = [
    {
      number: 1,
      icon: PlayCircle,
      title: 'مقدمة الميديا باير',
      description: 'ابدأ رحلتك في عالم الميديا بايينج',
      duration: '1 ساعة',
      lessons: 5,
      color: 'from-primary-500 to-primary-600',
      content: [
        'يعني إيه Media Buyer؟',
        'الفرق بين التسويق التقليدي والإعلانات الرقمية',
        'الأدوات الأساسية اللي لازم تكون معاك قبل ما تبدأ',
        'نماذج من حملات ناجحة',
        'المصطلحات الأساسية: CPC, CPM, CTR, ROAS'
      ]
    },
    {
      number: 2,
      icon: ShoppingCart,
      title: 'اختيار المنتج واختباره',
      description: 'أهم خطوة في نجاح أي حملة',
      duration: '1 ساعة',
      lessons: 6,
      color: 'from-vmedia-500 to-vmedia-600',
      content: [
        'إزاي تختبر المنتج قبل الحملة',
        'تحليل المنافسين والمبيعات المتوقعة',
        'اختيار المنتج الصح لجمهورك',
        'مصادر المنتجات الرابحة',
        'حساب هامش الربح المتوقع',
        'متى تقرر تكمل أو توقف المنتج'
      ]
    },
    {
      number: 3,
      icon: Code,
      title: 'إعداد البيكسل وربطه بالموقع',
      description: 'الأساس التقني لأي حملة ناجحة',
      duration: '1 ساعة',
      lessons: 5,
      color: 'from-blue-500 to-blue-600',
      content: [
        'يعني إيه Pixel وليه مهم؟',
        'خطوات ربط Pixel بموقع Vondera',
        'اختبار البيكسل + تتبع الـ Conversions',
        'إعداد Custom Events',
        'حل مشاكل البيكسل الشائعة'
      ]
    },
    {
      number: 4,
      icon: Target,
      title: 'إنشاء حملات Meta',
      description: 'احترف Facebook & Instagram Ads',
      duration: '1 ساعة',
      lessons: 6,
      color: 'from-primary-500 to-primary-600',
      content: [
        'الفرق بين ABO و CBO',
        'اختيار هدف الحملة المناسب',
        'Audience Targeting باحتراف',
        'إعداد Ad Sets بطريقة صحيحة',
        'كتابة Copy يبيع',
        'تحديد الميزانية وجدولة الإعلانات'
      ]
    },
    {
      number: 5,
      icon: Video,
      title: 'TikTok & Snapchat Ads',
      description: 'المنصات الأسرع نموًا',
      duration: '1 ساعة',
      lessons: 6,
      color: 'from-pink-500 to-pink-600',
      content: [
        'أهداف الحملات على TikTok',
        'استراتيجيات الاستهداف',
        'نوع الكونتنت اللي يشتغل على TikTok',
        'Snapchat Ads: الاستهداف والتحسين',
        'تحسين ROAS على المنصتين',
        'مقارنة التكاليف والنتائج'
      ]
    },
    {
      number: 6,
      icon: Image,
      title: 'التعامل مع الكرييتيف',
      description: 'المحتوى هو الملك',
      duration: '1 ساعة',
      lessons: 6,
      color: 'from-orange-500 to-orange-600',
      content: [
        'حل مشكلة الكرييتيف المحروق',
        'إعادة صياغة الرسالة التسويقية',
        'A/B Testing بشكل صحيح',
        'أنواع الكرييتيف الرابحة (فيديو، صور، carousel)',
        'أدوات تصميم بسيطة وفعالة',
        'UGC Content: ليه مهم وإزاي تعمله'
      ]
    },
    {
      number: 7,
      icon: BarChart3,
      title: 'قياس النتائج والتحسين',
      description: 'البيانات هي طريقك للنجاح',
      duration: '1 ساعة',
      lessons: 6,
      color: 'from-vmedia-500 to-vmedia-600',
      content: [
        'الـ KPIs الأساسية اللي لازم تتابعها',
        'تحليل البيانات واتخاذ القرارات',
        'Scaling: متى وإزاي تكبّر الحملة',
        'تحسين الـ ROAS بشكل مستمر',
        'حل مشاكل الحملات الشائعة',
        'استراتيجيات Retargeting المتقدمة'
      ]
    },
    {
      number: 8,
      icon: Rocket,
      title: 'Vondera Walkthrough',
      description: 'إطلاق متجرك في دقائق',
      duration: '1 ساعة',
      lessons: 9,
      color: 'from-primary-500 to-vmedia-500',
      isNew: true,
      content: [
        'إنشاء حساب على Vondera في دقائق',
        'إعداد متجرك الإلكتروني بالكامل',
        'إضافة المنتجات وإدارة المخزون',
        'ربط وسائل الدفع (بطاقات، محافظ، COD)',
        'إعداد صفحات الهبوط (Landing Pages)',
        'ربط البيكسل والتتبع التلقائي',
        'إدارة الطلبات والشحن',
        'تقارير المبيعات والأرباح اللحظية',
        'نصائح لزيادة معدل التحويل'
      ]
    }
  ];

  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdet6LOSWvwKWwBfpjcGM0jRx3Cjg8S6U_Kd4h1u9p7HMX6Uw/viewform', '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vmedia-200 rounded-full filter blur-3xl opacity-30"></div>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-vmedia-500 text-white px-6 py-3 rounded-full font-bold mb-6 shadow-lg">
            <Sparkles size={20} />
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-vmedia-500">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Progress Line */}
          <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-vmedia-500 to-primary-500 opacity-20 hidden md:block md:translate-x-1/2"></div>

          <div className="space-y-12">
            {(showAllModules ? modules : modules.slice(0, 4)).map((module, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={module.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Module Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`relative group ${module.isNew ? 'transform md:scale-110' : ''}`}>
                      {/* New Badge */}
                      {module.isNew && (
                        <div className="absolute -top-4 -right-4 z-20">
                          <div className="bg-gradient-to-r from-vmedia-500 to-vmedia-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl animate-bounce-slow flex items-center gap-2">
                            <Sparkles size={16} />
                            <span>{t('newBadge')}</span>
                          </div>
                        </div>
                      )}

                      {/* Card */}
                      <div className={`relative bg-white rounded-3xl shadow-xl border-2 ${module.isNew ? 'border-vmedia-300' : 'border-gray-100'} overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                        {/* Gradient Header */}
                        <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                              <module.icon size={32} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold opacity-90 mb-1">{t('moduleLabel')} {module.number}</div>
                              <h3 className="text-2xl font-bold">{module.title}</h3>
                            </div>
                          </div>
                          <p className="text-white/90">{module.description}</p>
                        </div>

                        {/* Card Body */}
                        <div className="p-6">
                          {/* Meta Info */}
                          <div className="flex items-center gap-4 mb-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{module.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span>{module.lessons} {t('lessons')}</span>
                            </div>
                          </div>

                          {/* Expand Button */}
                          <button
                            onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                          >
                            <span className="font-semibold text-gray-700">{expandedModule === index ? t('collapseModule') : t('expandModule')}</span>
                            <ChevronDown
                              size={20}
                              className={`text-gray-500 transform transition-transform group-hover:text-primary-500 ${
                                expandedModule === index ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Expanded Content */}
                          {expandedModule === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-2"
                            >
                              {module.content.map((item, itemIndex) => (
                                <motion.div
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.05 }}
                                  className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:from-primary-50 hover:to-vmedia-50 transition-colors group"
                                >
                                  <CheckCircle2 className="text-vmedia-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                                  <span className="text-gray-700 text-sm">{item}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${module.color} shadow-lg flex items-center justify-center border-4 border-white z-10 group-hover:scale-125 transition-transform`}>
                        <span className="text-white font-bold text-lg">{module.number}</span>
                      </div>
                      {/* Connecting Line to Card */}
                      <div className={`absolute top-1/2 ${isEven ? 'right-full' : 'left-full'} w-12 h-0.5 bg-gradient-to-${isEven ? 'r' : 'l'} ${module.color} opacity-50`}></div>
                    </div>
                  </div>

                  {/* Empty Space (for alternating layout) */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Show More Button */}
          {!showAllModules && modules.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setShowAllModules(true)}
                className="bg-gradient-to-r from-primary-500 to-vmedia-500 hover:from-primary-600 hover:to-vmedia-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <span>{t('showMore', { count: modules.length - 4 })}</span>
                <ChevronDown size={20} />
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-black rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              جاهز تبدأ رحلة التعلم؟
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              سجّل الآن مجانًا قبل ما ينتهي العرض
            </p>

            <CountdownTimer size="lg" />

            <button
              onClick={handleCTAClick}
              className="mt-8 bg-gradient-to-r from-vmedia-500 to-vmedia-600 hover:from-vmedia-600 hover:to-vmedia-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              ابدأ الكورس مجانًا دلوقتي
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
