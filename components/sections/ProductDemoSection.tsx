'use client';

import { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Package, BarChart3, Users, MessageSquare, Zap, CheckCircle2, Clock, TrendingUp, Layout, GitBranch, Globe, Truck, CreditCard, Target } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import BlurText from '@/components/BlurText';
import { AnimatedList } from '@/components/ui/animated-list';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { cn } from '@/lib/utils';

// Order notification data
const orderNotifications = [
  { id: 1, customer: 'Ahmed Hassan', amount: '245 EGP', product: 'Nike Air Max', time: 'Just now' },
  { id: 2, customer: 'Sara Mohammed', amount: '189 EGP', product: 'Wireless Headphones', time: '2 min ago' },
  { id: 3, customer: 'Khaled Ali', amount: '567 EGP', product: 'Smart Watch Pro', time: '5 min ago' },
  { id: 4, customer: 'Layla Ibrahim', amount: '320 EGP', product: 'Designer Handbag', time: '8 min ago' },
  { id: 5, customer: 'Omar Youssef', amount: '445 EGP', product: 'Gaming Mouse', time: '12 min ago' },
  { id: 6, customer: 'Fatima Abdullah', amount: '890 EGP', product: 'Premium Perfume', time: '15 min ago' },
];

// Circle component for animated beam
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

// Social Media Icons with real colors
const SocialIcons = {
  whatsapp: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#25D366"/>
      <path d="M35.9 12.1C33.3 9.5 29.9 8 26.3 8 19.3 8 13.6 13.7 13.6 20.7c0 2.1.5 4.1 1.6 5.9L13 35l8.6-2.3c1.7.9 3.7 1.4 5.7 1.4 7 0 12.7-5.7 12.7-12.7 0-3.4-1.3-6.6-3.7-9zm-9.6 19.6c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.9 1 1-3.7-.3-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9s2.9 4.4 2.9 7.1c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2-.3.3-.6.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.2-.7c.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" fill="white"/>
    </svg>
  ),
  messenger: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#0084FF"/>
      <path d="M24 8c-8.8 0-16 6.8-16 15.2 0 4.8 2.4 9.1 6.2 11.9V40l4.8-2.6c1.3.4 2.6.6 4 .6 8.8 0 16-6.8 16-15.2S32.8 8 24 8zm1.6 20.5l-4.1-4.4-8 4.4 8.8-9.4 4.2 4.4 7.9-4.4-8.8 9.4z" fill="white"/>
    </svg>
  ),
  instagram: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%">
          <stop offset="0%" stopColor="#FDF497"/>
          <stop offset="5%" stopColor="#FDF497"/>
          <stop offset="45%" stopColor="#FD5949"/>
          <stop offset="60%" stopColor="#D6249F"/>
          <stop offset="90%" stopColor="#285AEB"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#ig-grad)"/>
      <path d="M24 14c-3.3 0-3.7 0-5 .1-1.3.1-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4s-1.1 1.4-1.4 2.2c-.3.8-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2s-1.4-1.1-2.2-1.4c-.8-.3-1.7-.5-3-.6-1.3-.1-1.7-.1-5-.1zm0 1.8c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9s.7.9.9 1.4c.2.4.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.9.7-1.4.9c-.4.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9s-.7-.9-.9-1.4c-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4s.9-.7 1.4-.9c.4-.2 1.1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1z" fill="white"/>
      <path d="M24 18.3c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 9.4c-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.7 3.7-3.7 3.7z" fill="white"/>
      <circle cx="30" cy="18" r="1.3" fill="white"/>
    </svg>
  ),
  facebook: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#1877F2"/>
      <path d="M26.5 38V26h4l.6-4.7h-4.6v-3c0-1.4.4-2.3 2.4-2.3h2.5V11.4c-.4-.1-1.9-.2-3.6-.2-3.6 0-6 2.2-6 6.2v3.5h-4V26h4v12h4.7z" fill="white"/>
    </svg>
  ),
  twitter: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#000000"/>
      <path d="M36.6 15.8c-.9.4-1.9.7-2.9.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" fill="white"/>
    </svg>
  ),
  tiktok: () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#000000"/>
      <path d="M31.5 13.5c-.6 0-1.1.1-1.6.3-.1-1.4-.7-2.7-1.6-3.6-.9-.9-2.2-1.4-3.5-1.4v2.8c.8 0 1.6.3 2.1.9.6.6.9 1.3.9 2.1h2.8c0 2.3 1.9 4.2 4.2 4.2v2.8c-2.5 0-4.8-1.4-5.9-3.5v7.8c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.7 2.9-6.8 6.6-7v2.9c-2.1.2-3.8 1.9-3.8 4.1 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V8.8h2.8c0 .2 0 .4.1.6.3 1.9 1.6 3.6 3.4 4.3-.1-.1-.1-.2-.1-.2z" fill="#EE1D52"/>
      <path d="M21.9 23.8c-2.1.2-3.8 1.9-3.8 4.1 0 2.3 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2V8.8h2.8c0 .2 0 .4.1.6-1.8-.8-3.1-2.4-3.4-4.3 0-.2-.1-.4-.1-.6h-2.8v19.1c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-2.2 1.7-3.9 3.8-4.1v-2.9c-3.7.2-6.6 3.3-6.6 7 0 3.9 3.1 7 7 7s7-3.1 7-7v-7.8c1.1 2.1 3.4 3.5 5.9 3.5v-2.8c-2.3 0-4.2-1.9-4.2-4.2h-2.8c0-.8-.3-1.5-.9-2.1-.6-.6-1.3-.9-2.1-.9v-2.8c1.3 0 2.6.5 3.5 1.4.9.9 1.5 2.2 1.6 3.6.5-.2 1-.3 1.6-.3v7.8z" fill="#69C9D0"/>
    </svg>
  ),
};

export default function ProductDemoSection() {
  const [activeTab, setActiveTab] = useState(0);

  // Refs for animated beams in Social Inbox
  const containerRef = useRef<HTMLDivElement>(null);
  const vonderaRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const messengerRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const facebookRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const tiktokRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: 0,
      icon: Layout,
      title: 'Website Builder',
      description: 'Create stunning online stores',
      subtitle: 'Build your dream website without coding',
      features: [
        { text: 'Drag & drop builder', icon: Zap },
        { text: 'Mobile responsive', icon: CheckCircle2 },
        { text: 'SEO optimized', icon: TrendingUp },
        { text: 'Custom templates', icon: Layout }
      ],
      color: 'from-violet-500 to-purple-600',
      demoGif: '/demo/themebuilder.gif'
    },
    {
      id: 1,
      icon: GitBranch,
      title: 'Funnel Builder',
      description: 'Convert visitors into customers',
      subtitle: 'Build high-converting sales funnels',
      features: [
        { text: 'Pre-built templates', icon: Layout },
        { text: 'A/B testing', icon: BarChart3 },
        { text: 'Analytics tracking', icon: TrendingUp },
        { text: 'Upsell & downsell', icon: Zap }
      ],
      color: 'from-blue-500 to-cyan-600',
      demoGif: '/demo/funnelbuilder.gif'
    },
    {
      id: 2,
      icon: MessageSquare,
      title: 'Social Inbox',
      description: 'Manage all conversations',
      subtitle: 'Unified inbox for all social media',
      features: [
        { text: 'Multi-platform support', icon: MessageSquare },
        { text: 'AI-powered responses', icon: Zap },
        { text: 'Team collaboration', icon: Users },
        { text: 'Auto-responses', icon: CheckCircle2 }
      ],
      color: 'from-orange-500 to-amber-600',
      demoGif: '/demo/vinbox.gif'
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: 'Orders',
      description: 'Complete order management system',
      subtitle: 'Process, track, and fulfill orders effortlessly',
      features: [
        { text: 'Real-time order tracking', icon: Clock },
        { text: 'Bulk order processing', icon: CheckCircle2 },
        { text: 'Automated fulfillment', icon: Zap },
        { text: 'Custom statuses & workflows', icon: TrendingUp }
      ],
      color: 'from-green-500 to-emerald-600',
      demoGif: '/demo/orders.gif'
    },
    {
      id: 4,
      icon: Users,
      title: 'Team Management',
      description: 'Collaborate with your team',
      subtitle: 'Manage roles, permissions & productivity',
      features: [
        { text: 'Role-based access', icon: Users },
        { text: 'Activity tracking', icon: BarChart3 },
        { text: 'Performance metrics', icon: TrendingUp },
        { text: 'Team chat', icon: MessageSquare }
      ],
      color: 'from-pink-500 to-rose-600',
      demoGif: '/demo/team.gif'
    },
    {
      id: 5,
      icon: Package,
      title: 'Inventory',
      description: 'Smart stock management',
      subtitle: 'Never run out of stock again',
      features: [
        { text: 'Multi-warehouse support', icon: Package },
        { text: 'Low stock alerts', icon: Clock },
        { text: 'Batch tracking', icon: CheckCircle2 },
        { text: 'Auto-reordering', icon: Zap }
      ],
      color: 'from-indigo-500 to-purple-600',
      demoGif: '/demo/inventory.gif'
    },
    {
      id: 6,
      icon: Users,
      title: 'Community',
      description: 'Build a loyal community',
      subtitle: 'Engage and grow your audience',
      features: [
        { text: 'Member forums', icon: MessageSquare },
        { text: 'Exclusive content', icon: Zap },
        { text: 'Badges & rewards', icon: CheckCircle2 },
        { text: 'Events & webinars', icon: TrendingUp }
      ],
      color: 'from-teal-500 to-cyan-600',
      demoGif: '/demo/commuinty.gif'
    },
    {
      id: 7,
      icon: Globe,
      title: 'Domains',
      description: 'Manage your domains',
      subtitle: 'Connect custom domains easily',
      features: [
        { text: 'Custom domain setup', icon: Globe },
        { text: 'SSL certificates', icon: CheckCircle2 },
        { text: 'DNS management', icon: Zap },
        { text: 'Subdomain support', icon: TrendingUp }
      ],
      color: 'from-cyan-500 to-blue-600',
      demoGif: '/demo/domain.gif'
    },
    {
      id: 8,
      icon: Truck,
      title: 'Shipping',
      description: 'Smart shipping solutions',
      subtitle: 'Automate your shipping process',
      features: [
        { text: 'Multi-carrier integration', icon: Truck },
        { text: 'Real-time tracking', icon: Clock },
        { text: 'Automated labels', icon: Zap },
        { text: 'Rate comparison', icon: TrendingUp }
      ],
      color: 'from-amber-500 to-orange-600',
      demoGif: '/demo/shipping.gif'
    },
    {
      id: 9,
      icon: CreditCard,
      title: 'Payments',
      description: 'Secure payment processing',
      subtitle: 'Accept payments from anywhere',
      features: [
        { text: 'Multiple payment methods', icon: CreditCard },
        { text: 'Secure transactions', icon: CheckCircle2 },
        { text: 'Instant payouts', icon: Zap },
        { text: 'Fraud protection', icon: TrendingUp }
      ],
      color: 'from-emerald-500 to-green-600',
      demoGif: '/demo/payments.gif'
    },
    {
      id: 10,
      icon: Target,
      title: 'Media Buyers',
      description: 'Scale your ad campaigns',
      subtitle: 'Tools built for media buyers',
      features: [
        { text: 'Campaign tracking', icon: BarChart3 },
        { text: 'ROI analytics', icon: TrendingUp },
        { text: 'Multi-pixel support', icon: Target },
        { text: 'A/B testing', icon: Zap }
      ],
      color: 'from-purple-500 to-pink-600',
      demoGif: '/demo/mediabuyers.gif'
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      <Container className="w-full">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                All in One Platform
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our powerful features designed to streamline your e-commerce operations
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={18} />
                <span className="text-sm">{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Left - Centered Text */}
              <div className="flex items-center justify-center">
                <div className="text-center max-w-lg space-y-3">
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${tabs[activeTab].color} items-center justify-center mb-3 shadow-lg`}>
                    {(() => {
                      const Icon = tabs[activeTab].icon;
                      return <Icon className="w-7 h-7 text-white" />;
                    })()}
                  </div>
                  <BlurText text={tabs[activeTab].title} className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" delay={100} />
                  <BlurText text={tabs[activeTab].description} className="text-lg text-gray-600 mb-1.5" delay={150} />
                  <BlurText text={tabs[activeTab].subtitle} className="text-sm text-gray-500" delay={200} />
                </div>
              </div>

              {/* Right - Demo Preview */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Demo Card */}
                <div className="relative rounded-2xl shadow-2xl bg-white border border-gray-200">
                  {/* Browser Chrome */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="flex-1 mx-4 bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 flex items-center shadow-inner">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate">app.vondera.com/{tabs[activeTab].title.toLowerCase()}</span>
                    </div>
                  </div>

                  {/* Demo Content */}
                  {tabs[activeTab].demoGif ? (
                    <div className="relative bg-gray-50">
                      <Image
                        src={tabs[activeTab].demoGif}
                        alt={`${tabs[activeTab].title} Demo`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                      />
                      {/* Overlay badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs font-semibold text-gray-700">Live Demo</span>
                        </div>
                      </div>

                      {/* Animated Order Notifications - Only for Orders tab */}
                      {activeTab === 3 && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 max-h-[500px] overflow-hidden mt-12">
                          <AnimatedList delay={2000}>
                            {orderNotifications.map((order) => (
                              <div
                                key={order.id}
                                className="bg-white rounded-xl shadow-2xl p-4 border border-gray-200 w-full"
                              >
                                <div className="flex items-center gap-3">
                                  {/* Vondera Logo */}
                                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-md p-1">
                                    <Image 
                                      src="/logo.webp" 
                                      alt="Vondera" 
                                      width={48} 
                                      height={48}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                      <p className="font-semibold text-gray-900 text-sm truncate">
                                        {order.customer}
                                      </p>
                                      <span className="text-xs text-gray-500 whitespace-nowrap">{order.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 truncate mb-1">{order.product}</p>
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-bold text-violet-600">{order.amount}</span>
                                      <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-xs text-green-600 font-medium">New Order</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </AnimatedList>
                        </div>
                      )}

                      {/* Animated Beam for Social Inbox - Only for Social Inbox tab */}
                      {activeTab === 2 && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-80 max-h-[400px] overflow-visible" ref={containerRef}>
                          <div className="flex size-full max-h-[350px] max-w-lg flex-col items-stretch justify-between gap-8">
                            <div className="flex flex-row items-center justify-between">
                              <Circle ref={whatsappRef}>
                                <SocialIcons.whatsapp />
                              </Circle>
                              <Circle ref={messengerRef}>
                                <SocialIcons.messenger />
                              </Circle>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                              <Circle ref={instagramRef}>
                                <SocialIcons.instagram />
                              </Circle>
                              <Circle ref={vonderaRef} className="size-20 border-4 border-violet-200 shadow-xl">
                                <Image 
                                  src="/logo.webp" 
                                  alt="Vondera" 
                                  width={64} 
                                  height={64}
                                  className="w-full h-full object-contain"
                                />
                              </Circle>
                              <Circle ref={facebookRef}>
                                <SocialIcons.facebook />
                              </Circle>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                              <Circle ref={twitterRef}>
                                <SocialIcons.twitter />
                              </Circle>
                              <Circle ref={tiktokRef}>
                                <SocialIcons.tiktok />
                              </Circle>
                            </div>
                          </div>

                          {/* Animated Beams with dark colors */}
                          <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={whatsappRef}
                            toRef={vonderaRef}
                            curvature={-75}
                            endYOffset={-10}
                            pathColor="#1f2937"
                            gradientStartColor="#1f2937"
                            gradientStopColor="#4b5563"
                          />
                          <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={instagramRef}
                            toRef={vonderaRef}
                            pathColor="#1f2937"
                            gradientStartColor="#1f2937"
                            gradientStopColor="#4b5563"
                          />
                          <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={twitterRef}
                            toRef={vonderaRef}
                            curvature={75}
                            endYOffset={10}
                            pathColor="#1f2937"
                            gradientStartColor="#1f2937"
                            gradientStopColor="#4b5563"
                          />
                          <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={messengerRef}
                            toRef={vonderaRef}
                            curvature={-75}
                            endYOffset={-10}
                            reverse
                            pathColor="#1f2937"
                            gradientStartColor="#1f2937"
                            gradientStopColor="#4b5563"
                          />
                          <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={facebookRef}
                            toRef={vonderaRef}
                            reverse
                            pathColor="#1f2937"
                            gradientStartColor="#1f2937"
                            gradientStopColor="#4b5563"
                          />
                          <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={tiktokRef}
                            toRef={vonderaRef}
                            curvature={75}
                            endYOffset={10}
                            reverse
                            pathColor="#1f2937"
                            gradientStartColor="#1f2937"
                            gradientStopColor="#4b5563"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${tabs[activeTab].color} p-8 h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                          backgroundSize: '32px 32px'
                        }}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center text-white relative z-10">
                        {(() => {
                          const Icon = tabs[activeTab].icon;
                          return <Icon size={60} className="mx-auto mb-4 opacity-80 drop-shadow-lg" />;
                        })()}
                        <div className="text-2xl font-bold mb-2 drop-shadow-md">{tabs[activeTab].title} Dashboard</div>
                        <div className="text-base opacity-90 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                          Interactive demo coming soon
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
