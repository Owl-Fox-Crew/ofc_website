'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Header = dynamic(() => import('./Header'), { ssr: false });

export default function ClientHeader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Header />;
}
