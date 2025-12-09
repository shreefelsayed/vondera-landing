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
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import CountdownTimer from './CountdownTimer';

export default function CourseRoadmap() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const modules = [
    {
      number: 1,
      icon: PlayCircle,
      title: 'مقدمة الميديا باير',
      description: 'ابدأ رحلتك في عالم الميديا بايينج',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      lessons: [
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
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      lessons: [
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
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      lessons: [
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
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      lessons: [
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
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      lessons: [
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
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      lessons: [
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
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      lessons: [
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
      title: 'Vondera Walkthrough - إطلاق متجرك',
      description: 'تعلم إزاي تطلق موقعك مع Vondera في دقائق',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      highlight: true,
      lessons: [
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

  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" dir="rtl">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-bold mb-6">
            خريطة الطريق
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            رحلتك من <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">الصفر للاحتراف</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            8 وحدات تدريبية متكاملة تأخذك خطوة بخطوة حتى تصبح ميديا بايير محترف
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute right-8 md:right-12 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-green-500 to-red-500 opacity-20 hidden md:block"></div>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Module Card */}
                <div className={`relative ${module.highlight ? 'transform md:scale-105' : ''}`}>
                  {/* Roadmap Dot */}
                  <div className="absolute right-0 md:right-4 top-8 hidden md:flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${module.color} shadow-lg flex items-center justify-center border-4 border-white z-10`}>
                      <span className="text-white font-bold">{module.number}</span>
                    </div>
                  </div>

                  <div className={`mr-0 md:mr-20 bg-white rounded-2xl shadow-xl overflow-hidden border-3 ${module.borderColor} hover:shadow-2xl transition-all duration-300 ${module.highlight ? 'ring-4 ring-red-500 ring-opacity-50' : ''}`}>
                    {/* Module Header */}
                    <button
                      onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                      className={`w-full p-6 md:p-8 ${module.bgColor} hover:opacity-90 transition-opacity`}
                    >
                      <div className="flex items-center gap-6">
                        {/* Module Icon & Number (Mobile) */}
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <module.icon className="text-white" size={32} />
                        </div>

                        {/* Module Info */}
                        <div className="flex-1 text-right">
                          <div className="flex items-center gap-2 justify-end mb-2">
                            <div className="text-sm font-bold text-gray-500">الوحدة {module.number}</div>
                            {module.highlight && (
                              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">جديد!</span>
                            )}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {module.title}
                          </h3>
                          <p className="text-gray-600">{module.description}</p>
                        </div>

                        {/* Expand Icon */}
                        <ChevronDown
                          size={24}
                          className={`text-gray-400 transform transition-transform ${
                            expandedModule === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Module Content */}
                    {expandedModule === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t-2 border-gray-100"
                      >
                        <div className="p-6 md:p-8 bg-white">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="text-green-500" size={20} />
                            محتوى الوحدة:
                          </h4>
                          <ul className="space-y-3">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <motion.li
                                key={lessonIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: lessonIndex * 0.05 }}
                                className="flex items-start gap-3 group"
                              >
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <CheckCircle2 className="text-white" size={14} />
                                </div>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                  {lesson}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Roadmap Arrow (between modules) */}
                {index < modules.length - 1 && (
                  <div className="hidden md:flex items-center justify-center my-6">
                    <div className="text-gray-300">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 5v14m0 0l-7-7m7 7l7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16 mb-12"
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-green-100">
            <div className="text-5xl font-bold text-green-500 mb-2">50+</div>
            <div className="text-gray-600">درس عملي</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-red-100">
            <div className="text-5xl font-bold text-red-500 mb-2">20+</div>
            <div className="text-gray-600">ساعة محتوى</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-blue-100">
            <div className="text-5xl font-bold text-blue-500 mb-2">∞</div>
            <div className="text-gray-600">وصول مدى الحياة</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              جاهز تبدأ رحلة التعلم؟
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              سجّل الآن مجانًا قبل ما ينتهي العرض
            </p>

            <CountdownTimer size="lg" />

            <button
              onClick={scrollToForm}
              className="mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              ابدأ الكورس مجانًا دلوقتي
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
