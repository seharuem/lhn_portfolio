import { useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollToPlugin);

export default function wheel(ref) {
	const isDesktop = useMediaQuery({ minWidth: 896 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 895 });
	const isMobile = useMediaQuery({ maxWidth: 767 });

	const moveScroll = useCallback((target, callback) => {
		gsap.to(window, {
			scrollTo: target,
			duration: 0.3,
			ease: 'power2.out',
			onComplete: callback
		});
	}, []);

	useEffect(() => {
		if (isMobile) return;
		let isScrolling = false;

		const handleWheel = (event) => {
			const y = window.scrollY;
			const vh = window.innerHeight;
			const dir = event.deltaY > 0 ? 1 : -1;

			let multiplier = 9;
			if (isTablet) multiplier = 1;

			const aniEnd = vh * multiplier;

			if (y < vh && dir === 1) {
				event.preventDefault();
				return;
			}

			if (y <= aniEnd) {
				if ((y >= aniEnd && dir === 1) || (y <= 0 && dir === -1)) return;
				event.preventDefault();

				if (isScrolling) return;
				isScrolling = true;

				const currentIndex = Math.round(y / vh);
				const targetSection = currentIndex + dir;
				const scrollAmount = Math.max(0, Math.min(aniEnd, targetSection * vh));

				moveScroll(scrollAmount, () => {
					setTimeout(() => {
						isScrolling = false;
					}, 50);
				});
				return;
			}

			if (dir === -1 && y > aniEnd - vh) {
				event.preventDefault();
				if (isScrolling) return;
				isScrolling = true;

				moveScroll(aniEnd, () => {
					isScrolling = false;
				});
				return;
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => window.removeEventListener('wheel', handleWheel);
	}, [isTablet, isDesktop, isMobile, moveScroll]);
}
