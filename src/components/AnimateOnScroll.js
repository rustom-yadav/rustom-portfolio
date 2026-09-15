'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Wraps children and reveals them with a CSS animation when scrolled into view.
 *
 * @param {'up'|'left'|'right'|'scale'} direction - animation direction
 * @param {number} delay - delay in ms before animation starts (used for stagger)
 * @param {number} threshold - IntersectionObserver threshold (0-1)
 * @param {string} className - additional className for the wrapper
 */
export default function AnimateOnScroll({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseClass = {
    up: 'scroll-reveal',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
  }[direction];

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${revealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
