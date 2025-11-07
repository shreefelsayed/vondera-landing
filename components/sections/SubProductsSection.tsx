'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, CreditCard, Zap, Inbox, Users2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function SubProductsSection() {
  const locale = useLocale();
  const t = useTranslations('subProducts');
  const tCommon = useTranslations('common');
  const isRTL = locale === 'ar';

  const products = [
    {
      icon: TrendingUp,
      title: t('vmedia.title'),
      subtitle: t('vmedia.subtitle'),
      description: t('vmedia.description'),
      color: 'from-vmedia-500 to-vmedia-600',
      badge: 'Featured',
      badgeVariant: 'vmedia' as const,
      href: `/${locale}/vmedia`,
      large: true,
    },
    {
      icon: CreditCard,
      title: t('vpay.title'),
      subtitle: t('vpay.subtitle'),
      description: t('vpay.description'),
      color: 'from-blue-500 to-blue-600',
      href: '#vpay',
    },
    {
      icon: Zap,
      title: t('vfunnel.title'),
      subtitle: t('vfunnel.subtitle'),
      description: t('vfunnel.description'),
      color: 'from-orange-500 to-orange-600',
      href: '#vfunnel',
    },
    {
      icon: Inbox,
      title: t('vinbox.title'),
      subtitle: t('vinbox.subtitle'),
      description: t('vinbox.description'),
      color: 'from-purple-500 to-purple-600',
      href: '#vinbox',
    },
    {
      icon: Users2,
      title: t('vcommunity.title'),
      subtitle: t('vcommunity.subtitle'),
      description: t('vcommunity.description'),
      color: 'from-pink-500 to-pink-600',
      href: '#vcommunity',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
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
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={product.large ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
            >
              <Card hover={true} className={`h-full ${product.large ? 'border-2 border-vmedia-200' : ''}`}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    <product.icon size={32} />
                  </div>
                  {product.badge && (
                    <Badge variant={product.badgeVariant} className="mb-2 w-fit">
                      {product.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-gray-700">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={product.href} className="w-full">
                    <Button
                      variant={product.large ? 'vmedia' : 'outline'}
                      size="md"
                      className="w-full group"
                    >
                      {tCommon('learnMore')}
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
