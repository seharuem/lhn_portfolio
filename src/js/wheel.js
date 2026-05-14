import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollToPlugin);

export default function wheel(ref) {
	const media = useMediaQuery({ minWidth: 896 });
	const mobile = useMediaQuery({ minWidth: 768 });

	useEffect(() => {
		let isScrolling = false;

		function handleWheel(event) {
			if (!mobile) return;

			const y = window.scrollY;
			const vh = window.innerHeight;
			const vw = window.innerWidth;

			let offsetMultiplier = 9;
			if (vw >= 768 && vw <= 895) offsetMultiplier = 5;
			if (vw < 768) offsetMultiplier = 0.1;

			const aniEnd = vh * offsetMultiplier;

			if (y <= aniEnd) {
				const dir = event.deltaY > 0 ? 1 : -1;
				if ((y >= aniEnd && dir === 1) || (y <= 0 && dir === -1)) return;
				event.preventDefault();

				if (isScrolling) return;
				isScrolling = true;

				const currentIndex = Math.round(y / vh);
				let targetSection = currentIndex + dir;
				let scrollAmount = targetSection * vh;

				if (scrollAmount < 0) scrollAmount = 0;
				if (scrollAmount > aniEnd) scrollAmount = aniEnd;

				gsap.to(window, {
					scrollTo: scrollAmount,
					duration: 0.3,
					ease: 'power2.out',
					onComplete: () => {
						setTimeout(() => {
							isScrolling = false;
						}, 150);
					}
				});
				return;
			}

			if (event.deltaY < 0 && y >= aniEnd - 10 && y < aniEnd + 100) {
				event.preventDefault();
				if (isScrolling) return;
				isScrolling = true;

				gsap.to(window, {
					scrollTo: aniEnd,
					duration: 0.2,
					onComplete: () => {
						isScrolling = false;
					}
				});
			}
		}

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => window.removeEventListener('wheel', handleWheel);
	}, [media, mobile]);
}
