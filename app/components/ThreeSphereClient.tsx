'use client';

import dynamic from 'next/dynamic';

// Dynamic import with ssr:false must live inside a Client Component
const ThreeSphere = dynamic(() => import('./ThreeSphere'), { ssr: false });

export default function ThreeSphereClient() {
  return <ThreeSphere />;
}
