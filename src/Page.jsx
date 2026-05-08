import { Bg, Card, Title, Top } from './style/page.style';
import S1 from '../src/assets/img/react.svg?react';

export default function Page({ top }) {
	return (
		<Bg className='page z-30 border-x border-(--main)'>
			<div className='absolute inset-0 p-20 flex flex-col gap-40'>
				<div className='flex gap-20 w-full'>
					<Title>SKILLS</Title>
					<ul className='border border-(--main) flex-1 min-w-0 overflow-hidden py-10 flex justify-center gap-12'>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
						<li className='flex flex-col items-center gap-2'>
							<S1 />
							React
						</li>
					</ul>
				</div>
				<div className='flex gap-20 w-full'>
					<Title>PROJECTS</Title>
					<div className='card flex-1 min-w-0 grid grid-flow-col gap-4'>
						<Card></Card>
						<Card></Card>
						<Card></Card>
						<Card></Card>
					</div>
				</div>
				<Top onClick={top}>TOP</Top>
			</div>
		</Bg>
	);
}
