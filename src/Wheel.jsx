import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollToPlugin);

export default function Wheel() {
	const media = useMediaQuery({ minWidth: 896 });
	const mobile = useMediaQuery({ minWidth: 768 });

	useEffect(() => {
		let isScrolling = false;

		function handleWheel(event) {
			if (!mobile) return;

			const y = window.scrollY;
			const vh = window.innerHeight;

			if (media && y < vh) {
				event.preventDefault();
				window.scrollTo({ top: 0 });
				return;
			}

			event.preventDefault();
			if (isScrolling) return;

			const dir = event.deltaY > 0 ? 1 : -1;
			let scrollAmount = window.scrollY + window.innerHeight * dir;

			isScrolling = true;

			gsap.to(window, {
				scrollTo: scrollAmount,
				duration: 0.2,
				ease: 'power2.out',
				onComplete: () => {
					setTimeout(() => {
						isScrolling = false;
					}, 100);
				}
			});
		}

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => window.removeEventListener('wheel', handleWheel);
	}, [media, mobile]);
}
