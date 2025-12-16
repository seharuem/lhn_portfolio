import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bg, Text, Name, Box, CircleLine, Circle } from './style';
import { aniTL } from './ani';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const name = [
	{ id: 'name1', text: '이' },
	{ id: 'name2', text: '하' },
	{ id: 'name3', text: '늘' }
];
const box = ['lt', 'rt', 'lb', 'rb'];

export default function Intro() {
	const triggerRef = useRef(null);

	useGSAP(
		() => {
			const tl = aniTL();

			ScrollTrigger.create({
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

	return (
		<>
			<Bg ref={triggerRef}>
				<Text id='hello' className='left-[100px] top-[100px]'>
					안녕하세요.
				</Text>
				<Text id='textBox'>
					<div>웹 퍼블리셔</div>
					<div id='nameBox' className='flex gap-5'>
						{name.map((n) => (
							<Name key={n.id} id={n.id}>
								{n.text}
							</Name>
						))}
					</div>
					<div className='translate-y-2'>입니다.</div>
				</Text>
				{box.map((b) => (
					<Box key={b} className={b}></Box>
				))}

				<CircleLine>
					<Circle className='circle c1'>
						<div className='cl' />
					</Circle>
					<Circle className='circle c2'>
						<div className='cl' />
					</Circle>
					<div className='line line1 w-px h-full bg-(--main) z-10' />
					<div className='line line2 w-px h-full bg-(--main) z-10' />
				</CircleLine>
			</Bg>
		</>
	);
}
