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
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useState } from 'react';
import CountdownTimer from './CountdownTimer';

export default function CourseModules() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const modules = [
    {
      number: 1,
      icon: PlayCircle,
      title: 'مقدمة الميديا باير',
      description: 'ابدأ رحلتك في عالم الميديا بايينج',
      color: 'from-red-500 to-red-600',
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
      color: 'from-red-500 to-red-600',
      lessons: [
        'الـ KPIs الأساسية اللي لازم تتابعها',
        'تحليل البيانات واتخاذ القرارات',
        'Scaling: متى وإزاي تكبّر الحملة',
        'تحسين الـ ROAS بشكل مستمر',
        'حل مشاكل الحملات الشائعة',
        'استراتيجيات Retargeting المتقدمة'
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
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" dir="rtl">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

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
            المحتوى التدريبي
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            إيه اللي <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">هتتعلمه</span> جوه الكورس؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            7 وحدات تدريبية شاملة تأخذك من الصفر للاحتراف
          </p>
        </motion.div>

        {/* Modules */}
        <div className="max-w-5xl mx-auto space-y-6 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-red-300 transition-all duration-300">
                {/* Module Header */}
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center gap-6 text-right hover:bg-gray-50 transition-colors"
                >
                  {/* Module Number & Icon */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <module.icon className="text-white" size={32} />
                  </div>

                  {/* Module Info */}
                  <div className="flex-1 text-right">
                    <div className="text-sm text-gray-500 mb-1">الوحدة {module.number}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600">{module.description}</p>
                  </div>

                  {/* Expand Icon */}
                  <div className={`transform transition-transform ${expandedModule === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Module Content */}
                {expandedModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6 md:p-8 bg-gray-50">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">محتوى الوحدة:</h4>
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                            <span className="text-gray-700">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-green-100">
            <div className="text-5xl font-bold text-green-500 mb-2">40+</div>
            <div className="text-gray-600">درس عملي</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-red-100">
            <div className="text-5xl font-bold text-red-500 mb-2">15+</div>
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
