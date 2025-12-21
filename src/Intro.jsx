import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const useIntro = (trigger, ani) => {
	const stRef = useRef(null);

	useGSAP(
		() => {
			const tl = ani();

			stRef.current = ScrollTrigger.create({
				trigger: trigger.current,
				end: '+=1000%',
				scrub: 1,
				pin: true,
				invalidateOnRefresh: true,
				animation: tl,
				markers: true
			});
		},
		{ scope: trigger }
	);

	const scroll = (time, top) => {
		stRef.current?.animation.progress(time);
		window.scrollTo({ top: top });
	};

	const skip = () => scroll(1, window.innerHeight * 10);
	const top = () => scroll(0, 0);

	return { skip, top };
};
