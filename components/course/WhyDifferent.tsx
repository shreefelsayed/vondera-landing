'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Target, TrendingUp, Lightbulb, BarChart3 } from 'lucide-react';

export default function WhyDifferent() {
  const features = [
    {
      icon: Rocket,
      title: 'هتتعلم الميديا بايينج بشكل عملي 100%',
      description: 'كل درس فيه تطبيق عملي وأمثلة من حملات حقيقية'
    },
    {
      icon: Users,
      title: 'مناسب للمبتدئين ولأي حد عايز يزوّد دخله',
      description: 'ما تحتاجش أي خبرة سابقة – نبدأ معاك من الصفر'
    },
    {
      icon: Target,
      title: 'خطوات واضحة + تطبيقات على منتجات حقيقية',
      description: 'خطة واضحة وبسيطة تقدر تطبقها فورًا على أي منتج'
    },
    {
      icon: TrendingUp,
      title: 'شرح منصات Meta – TikTok – Snapchat',
      description: 'كل المنصات اللي محتاج تشتغل عليها في مكان واحد'
    },
    {
      icon: Lightbulb,
      title: 'استراتيجيات اختيار المنتج',
      description: 'تعلم إزاي تختار منتج رابح قبل ما تصرف فلوس على الإعلانات'
    },
    {
      icon: BarChart3,
      title: 'تقييم المنافسة واستراتيجيات النمو',
      description: 'أدوات وطرق تحلل بيها السوق والمنافسين وتطلع بفرصة مضمونة'
    }
  ];

  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdet6LOSWvwKWwBfpjcGM0jRx3Cjg8S6U_Kd4h1u9p7HMX6Uw/viewform', '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
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
          <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold mb-6">
            الفرق الحقيقي
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ليه الكورس دا <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">مختلف؟</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مش مجرد كورس نظري... دا برنامج تدريبي عملي يخليك جاهز تبدأ حملات حقيقية فورًا
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-red-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>ابدأ رحلتك دلوقتي</span>
            <Rocket size={24} />
          </button>

          <p className="text-gray-500 mt-4">
            الكورس مجاني تمامًا لفترة محدودة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
