'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const faqs = [
    {
      question: 'هل الكورس مناسب للمبتدئين؟',
      answer: 'نعم بالتأكيد! الكورس مصمم خصيصًا للمبتدئين اللي ما عندهمش أي خبرة في الميديا بايينج. نبدأ معاك من الصفر ونشرح كل حاجة خطوة بخطوة بطريقة بسيطة وسهلة.'
    },
    {
      question: 'هل الكورس فعلاً مجاني؟',
      answer: 'نعم، الكورس مجاني 100% لفترة محدودة. ما فيش أي تكاليف خفية أو اشتراكات شهرية. بس لازم تسجل دلوقتي قبل ما العرض ينتهي.'
    },
    {
      question: 'مدة الكورس قد إيه؟',
      answer: 'الكورس فيه أكثر من 15 ساعة محتوى مقسمين على 7 وحدات تدريبية. تقدر تخلص الكورس في أسبوعين إذا خصصت ساعة في اليوم، أو على حسب وقتك المتاح لأن الكورس متاح مدى الحياة.'
    },
    {
      question: 'هل في شهادة بعد الانتهاء؟',
      answer: 'نعم، بعد ما تخلص الكورس وتطبق الحملات العملية هتحصل على شهادة إتمام معتمدة تقدر تضيفها على LinkedIn وCV بتاعك.'
    },
    {
      question: 'هل محتاج أي أدوات أو برامج خاصة؟',
      answer: 'كل اللي محتاجه هو جهاز كمبيوتر أو لابتوب متصل بالإنترنت. كل الأدوات اللي هنستخدمها مجانية ومتاحة للجميع. هنشرح إزاي تستخدمهم كلهم في الكورس.'
    },
    {
      question: 'هل الكورس يتطلب ميزانية إعلانات؟',
      answer: 'الكورس نفسه مجاني تمامًا. لكن لو عايز تطبق حملات حقيقية بعد التدريب، هتحتاج ميزانية بسيطة للإعلانات (تبدأ من 500-1000 جنيه). لكن هنعلمك إزاي تختبر المنتجات بأقل ميزانية ممكنة.'
    },
    {
      question: 'هل في دعم فني لو احتجت مساعدة؟',
      answer: 'أكيد! فيه مجموعة دعم خاصة على WhatsApp لكل الطلاب، وفريق الدعم متواجد يوميًا للرد على أي استفسار. كمان فيه جلسات Q&A مباشرة كل أسبوع.'
    },
    {
      question: 'متى أقدر أبدأ الكورس؟',
      answer: 'تقدر تبدأ فورًا بعد التسجيل! الكورس متاح 24/7 وتقدر تتعلم في أي وقت يناسبك. كل المحتوى مسجل ومتاح مدى الحياة.'
    },
    {
      question: 'هل الكورس يغطي كل منصات الإعلانات؟',
      answer: 'نعم، الكورس يشمل شرح تفصيلي لـ Meta Ads (Facebook & Instagram)، TikTok Ads، و Snapchat Ads. هتتعلم إزاي تدير حملات ناجحة على كل منصة.'
    },
    {
      question: 'إيه الفرق بين الكورس ده والكورسات التانية؟',
      answer: 'الكورس ده عملي 100% ومبني على تطبيقات حقيقية، مش مجرد نظريات. كمان فيه أمثلة من حملات حقيقية، استراتيجيات مجربة، ودعم مستمر حتى بعد الانتهاء.'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold mb-6">
            <HelpCircle size={20} />
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            أسئلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">متكررة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            لقينا الإجابات على كل الأسئلة اللي ممكن تكون في بالك
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-4">
          {(showAllFAQs ? faqs : faqs.slice(0, 5)).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white border-2 border-gray-200 rounded-2xl p-6 text-right hover:border-red-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed text-right text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAllFAQs && faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllFAQs(true)}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              عرض المزيد من الأسئلة ({faqs.length - 5}+)
            </button>
          </div>
        )}

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              لسه عندك أسئلة؟
            </h3>
            <p className="text-gray-600 mb-6">
              تواصل معانا على WhatsApp وفريق الدعم هيرد عليك فورًا
            </p>
            <a
              href="https://wa.me/+201070068383"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              تواصل معانا الآن
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
