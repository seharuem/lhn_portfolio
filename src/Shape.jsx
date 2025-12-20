import { button } from 'framer-motion/client';
import { Text, Name, Box, Circle, CircleLine } from './style';

const name = [
	{ id: 'name1', text: '이' },
	{ id: 'name2', text: '하' },
	{ id: 'name3', text: '늘' }
];
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
			<Text id='hello' className='left-[100px] top-[100px]'>
				안녕하세요.
			</Text>
			<Text id='textBox' className='z-30'>
				<div>웹 퍼블리셔</div>
				<div id='nameBox' className='flex gap-5 justify-center'>
					<Name as={button} onClick={click} className='absolute click z-10'>
						click
					</Name>
					{name.map((n) => (
						<Name key={n.id} id={n.id} className='name'>
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
				{num.map((n) => (
					<Circle key={`c${n}`} className={`circle c${n}`}>
						<div className='cl' />
					</Circle>
				))}
				{num.map((n) => (
					<div key={`l${n}`} className={`line line${n} w-px h-full bg-(--main) z-10`} />
				))}
			</CircleLine>
		</>
	);
}
