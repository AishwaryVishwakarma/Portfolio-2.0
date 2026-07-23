'use client';

import useMediaQuery from './useMediaQuery';

/**
 * Returns `true` when the user has requested reduced motion at the OS level.
 * Use it to skip decorative animations, autoplaying video, etc.
 */
const usePrefersReducedMotion = (): boolean =>
  useMediaQuery('(prefers-reduced-motion: reduce)');

export default usePrefersReducedMotion;
