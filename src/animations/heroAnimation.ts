import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  headlineRef: React.RefObject<HTMLHeadingElement | null>;
  statsContainerRef: React.RefObject<HTMLDivElement | null>;
  visualRef: React.RefObject<HTMLDivElement | null>;
}

export const initHeroAnimation = ({
  containerRef,
  headlineRef,
  statsContainerRef,
  visualRef
}: HeroAnimationProps) => {
  if (
    !containerRef.current ||
    !headlineRef.current ||
    !statsContainerRef.current ||
    !visualRef.current
  ) {
    return;
  }

  let ctx = gsap.context(() => {
    const container = containerRef.current!;
    const visual = visualRef.current!;
    
    const chars = headlineRef.current!.querySelectorAll('.char');
    const stats = statsContainerRef.current!.querySelectorAll('.stat-item');

    // --- 1. Initial Load Animation ---
    // According to guidelines:
    // "The headline should appear smoothly (fade + slight movement or staggered reveal)."
    // "The statistics should animate in one by one with a subtle delay."
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Headline staggering in
    tl.fromTo(
      chars,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.04 },
      0 // start immediately
    )
    
    // Stats revealing one by one
    .fromTo(
      stats,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
      "-=0.5"
    );

    // --- 2. Scroll-Based Animation ---
    // According to guidelines:
    // "The main visual element (image/object) should move smoothly based on scroll position."
    
    const moveX = window.innerWidth;

    gsap.to(visual, {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1, // Smooth interpolation
      },
      x: moveX + 200, // Move horizontally all the way across the screen
      rotation: 360, // Add some spin to make it dynamic
      ease: 'none',
    });

    // Subtly fade out the text as the user scrolls deep down
    gsap.to([headlineRef.current, statsContainerRef.current], {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'center top',
        scrub: 1,
      },
      opacity: 0.1,
      y: -50,
      ease: 'none',
    });

  }, containerRef);

  return () => {
    ctx.revert();
  };
};
