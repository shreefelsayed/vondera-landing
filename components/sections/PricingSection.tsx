'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function PricingSection() {
  const locale = useLocale();
  const t = useTranslations('pricing');
  const isRTL = locale === 'ar';

  const plans = [
    {
      name: 'Starter',
      price: '300',
      currency: 'EGP',
      features: [
        'Up to 100 products',
        '1 custom theme',
        'Basic analytics',
        'Social media integration',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: '600',
      currency: 'EGP',
      popular: true,
      features: [
        'Unlimited products',
        'All 20 premium themes',
        'Advanced analytics & AI insights',
        'VMedia marketplace access',
        'VPay integration',
        'Priority 24/7 support',
        'Mobile app access',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Custom development',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
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
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              {t('subtitle')}
            </p>
            <p className="text-sm text-gray-500">{t('guarantee')}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.popular ? 'md:-mt-4' : ''}
            >
              <Card hover={true} className={`h-full relative ${plan.popular ? 'border-2 border-primary-500 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="success" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mb-2">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    ) : (
                      <>
                        <div className="text-5xl font-bold text-gray-900">
                          {plan.price}
                          <span className="text-xl text-gray-600 ml-1">{plan.currency}</span>
                        </div>
                        <div className="text-gray-600 mt-1">{t('perMonth')}</div>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {t('cta')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
