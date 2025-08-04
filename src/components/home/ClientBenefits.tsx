'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Import dinámico correctamente ajustado para extraer solo el componente
const Benefits = dynamic(() => import('./Benefits').then(mod => mod.Benefits), { ssr: false });

export default function ClientBenefits(props: Parameters<typeof Benefits>[0]) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Benefits {...props} />;
}
