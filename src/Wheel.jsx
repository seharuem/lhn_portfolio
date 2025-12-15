import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Wheel() {
  useEffect(() => {
    let isScrolling = false;

    function handleWheel(event) {
      event.preventDefault();
      if (isScrolling) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const currentScroll = window.scrollY;
      let scrollAmount = currentScroll + window.innerHeight * direction;

      isScrolling = true;

      gsap.to(window, {
        scrollTo: scrollAmount,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          isScrolling = false;
        }
      });
    }

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
}