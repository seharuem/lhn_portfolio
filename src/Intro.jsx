import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bg, Btn, Scroll } from './style';
import { aniTL } from './ani';
import Shape from './Shape';
import Page from './Page';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Intro() {
	const stRef = useRef(null);
	const triggerRef = useRef(null);

	useGSAP(
		() => {
			const tl = aniTL();

			stRef.current = ScrollTrigger.create({
				trigger: triggerRef.current,
				end: '+=1000%',
				scrub: 1,
				pin: true,
				invalidateOnRefresh: true,
				animation: tl,
				markers: true
			});
		},
		{ scope: triggerRef }
	);

	const skip = () => {
		if (stRef.current) {
			stRef.current.animation.progress(1);
		}
		window.scrollTo({
			top: window.innerHeight * 10
		});
	};

	return (
		<>
			<Bg ref={triggerRef}>
				<Shape className='test' />
				<Btn onClick={skip}>SKIP</Btn>
				<Scroll className='scroll'>scroll</Scroll>
				<Page />
			</Bg>
		</>
	);
}
