'use client';

import React, { useRef, useEffect } from 'react';
import { initHeroAnimation } from '../animations/heroAnimation';

const statsData = [
  { value: "98%", desc: "Client Satisfaction" },
  { value: "150+", desc: "Projects Delivered" },
  { value: "10x", desc: "Performance Growth" },
  { value: "24/7", desc: "Premium Support" }
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const headline = "WELCOME ITZFIZZ";
  const words = headline.split(' ');

  useEffect(() => {
    const cleanup = initHeroAnimation({
      containerRef,
      headlineRef,
      statsContainerRef,
      visualRef
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-black">
      {/* Sticky section covering above the fold */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
        
        {/* Main Visual Element (The "Car" equivalent) - placed centrally behind text */}
        <div 
          ref={visualRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 md:w-64 md:h-64 flex items-center justify-center pointer-events-none"
        >
          {/* Abstract glowing sphere */}
          <div className="absolute inset-0 bg-primary-600 rounded-full blur-xl opacity-60"></div>
          <div className="absolute inset-4 bg-gradient-to-tr from-white to-primary-300 rounded-full shadow-[0_0_50px_#6366f1]"></div>
          <div className="absolute inset-8 bg-black rounded-full border border-primary-500/50"></div>
        </div>

        {/* Content Container (z-20 so it sits above/around visual) */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-7xl mt-12">
          
          {/* Headline - strictly required on page load */}
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-8xl lg:text-[9rem] leading-none font-black text-white text-center uppercase tracking-[0.15em] mb-16 flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {words.map((word, wIdx) => (
              <span key={wIdx} className="flex">
                {word.split('').map((char, cIdx) => (
                  <span key={cIdx} className="char inline-block text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Stats Below Headline - strictly required on page load */}
          <div ref={statsContainerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full">
            {statsData.map((stat, idx) => (
              <div key={idx} className="stat-item flex flex-col items-center text-center bg-dark-900/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <span className="text-4xl md:text-5xl font-bold text-primary-400 mb-3">{stat.value}</span>
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">{stat.desc}</span>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
