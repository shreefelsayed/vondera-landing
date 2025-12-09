'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'صاحب متجر إلكتروني',
      image: '👨‍💼',
      rating: 5,
      text: 'طبقت اللي في أول 3 Modules وزودت مبيعاتي 4 أضعاف! الكورس عملي جدًا ومفيش حشو. كل درس فيه قيمة حقيقية.',
      results: 'زيادة 400% في المبيعات',
      resultColor: 'text-primary-500'
    },
    {
      name: 'سلمى حسن',
      role: 'ميديا بايير مبتدئة',
      image: '👩‍💻',
      rating: 5,
      text: 'الكورس عملي جدًا وقدرت أعمل أول حملة ناجحة بعد ما خلصت الوحدة الرابعة. دلوقتي بشتغل مع 3 عملاء وبكسب كويس جدًا.',
      results: 'أول حملة ناجحة في أسبوعين',
      resultColor: 'text-vmedia-500'
    },
    {
      name: 'محمود عبدالله',
      role: 'موظف تسويق',
      image: '👨‍💼',
      rating: 5,
      text: 'كنت بشتغل في التسويق بس ما كنتش فاهم الإعلانات المدفوعة. الكورس ده غيّر كل حاجة. دلوقتي بدير حملات الشركة بنفسي ووفرنا آلاف الجنيهات.',
      results: 'ترقية + زيادة في المرتب',
      resultColor: 'text-primary-500'
    },
    {
      name: 'نور إبراهيم',
      role: 'طالبة جامعية',
      image: '👩‍🎓',
      rating: 5,
      text: 'بدأت أشتغل ميديا بايير وأنا لسه في الجامعة. الكورس سهل وواضح ومش محتاج أي خبرة. دلوقتي بكسب أكتر من مصروفي الشهري!',
      results: 'دخل شهري 8000 جنيه',
      resultColor: 'text-primary-500'
    },
    {
      name: 'ياسر علي',
      role: 'فريلانسر',
      image: '👨‍💻',
      rating: 5,
      text: 'أضفت خدمة الميديا بايينج لخدماتي وضاعفت دخلي الشهري. الكورس علمني كل حاجة من الصفر، وفيه أمثلة حقيقية على كل حاجة.',
      results: 'مضاعفة الدخل الشهري',
      resultColor: 'text-vmedia-500'
    },
    {
      name: 'دينا خالد',
      role: 'صاحبة براند محلي',
      image: '👩‍💼',
      rating: 5,
      text: 'كنت بدفع آلاف الجنيهات لوكالات إعلانات وما كنتش بحقق نتايج. بعد الكورس بقيت أعمل حملاتي بنفسي وبوفر فلوس وبحقق نتايج أحسن!',
      results: 'توفير 15,000 جنيه شهريًا',
      resultColor: 'text-primary-500'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <div className="inline-block bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-bold mb-6">
            قصص نجاح
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            آراء <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-vmedia-500">طلاب سابقين</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شوف إيه اللي حققه طلاب الكورس بعد ما طبقوا المحتوى
          </p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative overflow-hidden mb-16">
          {/* First Row - Scroll Left */}
          <motion.div
            className="flex gap-6 mb-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${index}-first`}
                className="min-w-[350px] md:min-w-[450px] bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 flex-shrink-0"
              >
                {/* Quote Icon */}
                <Quote className="text-primary-500 mb-4" size={40} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                <div className={`${testimonial.resultColor} bg-opacity-10 border-2 border-current rounded-xl p-3 mb-6`}>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    <span className="font-bold text-sm">{testimonial.results}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Scroll Right */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
              <div
                key={`${index}-second`}
                className="min-w-[350px] md:min-w-[450px] bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 flex-shrink-0"
              >
                {/* Quote Icon */}
                <Quote className="text-primary-500 mb-4" size={40} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                <div className={`${testimonial.resultColor} bg-opacity-10 border-2 border-current rounded-xl p-3 mb-6`}>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    <span className="font-bold text-sm">{testimonial.results}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold text-primary-400 mb-2">5000+</div>
              <div className="text-gray-300">طالب سابق</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300">متوسط التقييم</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold text-vmedia-400 mb-2">95%</div>
              <div className="text-gray-300">معدل النجاح</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-300">دعم مستمر</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
