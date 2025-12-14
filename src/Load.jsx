import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bg, Text, Name, Box } from './style';
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
				end: '+=400%',
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
				<Text id='hello' className='left-[100px] top-[100px]'>안녕하세요.</Text>
				<Text id='textBox'>
					<div>웹 퍼블리셔</div>
					<div id='nameBox' className='flex gap-5'>
						<Name id='name1'>이</Name>
						<Name id='name2'>하</Name>
						<Name id='name3'>늘</Name>
					</div>
					<div className='translate-y-2'>입니다.</div>
				</Text>
				<Box className='lt'></Box>
				<Box className='rt'></Box>
				<Box className='lb'></Box>
				<Box className='rb'></Box>
			</Bg>
		</>
	);
}
