'use client';
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

export function MotionProvider({ children }: { children: ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
