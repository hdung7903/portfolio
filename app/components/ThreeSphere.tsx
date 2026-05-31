'use client';

import { useEffect, useRef } from 'react';

export default function ThreeSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    let rafId: number;
    let rendererDispose: (() => void) | null = null;

    (async () => {
      const THREE = await import('three');
      if (!mountRef.current) return; // unmounted while loading

      const w = el.offsetWidth || 220;
      const h = el.offsetHeight || 220;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 100);
      camera.position.z = 3.4;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      el.appendChild(renderer.domElement);

      rendererDispose = () => {
        renderer.dispose();
        const canvas = el.querySelector('canvas');
        if (canvas) el.removeChild(canvas);
      };

      // Outer wireframe
      const outer = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.15, 1),
        new THREE.MeshBasicMaterial({
          color: 0xd4ff00,
          wireframe: true,
          transparent: true,
          opacity: 0.22,
        }),
      );
      scene.add(outer);

      // Inner wireframe (smaller, counter-rotating)
      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.6, 0),
        new THREE.MeshBasicMaterial({
          color: 0xd4ff00,
          wireframe: true,
          transparent: true,
          opacity: 0.1,
        }),
      );
      scene.add(inner);

      const animate = () => {
        rafId = requestAnimationFrame(animate);
        outer.rotation.x += 0.003;
        outer.rotation.y += 0.005;
        inner.rotation.x -= 0.005;
        inner.rotation.y -= 0.007;
        renderer.render(scene, camera);
      };
      animate();
    })();

    return () => {
      cancelAnimationFrame(rafId);
      rendererDispose?.();
    };
  }, []);

  return <div ref={mountRef} className="three-sphere" aria-hidden="true" />;
}
