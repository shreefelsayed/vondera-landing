'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileCheck, UserCheck, Globe, Award } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function SecuritySection() {
  const features = [
    {
      icon: Shield,
      title: 'SSL Encryption',
      description: '256-bit SSL encryption protects all data transmitted between your store and customers',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Lock,
      title: 'PCI DSS Compliant',
      description: 'Level 1 PCI DSS compliant payment processing ensures secure credit card transactions',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'GDPR and CCPA compliant data handling with customer privacy at the forefront',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Server,
      title: '99.9% Uptime',
      description: 'Enterprise-grade infrastructure with redundant servers and automatic failover',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: FileCheck,
      title: 'Regular Audits',
      description: 'Third-party security audits and penetration testing conducted quarterly',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: UserCheck,
      title: '2FA Authentication',
      description: 'Two-factor authentication and role-based access control for your team',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Content delivery network ensures fast, secure access from anywhere in the world',
      color: 'from-teal-500 to-green-600',
    },
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'ISO 27001 certified information security management system',
      color: 'from-yellow-500 to-amber-600',
    },
  ];

  const certifications = [
    { name: 'PCI DSS Level 1', logo: '🔒' },
    { name: 'ISO 27001', logo: '🏆' },
    { name: 'GDPR Compliant', logo: '🇪🇺' },
    { name: 'SOC 2 Type II', logo: '✓' },
  ];

  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '256-bit', label: 'SSL Encryption' },
    { value: '24/7', label: 'Security Monitoring' },
    { value: '0', label: 'Data Breaches' },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
              <Shield className="w-5 h-5 text-violet-600" />
              <span className="text-violet-600 font-semibold">Enterprise-Grade Security</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Data is Safe
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                & Secure with Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take security seriously. Bank-level encryption and compliance certifications protect your business
              and customer data.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-violet-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Compliance & Certifications
          </h3>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:border-violet-200 transition-colors"
              >
                <div className="text-4xl mb-3">{cert.logo}</div>
                <div className="font-semibold text-gray-900">{cert.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl p-6 border border-violet-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Continuous Security Monitoring</h4>
                <p className="text-gray-600 text-sm">
                  Our dedicated security team monitors systems 24/7/365, with automated threat detection and
                  immediate incident response protocols. We conduct regular penetration testing and security
                  audits to ensure your data remains protected.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Trusted by 10,000+ merchants to keep their data secure</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['Encrypted Payments', 'Secure Checkout', 'Data Protection', 'Privacy Guaranteed'].map(
              (badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow border border-gray-200"
                >
                  <Shield size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-gray-700">{badge}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
