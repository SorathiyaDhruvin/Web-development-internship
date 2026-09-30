import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  visualRef: React.RefObject<HTMLDivElement | null>;
  trailRef: React.RefObject<HTMLDivElement | null>;
}

export const initHeroAnimation = ({
  containerRef,
  trackRef,
  visualRef,
  trailRef
}: HeroAnimationProps) => {
  if (
    !containerRef.current ||
    !trackRef.current ||
    !visualRef.current ||
    !trailRef.current
  ) {
    return;
  }

  let ctx = gsap.context(() => {
    const visual = visualRef.current!;
    const trail = trailRef.current!;
    const container = containerRef.current!;
    
    // Get all letters and stat boxes
    const letters = gsap.utils.toArray('.value-letter') as HTMLElement[];
    const statBoxes = gsap.utils.toArray('.stat-box') as HTMLElement[];

    const trackWidth = window.innerWidth;
    const visualWidth = visual.offsetWidth || 100;
    const endX = trackWidth - visualWidth;

    // Get exact offsets for the letters relative to viewport
    const getLetterOffsets = () => {
      const containerRect = trackRef.current!.getBoundingClientRect();
      return letters.map(letter => {
        const rect = letter.getBoundingClientRect();
        return rect.left - containerRect.left;
      });
    };

    let letterOffsets = getLetterOffsets();

    // Re-calculate on resize
    window.addEventListener('resize', () => {
      letterOffsets = getLetterOffsets();
    });

    gsap.to(visual, {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: trackRef.current,
      },
      x: endX,
      ease: 'none',
      onUpdate: function () {
        // Calculate the center of the visual orb
        const visualX = gsap.getProperty(visual, 'x') as number;
        const visualCenter = visualX + (visualWidth / 2);
        
        // Update trail width
        gsap.set(trail, { width: visualCenter });

        // Update letter opacities
        letters.forEach((letter, i) => {
          const letterX = letterOffsets[i];
          if (visualCenter >= letterX - 20) {
            letter.style.opacity = '1';
          } else {
            letter.style.opacity = '0';
          }
        });
      },
    });

    // Reveal stat boxes at different scroll depths
    statBoxes.forEach((box, i) => {
      const triggerStart = 300 + (i * 250); // Stagger the start points
      gsap.to(box, {
        scrollTrigger: {
          trigger: container,
          start: `top+=${triggerStart} top`,
          end: `top+=${triggerStart + 300} top`,
          scrub: true,
        },
        opacity: 1,
        y: -20,
      });
    });
  }, containerRef);

  return () => {
    ctx.revert();
  };
};
