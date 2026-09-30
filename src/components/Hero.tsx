'use client';

import React, { useRef, useEffect } from 'react';
import { initHeroAnimation } from '../animations/heroAnimation';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  
  const headline = "WELCOME ITZFIZZ";
  const letters = headline.split('');

  useEffect(() => {
    const cleanup = initHeroAnimation({
      containerRef,
      trackRef,
      visualRef,
      trailRef
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-black">
      {/* Pinned Track Container handled by GSAP */}
      <div ref={trackRef} className="h-screen w-full flex items-center justify-center bg-black">
        
        {/* Abstract "Road" */}
        <div className="relative w-full min-h-[350px] flex items-center border-y border-white/5 bg-dark-900/50">
          
          {/* Trail */}
          <div ref={trailRef} className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent to-primary-500 shadow-[0_0_15px_#6366f1] z-10 w-0"></div>

          {/* Main Visual "Car" Equivalent (A glowing orb/shape) */}
          <div 
            ref={visualRef}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-30 w-20 h-20 md:w-32 md:h-32 rounded-full bg-primary-600 shadow-[0_0_50px_#6366f1] flex items-center justify-center -ml-10 md:-ml-16"
          >
            <div className="w-1/2 h-1/2 bg-white rounded-full animate-pulse-slow"></div>
          </div>

          {/* Headline Letters placed absolutely */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-12 md:px-32 flex justify-between z-20 pointer-events-none">
            {letters.map((char, idx) => (
              <span 
                key={idx} 
                className="value-letter text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 opacity-0 transition-opacity duration-300"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          
        </div>

        {/* Stats Boxes (like the reference) positioned absolutely */}
        <div className="stat-box absolute top-[15%] left-[5%] md:left-[10%] bg-dark-800 border border-white/10 rounded-2xl p-4 md:p-6 opacity-0 z-40 max-w-[200px] md:max-w-xs shadow-2xl backdrop-blur-md">
          <div className="text-2xl md:text-4xl font-bold text-primary-400 mb-1 md:mb-2">98%</div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Client Satisfaction</div>
        </div>

        <div className="stat-box absolute bottom-[15%] left-[15%] md:left-[25%] bg-dark-800 border border-white/10 rounded-2xl p-4 md:p-6 opacity-0 z-40 max-w-[200px] md:max-w-xs shadow-2xl backdrop-blur-md">
          <div className="text-2xl md:text-4xl font-bold text-indigo-400 mb-1 md:mb-2">150+</div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Projects Delivered</div>
        </div>

        <div className="stat-box absolute top-[20%] right-[15%] md:right-[25%] bg-dark-800 border border-white/10 rounded-2xl p-4 md:p-6 opacity-0 z-40 max-w-[200px] md:max-w-xs shadow-2xl backdrop-blur-md">
          <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">10x</div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Performance Growth</div>
        </div>

        <div className="stat-box absolute bottom-[20%] right-[5%] md:right-[10%] bg-dark-800 border border-white/10 rounded-2xl p-4 md:p-6 opacity-0 z-40 max-w-[200px] md:max-w-xs shadow-2xl backdrop-blur-md">
          <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-1 md:mb-2">24/7</div>
          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Premium Support</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
