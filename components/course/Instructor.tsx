'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, TrendingUp, Award, Star, CheckCircle2 } from 'lucide-react';

export default function Instructor() {
  const achievements = [
    {
      icon: Trophy,
      title: '10+ سنوات خبرة',
      description: 'في مجال التجارة الإلكترونية والميديا بايينج'
    },
    {
      icon: Users,
      title: '50,000+ طالب',
      description: 'تدرب على يده وحققوا نتائج مذهلة'
    },
    {
      icon: TrendingUp,
      title: '1 مليار+ جنيه',
      description: 'إجمالي مبيعات طلابه والتجار اللي معاه'
    },
    {
      icon: Award,
      title: 'المؤسس والـ CEO',
      description: 'لأقوى منصة تجارة إلكترونية في مصر - Vondera'
    }
  ];

  const highlights = [
    'خبير في استراتيجيات الميديا بايينج المتقدمة',
    'ساعد آلاف التجار في تحقيق ملايين الجنيهات من المبيعات',
    'متخصص في تحويل المبتدئين لميديا بايرز محترفين',
    'صاحب أكبر مجتمع للتجارة الإلكترونية في الشرق الأوسط',
    'مدرب معتمد في التسويق الرقمي والإعلانات المدفوعة'
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 left-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
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
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold mb-6">
            المدرب
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            تعلم على يد <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-400">الأفضل</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            كورس مُقدم من خبير التجارة الإلكترونية الأول في مصر
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Instructor Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500/50">
                  {/* Placeholder for instructor image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-8xl">👨‍💼</span>
                      </div>
                      <p className="text-gray-400 text-sm">صورة المدرب</p>
                    </div>
                  </div>

                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl">
                    <Star className="fill-black" size={20} />
                    <span>الأفضل في مصر</span>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-green-400"
                >
                  <div className="text-4xl font-bold text-green-500">50K+</div>
                  <div className="text-sm text-gray-600">طالب ناجح</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-red-400"
                >
                  <div className="text-4xl font-bold text-red-500">10+</div>
                  <div className="text-sm text-gray-600">سنوات خبرة</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Instructor Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Name & Title */}
              <div className="mb-8">
                <h3 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  محمد الكومي
                </h3>
                <p className="text-2xl text-red-400 font-bold mb-2">
                  خبير التجارة الإلكترونية #1 في مصر
                </p>
                <p className="text-xl text-gray-300">
                  المؤسس والـ CEO لمنصة Vondera
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                محمد الكومي هو الرائد في مجال التجارة الإلكترونية والميديا بايينج في مصر.
                بخبرة تزيد عن 10 سنوات، ساعد آلاف التجار والميديا بايرز في تحقيق ملايين الجنيهات من المبيعات.
                صاحب رؤية فريدة لتحويل المبتدئين إلى محترفين في أسرع وقت ممكن.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-200">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 italic">
                <p className="text-gray-200 text-lg leading-relaxed">
                  "هدفي مش بس إنك تتعلم النظري، لكن تقدر تطبق وتحقق نتائج حقيقية من أول أسبوع.
                  كل درس في الكورس ده مبني على تجارب حقيقية وحملات ناجحة."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <div>
                    <div className="font-bold">محمد الكومي</div>
                    <div className="text-sm text-gray-400">المؤسس والـ CEO - Vondera</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
