'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate?: Date;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export default function CountdownTimer({
  targetDate,
  size = 'md',
  showIcon = true
}: CountdownTimerProps) {
  // Default to December 20, 2025 if no target date provided
  const [endDate] = useState(() => {
    if (targetDate) return targetDate;
    return new Date('2025-12-20T23:59:59');
  });

  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
      };
    }

    return { hours: 0, minutes: 0, seconds: 0, days: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const sizeClasses = {
    sm: {
      container: 'gap-2',
      box: 'w-12 h-12 text-lg',
      label: 'text-xs',
    },
    md: {
      container: 'gap-3',
      box: 'w-16 h-16 text-2xl',
      label: 'text-sm',
    },
    lg: {
      container: 'gap-4',
      box: 'w-20 h-20 md:w-24 md:h-24 text-3xl md:text-4xl',
      label: 'text-sm md:text-base',
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex flex-col items-center justify-center">
      {showIcon && (
        <div className="flex items-center gap-2">
          <Clock className="text-primary-500 animate-pulse" size={size === 'lg' ? 24 : 20} />
          <span className="text-gray-700 font-semibold">
            العرض ينتهي قريبًا!
          </span>
        </div>
      )}

      <div className={`flex items-center justify-center ${classes.container}`}>
        {/* Days */}
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <div className={`${classes.box} bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center font-bold shadow-lg`}>
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <span className={`${classes.label} text-gray-600 mt-1 font-medium`}>يوم</span>
          </div>
        )}

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className={`${classes.box} bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center font-bold shadow-lg`}>
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <span className={`${classes.label} text-gray-600 mt-1 font-medium`}>ساعة</span>
        </div>

        <span className="text-2xl md:text-3xl text-primary-500 font-bold -mt-6">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className={`${classes.box} bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center font-bold shadow-lg`}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <span className={`${classes.label} text-gray-600 mt-1 font-medium`}>دقيقة</span>
        </div>

        <span className="text-2xl md:text-3xl text-primary-500 font-bold -mt-6">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className={`${classes.box} bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center font-bold shadow-lg`}>
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <span className={`${classes.label} text-gray-600 mt-1 font-medium`}>ثانية</span>
        </div>
      </div>
    </div>
  );
}
