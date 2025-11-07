'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: '10 Proven Strategies to Boost Your E-Commerce Sales in 2024',
      excerpt:
        'Discover the latest tactics successful merchants are using to increase conversions and grow their online stores.',
      image: '/blog/sales-strategies.jpg',
      category: 'Growth',
      author: 'Sarah Ahmed',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 2,
      title: 'How VMedia Marketplace Helped 50+ Merchants Scale to 6 Figures',
      excerpt:
        "Learn how our exclusive media buyer marketplace is transforming merchants' growth trajectories in MENA.",
      image: '/blog/vmedia-success.jpg',
      category: 'Success Stories',
      author: 'Omar Hassan',
      date: 'Jan 12, 2024',
      readTime: '6 min read',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 3,
      title: 'The Complete Guide to Multi-Channel Selling in the Middle East',
      excerpt:
        'Master selling on Instagram, Facebook, WhatsApp, and your website simultaneously with our expert tips.',
      image: '/blog/multichannel.jpg',
      category: 'Guides',
      author: 'Layla Mohamed',
      date: 'Jan 10, 2024',
      readTime: '12 min read',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 4,
      title: 'Optimizing Your Store for Arabic Customers: Best Practices',
      excerpt:
        'RTL design, cultural considerations, and localization tips to maximize conversions in Arabic markets.',
      image: '/blog/arabic-optimization.jpg',
      category: 'Localization',
      author: 'Youssef Ali',
      date: 'Jan 8, 2024',
      readTime: '7 min read',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      title: 'Understanding Payment Gateway Options in Egypt and Saudi Arabia',
      excerpt:
        'A comprehensive comparison of local payment gateways and how to choose the right one for your store.',
      image: '/blog/payment-gateways.jpg',
      category: 'Payments',
      author: 'Fatima Nour',
      date: 'Jan 5, 2024',
      readTime: '10 min read',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 6,
      title: 'Using Analytics to Drive Data-Driven E-Commerce Decisions',
      excerpt:
        'Leverage Vondera analytics dashboard to identify trends, optimize inventory, and boost profitability.',
      image: '/blog/analytics.jpg',
      category: 'Analytics',
      author: 'Ahmed Khaled',
      date: 'Jan 3, 2024',
      readTime: '9 min read',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const categories = ['All Posts', 'Growth', 'Success Stories', 'Guides', 'Tutorials'];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-full mb-6">
              <Tag className="w-5 h-5 text-violet-600" />
              <span className="text-violet-600 font-semibold">Blog & Resources</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Learn & Grow
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Your Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, success stories, and practical guides to help you succeed in e-commerce
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center text-white">
                <div className="inline-block mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Post
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{posts[0].title}</h3>
                <p className="text-lg text-white/90 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-violet-600 px-6 py-3 rounded-xl font-semibold w-fit hover:shadow-lg transition-shadow"
                >
                  Read Article
                  <ArrowRight size={20} />
                </motion.button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <div className={`absolute inset-0 bg-gradient-to-br ${posts[0].color} opacity-40 rounded-2xl`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag size={120} className="text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-80`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag size={60} className="text-white/20" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-violet-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
