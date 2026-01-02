import { button } from 'framer-motion/client';
import { Text, Name, Box, Circle, CircleLine, Scroll } from './style/intro.style';

const name = ['이', '하', '늘'];
const box = ['lt', 'rt', 'lb', 'rb'];
const num = [1, 2];
const click = () => {
	window.scrollTo({
		top: window.innerHeight
	});
};

export default function Shape() {
	return (
		<>
			<Text id='hello'>
				안녕하세요
			</Text>
			<Text id='textBox' className='w-97 z-30'>
				<div className='text1'>웹 퍼블리셔</div>
				<div className='namebox flex gap-5 justify-center'>
					<Name as={button} onClick={click} className='absolute click z-10'>
						click
					</Name>
					{name.map((n, i) => (
						<Name key={n} id={`name${i + 1}`} className='name'>
							{n}
						</Name>
					))}
				</div>
				<div className='text2 translate-y-2'>입니다</div>
			</Text>
			{box.map((b) => (
				<Box key={b} className={b}></Box>
			))}
			<CircleLine>
				{num.map((n) => (
					<Circle key={`c${n}`} className={`circle c${n}`}>
						<div className='cl' />
					</Circle>
				))}
				<div className='line w-0.5 h-full bg-(--main) z-10' />
			</CircleLine>
			<Scroll className='scroll'>scroll</Scroll>
		</>
	);
}
