'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: "Core Web",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    category: "Frontend & Animation",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP"]
  },
  {
    category: "Backend & CMS",
    skills: ["PHP", "MySQL", "WordPress", "Shopify"]
  }
];

const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !headerRef.current || !listRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current!.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      const skillItems = listRef.current!.querySelectorAll('.skill-pill');
      gsap.fromTo(
        skillItems,
        { y: 20, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="expertise" className="relative w-full py-24 px-6 md:px-12 bg-black z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div ref={headerRef} className="md:w-1/3 flex flex-col justify-start">
          <h2 className="text-primary-500 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            Technical Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Mastery across the stack.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Equipped with the precise technologies required to build scalable, high-performance, and visually stunning digital experiences for Itzfizz Digital.
          </p>
        </div>

        <div ref={listRef} className="md:w-2/3 flex flex-col gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="skill-pill px-6 py-3 rounded-full bg-dark-900 border border-white/10 text-gray-300 font-medium tracking-wide hover:border-primary-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
