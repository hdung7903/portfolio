'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(lerp);
    };

    const onEnter = () => { document.documentElement.dataset.cursorHover = 'true'; };
    const onLeave = () => { delete document.documentElement.dataset.cursorHover; };

    const attachHover = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        if (!(el as HTMLElement).dataset.cursorAttached) {
          (el as HTMLElement).dataset.cursorAttached = 'true';
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
        }
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(lerp);
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
