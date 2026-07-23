'use client';

import React from 'react';

/**
 * Observes the direct children of a container element and toggles a "slide in"
 * class + `data-is-visible` attribute as each one enters/leaves the viewport.
 *
 * Extracted from the near-identical IntersectionObserver logic that lived in
 * both the Experience and Projects sections.
 *
 * @param slideInClass the CSS-module class to add while a child is in view
 * @param options      IntersectionObserver options (threshold, rootMargin, …)
 * @returns a ref to attach to the container element
 */
const useSlideInOnView = <T extends HTMLElement = HTMLUListElement>(
  slideInClass: string,
  options?: IntersectionObserverInit
): React.RefObject<T | null> => {
  const containerRef = React.useRef<T>(null);

  React.useEffect(() => {
    const cards = Array.from(containerRef.current?.children ?? []);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting;
        entry.target.setAttribute('data-is-visible', String(isVisible));
        entry.target.classList.toggle(slideInClass, isVisible);
      });
    }, options);

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
    // `options` is expected to be a stable literal from the caller.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideInClass]);

  return containerRef;
};

export default useSlideInOnView;
