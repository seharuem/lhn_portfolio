import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aniTL, tl1152, tl768 } from './ani';

gsap.registerPlugin(ScrollTrigger);

export const useIntro = (trigger) => {
	const stRef = useRef(null);
	const readyRef = useRef(false);
	const mmRef = useRef(null);

	const createSt = (ani, end = '1000%') => {
		if (stRef.current) stRef.current.kill();

		stRef.current = ScrollTrigger.create({
			trigger: trigger.current,
			end: `+=${end}`,
			scrub: 1,
			pin: true,
			invalidateOnRefresh: true,
			animation: ani(),
			markers: true
		});
	};

	const createScrollTrigger = () => {
		if (mmRef.current) mmRef.current.revert();
		mmRef.current = gsap.matchMedia();
		let mm = mmRef.current;

		mm.add('(min-width: 1152px)', () => createSt(aniTL));
		mm.add('(min-width: 896px) and (max-width: 1151px)', () => createSt(tl1152));
		mm.add('(min-width: 768px) and (max-width: 895px)', () => createSt(tl768, '500%'));
		mm.add('(max-width: 767px)', () => createSt(tl768, '150%'));
	};

	useEffect(() => {
		const checkReady = () => {
			if (readyRef.current) {
				createScrollTrigger();
			} else {
				setTimeout(checkReady, 100);
			}
		};
		checkReady();

		const handleResize = () => {
			if (readyRef.current && mmRef.current) {
				mmRef.current.revert();
				createScrollTrigger();
			}
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (mmRef.current) mmRef.current.revert();
			if (stRef.current) stRef.current.kill();
		};
	}, []);

	const scroll = (time, top) => {
		stRef.current?.animation.progress(time);
		window.scrollTo({ top: top });
	};

	const skip = () => scroll(1, window.innerHeight * 10);
	const top = () => scroll(0, 0);

	const setReady = () => {
		readyRef.current = true;
	};
	return { skip, top, setReady };
};
