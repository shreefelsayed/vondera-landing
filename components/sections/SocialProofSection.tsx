'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Twitter, Instagram, MessageCircle, ThumbsUp, Award } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function SocialProofSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      type: 'review',
      name: 'Ahmed Hassan',
      role: 'Fashion Store Owner',
      avatar: '/images/avatar-1.jpg',
      rating: 5,
      content: 'Vondera transformed my business! I went from 50 orders per day to over 300. The VMedia marketplace connected me with incredible media buyers.',
      date: '2 days ago',
      verified: true,
    },
    {
      id: 2,
      type: 'twitter',
      name: 'Sara Mohamed',
      handle: '@sarabeauty',
      avatar: '/images/avatar-2.jpg',
      content: 'Just hit $100K in monthly revenue using @Vondera! The analytics and automation tools are game-changers. Best decision ever! 🚀',
      likes: 234,
      retweets: 45,
      date: '3 days ago',
    },
    {
      id: 3,
      type: 'review',
      name: 'Omar Ali',
      role: 'Electronics Merchant',
      avatar: '/images/avatar-3.jpg',
      rating: 5,
      content: 'The multi-channel selling feature is incredible. I can manage Instagram, Facebook, and my website all from one dashboard. Saved me 20 hours per week!',
      date: '5 days ago',
      verified: true,
    },
    {
      id: 4,
      type: 'instagram',
      name: 'Layla Ibrahim',
      handle: '@laylastore',
      avatar: '/images/avatar-4.jpg',
      content: 'Switched from Shopify to Vondera and never looked back. The Arabic interface and local payment gateways make everything so much easier! 💜',
      likes: 456,
      date: '1 week ago',
    },
    {
      id: 5,
      type: 'review',
      name: 'Youssef Khaled',
      role: 'Home Goods Store',
      avatar: '/images/avatar-5.jpg',
      rating: 5,
      content: 'Outstanding customer support! Whenever I have a question, the team responds within minutes. The platform is incredibly intuitive.',
      date: '1 week ago',
      verified: true,
    },
    {
      id: 6,
      type: 'twitter',
      name: 'Fatima Nour',
      handle: '@fatimanour',
      avatar: '/images/avatar-6.jpg',
      content: 'The ROI Calculator showed me I could save 60% compared to Shopify. After 6 months on @Vondera, the savings are even better than projected! 📊',
      likes: 189,
      retweets: 34,
      date: '1 week ago',
    },
    {
      id: 7,
      type: 'review',
      name: 'Mahmoud Zaki',
      role: 'Cosmetics Retailer',
      avatar: '/images/avatar-7.jpg',
      rating: 5,
      content: 'The inventory management system is brilliant. Low stock alerts and auto-reordering have saved me from stockouts multiple times.',
      date: '2 weeks ago',
      verified: true,
    },
    {
      id: 8,
      type: 'instagram',
      name: 'Nadia Farouk',
      handle: '@nadiabeauty',
      avatar: '/images/avatar-8.jpg',
      content: 'Love how Vondera integrates with Instagram Shopping! My followers can buy directly without leaving the app. Sales up 180%! 🛍️✨',
      likes: 678,
      date: '2 weeks ago',
    },
  ];

  const stats = [
    { label: 'Average Rating', value: '4.9/5', icon: Star },
    { label: 'Total Reviews', value: '8,500+', icon: MessageCircle },
    { label: 'Verified Users', value: '10,000+', icon: Award },
    { label: 'Satisfaction', value: '98%', icon: ThumbsUp },
  ];

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'review', label: 'Platform Reviews' },
    { id: 'twitter', label: 'Twitter' },
    { id: 'instagram', label: 'Instagram' },
  ];

  const filteredTestimonials =
    activeFilter === 'all' ? testimonials : testimonials.filter((t) => t.type === activeFilter);

  const renderTestimonial = (testimonial: typeof testimonials[0]) => {
    if (testimonial.type === 'review') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Content */}
          <Quote className="w-8 h-8 text-violet-200 mb-2" />
          <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                {testimonial.verified && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-3">{testimonial.date}</div>
        </motion.div>
      );
    }

    if (testimonial.type === 'twitter') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.handle}</div>
              </div>
            </div>
            <Twitter size={20} className="text-blue-400" />
          </div>

          {/* Content */}
          <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

          {/* Engagement */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span>{testimonial.retweets}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp size={16} />
              <span>{testimonial.likes}</span>
            </div>
            <div className="ml-auto text-xs">{testimonial.date}</div>
          </div>
        </motion.div>
      );
    }

    if (testimonial.type === 'instagram') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.handle}</div>
              </div>
            </div>
            <Instagram size={20} className="text-pink-500" />
          </div>

          {/* Content */}
          <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

          {/* Engagement */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <ThumbsUp size={16} />
              <span>{testimonial.likes} likes</span>
            </div>
            <div className="ml-auto text-xs">{testimonial.date}</div>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-violet-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Loved by Thousands
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                of Merchants
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what merchants are saying about their experience with Vondera
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-violet-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id}>{renderTestimonial(testimonial)}</div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join 10,000+ satisfied merchants growing their business with Vondera
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Free Trial
          </motion.button>
          <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
        </motion.div>
      </Container>
    </section>
  );
}
