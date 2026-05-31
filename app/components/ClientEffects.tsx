'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    /* ── 1. Hero dot-grid mouse glow ──────────────────── */
    const hero = document.querySelector<HTMLElement>('.hero-section');

    const heroGlow = (e: MouseEvent) => {
      if (!hero) return;
      const { left, top } = hero.getBoundingClientRect();
      hero.style.setProperty('--mouse-x', `${e.clientX - left}px`);
      hero.style.setProperty('--mouse-y', `${e.clientY - top}px`);
    };
    hero?.addEventListener('mousemove', heroGlow);

    /* ── 2. Magnetic glow on interactive elements ─────── */
    const attachButtonGlow = () => {
      document
        .querySelectorAll<HTMLElement>('.btn-primary,.btn-ghost,.plink,.clink')
        .forEach((btn) => {
          if (btn.dataset.glowReady) return;
          btn.dataset.glowReady = '1';
          btn.addEventListener('mousemove', (e: MouseEvent) => {
            const { left, top } = btn.getBoundingClientRect();
            btn.style.setProperty('--btn-x', `${e.clientX - left}px`);
            btn.style.setProperty('--btn-y', `${e.clientY - top}px`);
          });
        });
    };
    attachButtonGlow();

    /* ── 3. 3D tilt on process & service cards ────────── */
    const tiltCards = document.querySelectorAll<HTMLElement>(
      '.process-card,.service-card',
    );

    const cleanups: Array<() => void> = [];

    tiltCards.forEach((card) => {
      // inject glare
      const glare = document.createElement('div');
      glare.className = 'card-glare';
      glare.setAttribute('aria-hidden', 'true');
      card.prepend(glare);

      const move = (e: MouseEvent) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        card.style.transform = `perspective(800px) rotateX(${(y - 0.5) * 9}deg) rotateY(${(x - 0.5) * -9}deg) scale3d(1.012,1.012,1.012)`;
        glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%,rgba(212,255,0,0.09) 0%,transparent 60%)`;
      };

      const enter = () => { card.style.transition = 'none'; };

      const leave = () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1),background .2s';
        card.style.transform = '';
        glare.style.background = 'transparent';
        setTimeout(() => { card.style.transition = ''; }, 500);
      };

      card.addEventListener('mousemove', move);
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);

      cleanups.push(() => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
        if (glare.parentNode) glare.parentNode.removeChild(glare);
      });
    });

    return () => {
      hero?.removeEventListener('mousemove', heroGlow);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
