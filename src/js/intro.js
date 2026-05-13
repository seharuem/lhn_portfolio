import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aniTL, tl768 } from './ani';

gsap.registerPlugin(ScrollTrigger);

export const useIntro = (trigger) => {
	const stRef = useRef(null);
	const readyRef = useRef(false);
	const mmRef = useRef(null);

	const createSt = (ani, end = '1000%') => {
		stRef.current?.kill();

		stRef.current = ScrollTrigger.create({
			trigger: trigger.current,
			end: `+=${end}`,
			scrub: 1,
			pin: true,
			invalidateOnRefresh: true,
			animation: ani()
			// markers: true
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
		mm.add('(min-width: 768px) and (max-width: 895px)', () => createSt(tl768, '100%'));
		mm.add('(max-width: 767px)', () => createSt(tl768, '10%'));
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

	const skip = () => scroll(1, window.innerHeight * 10);
	const top = () => scroll(0, 0);

	const setReady = () => {
		readyRef.current = true;
	};
	return { skip, top, setReady };
};
