import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bg, Name, Box } from './style';
import { aniTL } from './ani';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Load() {
	const triggerRef = useRef(null);

	useGSAP(
		() => {
			ScrollTrigger.normalizeScroll(true);

			const tl = aniTL();

			ScrollTrigger.create({
				trigger: triggerRef.current,
				start: 'top 0',
				end: '+=200%',
				scrub: 1,
				pin: true,
				invalidateOnRefresh: true,
				animation: tl,
				markers: true
			});
		},
		{ scope: triggerRef }
	);

	return (
		<>
			<Bg ref={triggerRef} className='relative'>
				<div id='nameBox' className='flex flex-col gap-10 items-end'>
					<div className='text-8xl'>웹 퍼블리셔</div>
					<div className='flex gap-5'>
						<Name id='name1'>1</Name>
						<Name id='name2'>2</Name>
						<Name id='name3'>3</Name>
					</div>
					<div className='text-8xl translate-y-2'>입니다.</div>
				</div>
				<Box className='lt'></Box>
				<Box className='rt'></Box>
				<Box className='lb'></Box>
				<Box className='rb'></Box>
			</Bg>
		</>
	);
}
