'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestPage = () => {
  useEffect(() => {
    gsap.to('.scroll-image', {
      scrollTrigger: {
        trigger: '.scroll-image',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
      rotation: 360,
      ease: 'none',
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="scroll-image w-64 h-64 bg-blue-500"></div>
    </div>
  );
};

export default TestPage;
