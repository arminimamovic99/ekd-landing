import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export interface ChromaItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
  borderColor?: string;
  gradient?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      title: 'Callcenter-Lösungen',
      description: '24/7 Inbound- & Outbound-Support, Kundenbindung und technische Unterstützung für internationale Kunden.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.92), rgba(150, 181, 173, 0.88))'
    },
    {
      title: 'Digitales Marketing',
      description: 'SEO, Social Media und Content-Marketing zur Stärkung Ihrer Marke und Steigerung der Kundenbindung.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.92), rgba(150, 181, 173, 0.88))'
    },
    {
      title: 'Unterstützung bei der Kundenakquise',
      description: 'Gezielte, datenbasierte Kommunikation, um relevante Geschäftskontakte und Meetings für Ihr Team zu ermöglichen.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.92), rgba(150, 181, 173, 0.88))'
    },
    {
      title: 'Backoffice-Unterstützung',
      description: 'Effiziente Datenverarbeitung, administrative Unterstützung und Optimierung interner Prozesse.',
      borderColor: '#8ab2a7',
      gradient: 'linear-gradient(160deg, rgba(188, 211, 205, 0.92), rgba(150, 181, 173, 0.88))'
    }
  ];
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--cols': columns,
          '--rows': rows
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          style={
            {
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient,
            } as React.CSSProperties
          }
        >
          <div className="chroma-icon-wrapper" aria-hidden="true">
            {c.icon}
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            <p className="role">{c.description}</p>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
