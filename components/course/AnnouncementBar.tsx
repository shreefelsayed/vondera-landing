'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function AnnouncementBar() {
  const t = useTranslations('course.announcementBar');
  const locale = useLocale();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-12-20T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdet6LOSWvwKWwBfpjcGM0jRx3Cjg8S6U_Kd4h1u9p7HMX6Uw/viewform', '_blank');
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left Side - Message */}
          <div className="flex items-center gap-3 flex-1">
            <Clock className="w-5 h-5 animate-pulse flex-shrink-0" />
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <span className="font-bold">{t('message')}</span>
              <span className="hidden md:inline">{t('subMessage')}</span>
            </div>
          </div>

          {/* Center - Countdown Timer */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex gap-1 md:gap-2">
              {/* Days */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[40px] md:min-w-[50px] text-center">
                <div className="text-lg md:text-xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-[8px] md:text-xs opacity-90">{t('days')}</div>
              </div>

              <div className="text-xl md:text-2xl font-bold self-center">:</div>

              {/* Hours */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[40px] md:min-w-[50px] text-center">
                <div className="text-lg md:text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[8px] md:text-xs opacity-90">{t('hours')}</div>
              </div>

              <div className="text-xl md:text-2xl font-bold self-center">:</div>

              {/* Minutes */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[40px] md:min-w-[50px] text-center">
                <div className="text-lg md:text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[8px] md:text-xs opacity-90">{t('minutes')}</div>
              </div>

              <div className="text-xl md:text-2xl font-bold self-center hidden md:block">:</div>

              {/* Seconds - Hidden on mobile */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[40px] md:min-w-[50px] text-center hidden md:block">
                <div className="text-lg md:text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[8px] md:text-xs opacity-90">{t('seconds')}</div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleCTAClick}
              className="hidden md:inline-block bg-white text-primary-600 hover:bg-gray-100 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105"
            >
              {t('cta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
