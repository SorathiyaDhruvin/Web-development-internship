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

  const ctx = gsap.context(() => {
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
    // User explicitly requested NOT to copy the reference's horizontal movement.
    // Creating a unique, premium parallax/zoom effect instead.

    // The visual element will scale up massively, rotate, and move down
    gsap.to(visual, {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1, 
      },
      scale: 4,          // Zoom in dramatically
      y: window.innerHeight * 0.5, // Move down
      rotation: 180,     // Spin
      opacity: 0,        // Fade out into the background
      ease: 'none',
    });

    // Subtly parallax the text and stats in the opposite direction
    gsap.to([headlineRef.current, statsContainerRef.current], {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'center top',
        scrub: 1,
      },
      opacity: 0,
      y: -150, // Move up while the orb moves down
      scale: 0.9,
      ease: 'none',
    });

  }, containerRef);

  return () => {
    ctx.revert();
  };
};
