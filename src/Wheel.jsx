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
      const windowHeight = window.innerHeight;
      let scrollAmount = currentScroll + windowHeight * direction;

      isScrolling = true;

      gsap.to(window, {
        scrollTo: scrollAmount,
        duration: 0.3,
        ease: 'power2.inOut',
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