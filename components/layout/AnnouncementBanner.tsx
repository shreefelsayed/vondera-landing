'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Megaphone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const locale = useLocale();
  const t = useTranslations('mediaBuyerBanner');
  const isRTL = locale === 'ar';

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-vmedia-500 via-vmedia-600 to-primary-600 text-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <Megaphone size={20} className="flex-shrink-0" />
            <p className="text-sm md:text-base font-medium">
              <span className="font-bold">{t('title')}</span> {t('subtitle')}
            </p>
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <Link
              href={`/${locale}/vmedia`}
              className="bg-white text-vmedia-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {t('cta')}
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close banner"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
