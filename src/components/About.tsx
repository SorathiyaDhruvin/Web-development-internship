'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Palette className="w-8 h-8 text-primary-500 mb-6" />,
    title: "Digital Design",
    description: "Creating visually stunning and highly engaging interfaces that capture the essence of your brand.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary-500 mb-6" />,
    title: "Web Engineering",
    description: "Building scalable, high-performance web applications using modern, cutting-edge technologies.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-500 mb-6" />,
    title: "Optimization",
    description: "Fine-tuning experiences to ensure lightning-fast load times and seamless interactions across devices.",
  }
];

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo(
        textRef.current!.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Reveal cards
      gsap.fromTo(
        cardsRef.current!.children,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-dark-900 py-32 px-6 md:px-12 flex flex-col justify-center items-center z-20">
      
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-24">
        
        {/* Header Content */}
        <div ref={textRef} className="max-w-3xl">
          <h2 className="text-primary-500 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            About the Agency
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8 leading-tight">
            We build digital experiences that drive growth.
          </h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            At Itzfizz, we don't just create websites; we engineer comprehensive digital ecosystems tailored for modern brands. Our approach blends premium aesthetics with robust, scalable technology.
          </p>
        </div>

        {/* Services Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-dark-800 border border-white/5 rounded-2xl p-10 hover:bg-dark-800/80 hover:border-primary-500/30 transition-all duration-300 group cursor-pointer"
            >
              {service.icon}
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-primary-400 transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default About;
