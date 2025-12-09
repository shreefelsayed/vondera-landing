'use client';

import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function FooterAnnouncementBar() {
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl" dir="rtl">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {/* Days */}
              <div className="text-center min-w-[60px]">
                <div className="text-3xl md:text-4xl font-bold text-red-600">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600">يوم</div>
              </div>

              <div className="text-3xl md:text-4xl font-bold text-red-600 self-start mt-1">:</div>

              {/* Hours */}
              <div className="text-center min-w-[60px]">
                <div className="text-3xl md:text-4xl font-bold text-red-600">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600">ساعة</div>
              </div>

              <div className="text-3xl md:text-4xl font-bold text-red-600 self-start mt-1">:</div>

              {/* Minutes */}
              <div className="text-center min-w-[60px]">
                <div className="text-3xl md:text-4xl font-bold text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600">دقيقة</div>
              </div>

              <div className="text-3xl md:text-4xl font-bold text-red-600 self-start mt-1">:</div>

              {/* Seconds */}
              <div className="text-center min-w-[60px]">
                <div className="text-3xl md:text-4xl font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600">ثانية</div>
              </div>
            </div>
          </div>

          {/* Yellow CTA Button */}
          <button
            onClick={handleCTAClick}
            className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Zap size={24} />
            <div className="flex flex-col items-start">
              <span>اشترك الآن مجانًا</span>
              <span className="text-sm line-through opacity-75">بدلاً من 5,000 جنيه</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
