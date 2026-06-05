'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/#skills',     label: 'Stack',      id: 'skills' },
  { href: '/#experience', label: 'Experience', id: 'experience' },
  { href: '/#projects',   label: 'Work',        id: 'projects' },
  { href: '/#process',    label: 'Process',     id: 'process' },
  { href: '/#services',   label: 'Services',    id: 'services' },
  { href: '/#faq',        label: 'FAQ',         id: 'faq' },
  { href: '/#contact',    label: 'Contact',     id: 'contact' },
];

export default function NavLinks() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-links">
      {NAV_LINKS.map(({ href, label, id }) => (
        <a
          key={id}
          href={href}
          className={activeId === id ? 'nav-active' : undefined}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
