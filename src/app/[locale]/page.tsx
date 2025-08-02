"use client";

import Hero from '@/components/home/Hero';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { Benefits } from '@/components/home/Benefits';
import { EaseForYou } from '@/components/home/EaseForYou';
import { Cases } from '@/components/home/Cases';

export default function Home() {
  useEffect(() => {
    trackEvent('PageView_Home');
  }, []);

  return (
    <>
      <Hero />
      <Benefits
        emotional={["Emotional insight 1", "Emotional insight 2"]}
        strategic={["Strategic value 1", "Strategic value 2"]}
      />
      <EaseForYou
        items={[
          { title: "Ease point 1", description: "Description 1" },
          { title: "Ease point 2", description: "Description 2" },
          { title: "Ease point 3", description: "Description 3" }
        ]}
      />
      <Cases
        items={[
          {
            title: "Case 1",
            slug: "case-1",
            problem: "Problem description for case 1",
            decision: "Decision made in case 1",
            videoUrl: "https://www.youtube.com/embed/sample1"
          },
          {
            title: "Case 2",
            slug: "case-2",
            problem: "Problem description for case 2",
            decision: "Decision made in case 2",
            videoUrl: "https://www.youtube.com/embed/sample2"
          },
          {
            title: "Case 3",
            slug: "case-3",
            problem: "Problem description for case 3",
            decision: "Decision made in case 3",
            videoUrl: "https://www.youtube.com/embed/sample3"
          }
        ]}
      />
    </>
  );
}
