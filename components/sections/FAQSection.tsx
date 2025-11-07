'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const faqs = [
  {
    question: 'What is Vondera?',
    answer: 'Vondera is an all-in-one e-commerce platform designed specifically for the MENA region. It provides everything you need to build, manage, and scale your online store.',
  },
  {
    question: 'How is Vondera different from Shopify?',
    answer: 'Vondera is tailored for the MENA market with local payment methods, Arabic language support, lower pricing, and unique features like VMedia marketplace connecting you with media buyers.',
  },
  {
    question: 'What is VMedia?',
    answer: 'VMedia is our media buying marketplace that connects merchants with professional media buyers. Merchants can find experts to run their ads, while media buyers can offer their services to 10,000+ active stores.',
  },
  {
    question: 'Do you have mobile apps?',
    answer: 'Yes! We have full-featured mobile apps for both iOS and Android, allowing you to manage your store, process orders, and chat with customers from anywhere.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'Through VPay, we support all major credit cards (VISA, Mastercard, AMEX) and local mobile wallets like Vodafone Cash, Orange Money, InstaPay, and WE Pay.',
  },
  {
    question: 'Is there customer support available?',
    answer: 'Yes, we provide 24/7 customer support via live chat, email, and phone to help you with any questions or issues.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const locale = useLocale();
  const t = useTranslations('faq');
  const isRTL = locale === 'ar';

  return (
    <section className="py-20 md:py-32 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container size="md">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-primary-300 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary-500 flex-shrink-0 transition-transform ${
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
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
