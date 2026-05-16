import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aniTL } from './ani';

gsap.registerPlugin(ScrollTrigger);

export const useIntro = (trigger) => {
	const stRef = useRef(null);
	const readyRef = useRef(false);
	const mmRef = useRef(null);

	const createSt = (ani, end = '900%') => {
		stRef.current?.kill();

		stRef.current = ScrollTrigger.create({
			trigger: trigger.current,
			end: `+=${end}`,
			scrub: 1,
			pin: true,
			invalidateOnRefresh: true,
			fastScrollEnd: true,
			animation: ani()
		});

		window.scrollTo(0, 0);

		gsap.to(trigger.current, { opacity: 1 });
	};

	const createTrigger = () => {
		if (mmRef.current) mmRef.current.revert();
		mmRef.current = gsap.matchMedia();
		let mm = mmRef.current;

		mm.add('(min-width: 1152px)', () => createSt(() => aniTL(true)));
		mm.add('(min-width: 896px) and (max-width: 1151px)', () => createSt(() => aniTL(false)));
	};

	useEffect(() => {
		const handle = () => {
			if (readyRef.current && trigger.current) {
				createTrigger();
			}
		};

		const checkReady = () => {
			handle();
			if (!readyRef.current) setTimeout(checkReady, 100);
		};
		checkReady();

		window.addEventListener('resize', handle);
		return () => {
			window.removeEventListener('resize', handle);
			mmRef.current?.revert();
			stRef.current?.kill();
		};
	}, [createTrigger, trigger]);

	const scroll = (time, top) => {
		stRef.current?.animation.progress(time);
		window.scrollTo({ top: top });
	};

	const skip = () => scroll(1, window.innerHeight * 9);
	const top = () => scroll(0, 0);

	const setReady = () => {
		readyRef.current = true;
	};
	return { skip, top, setReady };
};
