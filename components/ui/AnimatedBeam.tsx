'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = '#d1d5db',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#7c3aed',
  gradientStopColor = '#a855f7',
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState('');

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
        const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
        const toX = toRect.left - containerRect.left + toRect.width / 2;
        const toY = toRect.top - containerRect.top + toRect.height / 2;

        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2 + curvature;

        const path = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
        setPathD(path);
      }
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [containerRef, fromRef, toRef, curvature]);

  return (
    <svg
      className={className}
      fill="none"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    >
      <defs>
        <linearGradient id={`gradient-${id}`} gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="1" stopColor={gradientStopColor} />
          <stop offset="1" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} />
      <motion.path
        d={pathD}
        stroke={`url(#gradient-${id})`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: reverse ? 1 : 0 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: 0,
          ease: 'linear',
        }}
      />
    </svg>
  );
}
