'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, CreditCard, Zap, Inbox, Users2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

export default function SubProductsSection() {
  const locale = useLocale();
  const t = useTranslations('subProducts');
  const isRTL = locale === 'ar';

  const features = [
    {
      Icon: TrendingUp,
      name: t('vmedia.title'),
      description: t('vmedia.description'),
      href: `/${locale}/vmedia`,
      cta: t('vmedia.subtitle'),
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
          </div>
        </div>
      ),
    },
    {
      Icon: CreditCard,
      name: t('vpay.title'),
      description: t('vpay.description'),
      href: '#vpay',
      cta: t('vpay.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      ),
    },
    {
      Icon: Zap,
      name: t('vfunnel.title'),
      description: t('vfunnel.description'),
      href: '#vfunnel',
      cta: t('vfunnel.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
          </div>
        </div>
      ),
    },
    {
      Icon: Inbox,
      name: t('vinbox.title'),
      description: t('vinbox.description'),
      href: '#vinbox',
      cta: t('vinbox.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      ),
    },
    {
      Icon: Users2,
      name: t('vcommunity.title'),
      description: t('vcommunity.description'),
      href: '#vcommunity',
      cta: t('vcommunity.subtitle'),
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      ),
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

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}
