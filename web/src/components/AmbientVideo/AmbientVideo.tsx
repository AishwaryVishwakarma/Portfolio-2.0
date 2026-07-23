'use client';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import React from 'react';

interface Props {
  src: string;
  className?: string;
}

/**
 * Decorative, muted, looping background video. It is:
 *  - hidden from assistive tech (purely ambient),
 *  - skipped entirely when the user prefers reduced motion,
 *  - lazily loaded (`preload="none"`) so it never blocks first paint.
 */
const AmbientVideo: React.FC<Props> = ({src, className}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload='none'
      aria-hidden='true'
      tabIndex={-1}
    >
      <source src={src} type='video/mp4' />
    </video>
  );
};

export default AmbientVideo;
