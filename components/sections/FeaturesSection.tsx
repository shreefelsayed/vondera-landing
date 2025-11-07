'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Package, Truck, BarChart3, Megaphone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function FeaturesSection() {
  const locale = useLocale();
  const t = useTranslations('features');
  const isRTL = locale === 'ar';

  const features = [
    { icon: Globe, title: t('websiteBuilder.title'), description: t('websiteBuilder.description'), color: 'text-blue-600' },
    { icon: ShoppingCart, title: t('multiChannel.title'), description: t('multiChannel.description'), color: 'text-purple-600' },
    { icon: Package, title: t('inventory.title'), description: t('inventory.description'), color: 'text-green-600' },
    { icon: Truck, title: t('orderProcessing.title'), description: t('orderProcessing.description'), color: 'text-orange-600' },
    { icon: BarChart3, title: t('analytics.title'), description: t('analytics.description'), color: 'text-pink-600' },
    { icon: Megaphone, title: t('marketing.title'), description: t('marketing.description'), color: 'text-indigo-600' },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
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
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={true} className="h-full">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon size={28} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
