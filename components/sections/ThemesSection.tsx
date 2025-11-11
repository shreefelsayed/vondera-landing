'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download, Star, Sparkles, Palette, ShoppingBag, Shirt, Gem, Home, Monitor } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function ThemesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTheme, setHoveredTheme] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Themes', icon: Palette },
    { id: 'fashion', label: 'Fashion', icon: Shirt },
    { id: 'beauty', label: 'Beauty', icon: Sparkles },
    { id: 'electronics', label: 'Electronics', icon: Monitor },
    { id: 'jewelry', label: 'Jewelry', icon: Gem },
    { id: 'home', label: 'Home & Living', icon: Home },
  ];

  const themes = [
    {
      id: 1,
      name: 'Aurora',
      category: 'fashion',
      image: '/themes/aurora.jpg',
      rating: 4.9,
      downloads: 2400,
      color: 'from-purple-400 to-pink-500',
      features: ['Mega Menu', 'Product Quick View', 'Instagram Feed'],
    },
    {
      id: 2,
      name: 'Luxe',
      category: 'jewelry',
      image: '/themes/luxe.jpg',
      rating: 5.0,
      downloads: 1800,
      color: 'from-amber-400 to-orange-500',
      features: ['3D Product View', 'Wishlist', 'Compare Products'],
    },
    {
      id: 3,
      name: 'TechZone',
      category: 'electronics',
      image: '/themes/techzone.jpg',
      rating: 4.8,
      downloads: 3200,
      color: 'from-blue-400 to-cyan-500',
      features: ['Specs Table', 'Video Reviews', 'Live Chat'],
    },
    {
      id: 4,
      name: 'Glow',
      category: 'beauty',
      image: '/themes/glow.jpg',
      rating: 4.9,
      downloads: 2900,
      color: 'from-pink-400 to-rose-500',
      features: ['Before/After Slider', 'Tutorials', 'Skin Quiz'],
    },
    {
      id: 5,
      name: 'Minimal',
      category: 'fashion',
      image: '/themes/minimal.jpg',
      rating: 4.7,
      downloads: 4100,
      color: 'from-gray-400 to-gray-600',
      features: ['Clean Design', 'Fast Loading', 'Mobile First'],
    },
    {
      id: 6,
      name: 'Urban',
      category: 'fashion',
      image: '/themes/urban.jpg',
      rating: 4.8,
      downloads: 3500,
      color: 'from-indigo-400 to-purple-500',
      features: ['Lookbook', 'Size Guide', 'AR Try-On'],
    },
    {
      id: 7,
      name: 'Nordic',
      category: 'home',
      image: '/themes/nordic.jpg',
      rating: 4.9,
      downloads: 2200,
      color: 'from-teal-400 to-green-500',
      features: ['Room Planner', '360° View', 'Material Samples'],
    },
    {
      id: 8,
      name: 'Radiance',
      category: 'beauty',
      image: '/themes/radiance.jpg',
      rating: 5.0,
      downloads: 1600,
      color: 'from-violet-400 to-purple-500',
      features: ['Shade Finder', 'Ingredients Info', 'Reviews'],
    },
    {
      id: 9,
      name: 'Elite',
      category: 'jewelry',
      image: '/themes/elite.jpg',
      rating: 4.8,
      downloads: 1400,
      color: 'from-yellow-400 to-amber-500',
      features: ['Custom Engraving', 'Precious Metals', 'Certificates'],
    },
    {
      id: 10,
      name: 'NextGen',
      category: 'electronics',
      image: '/themes/nextgen.jpg',
      rating: 4.9,
      downloads: 2800,
      color: 'from-cyan-400 to-blue-500',
      features: ['Product Comparison', 'Tech Specs', 'Warranty Info'],
    },
    {
      id: 11,
      name: 'Haven',
      category: 'home',
      image: '/themes/haven.jpg',
      rating: 4.7,
      downloads: 1900,
      color: 'from-green-400 to-emerald-500',
      features: ['Style Quiz', 'Bundle Builder', 'Room Mood Board'],
    },
    {
      id: 12,
      name: 'Vogue',
      category: 'fashion',
      image: '/themes/vogue.jpg',
      rating: 4.9,
      downloads: 3800,
      color: 'from-rose-400 to-pink-500',
      features: ['Editorial Layout', 'Trend Reports', 'Style Guide'],
    },
    {
      id: 13,
      name: 'Prestige',
      category: 'jewelry',
      image: '/themes/prestige.jpg',
      rating: 5.0,
      downloads: 1200,
      color: 'from-orange-400 to-red-500',
      features: ['Luxury Packaging', 'Gift Registry', 'Appraisals'],
    },
    {
      id: 14,
      name: 'Bloom',
      category: 'beauty',
      image: '/themes/bloom.jpg',
      rating: 4.8,
      downloads: 2500,
      color: 'from-fuchsia-400 to-pink-500',
      features: ['Virtual Makeover', 'Routine Builder', 'Expert Tips'],
    },
    {
      id: 15,
      name: 'Zenith',
      category: 'electronics',
      image: '/themes/zenith.jpg',
      rating: 4.9,
      downloads: 3100,
      color: 'from-slate-400 to-blue-500',
      features: ['Smart Filters', 'Price Tracker', 'Deals Alert'],
    },
    {
      id: 16,
      name: 'Essence',
      category: 'home',
      image: '/themes/essence.jpg',
      rating: 4.8,
      downloads: 2100,
      color: 'from-lime-400 to-green-500',
      features: ['Eco-Friendly', 'Sustainable', 'Carbon Neutral'],
    },
    {
      id: 17,
      name: 'Glamour',
      category: 'beauty',
      image: '/themes/glamour.jpg',
      rating: 4.9,
      downloads: 2700,
      color: 'from-purple-400 to-pink-500',
      features: ['Glam Gallery', 'Tutorial Videos', 'Influencer Picks'],
    },
    {
      id: 18,
      name: 'Metro',
      category: 'fashion',
      image: '/themes/metro.jpg',
      rating: 4.7,
      downloads: 3300,
      color: 'from-gray-500 to-slate-600',
      features: ['Urban Style', 'Street Fashion', 'Trend Alerts'],
    },
    {
      id: 19,
      name: 'Luxura',
      category: 'jewelry',
      image: '/themes/luxura.jpg',
      rating: 5.0,
      downloads: 1500,
      color: 'from-amber-500 to-yellow-600',
      features: ['Bespoke Design', 'Virtual Try-On', 'Care Guide'],
    },
    {
      id: 20,
      name: 'Pulse',
      category: 'electronics',
      image: '/themes/pulse.jpg',
      rating: 4.8,
      downloads: 2600,
      color: 'from-blue-500 to-indigo-600',
      features: ['Performance Benchmarks', 'Gaming Mode', 'RGB Showcase'],
    },
  ];

  const filteredThemes =
    activeCategory === 'all' ? themes : themes.filter((theme) => theme.category === activeCategory);

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Choose Your Perfect
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Store Theme
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              20+ professionally designed themes for every industry. Fully customizable and mobile-optimized.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          {[
            { label: 'Free Themes', value: '20+' },
            { label: 'Average Rating', value: '4.9/5' },
            { label: 'Total Downloads', value: '50K+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon size={18} />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Themes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setHoveredTheme(theme.id)}
                onHoverEnd={() => setHoveredTheme(null)}
                className="group relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Theme Preview */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Placeholder with gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-80`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ShoppingBag size={80} className="text-white opacity-20" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredTheme === theme.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 z-10"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Eye size={20} className="text-gray-900" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Download size={20} className="text-white" />
                      </motion.button>
                    </motion.div>

                    {/* Badge */}
                    {theme.rating === 5.0 && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Sparkles size={12} />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Theme Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{theme.name}</h3>

                    {/* Rating & Downloads */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{theme.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500" suppressHydrationWarning>
                        {theme.downloads.toLocaleString()} downloads
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {theme.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-violet-600 rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                    >
                      Preview Theme
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            All themes are free, customizable, and optimized for conversions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Building Your Store
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
