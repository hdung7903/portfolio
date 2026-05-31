'use client';

import { useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ProjectCard({ children }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rx = (y - 0.5) * 13;
    const ry = (x - 0.5) * -13;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.018, 1.018, 1.018)`;
    if (glareRef.current) {
      glareRef.current.style.background =
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(212,255,0,0.11) 0%, transparent 60%)`;
    }
  };

  const onEnter = () => {
    if (cardRef.current) cardRef.current.style.transition = 'none';
  };

  const onLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), background 0.2s';
      card.style.transform = '';
      setTimeout(() => { if (card) card.style.transition = ''; }, 550);
    }
    if (glareRef.current) glareRef.current.style.background = 'transparent';
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div ref={glareRef} className="card-glare" aria-hidden="true" />
      {children}
    </div>
  );
}
