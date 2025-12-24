import { Bg, Card, Top } from './style/page.style';

export default function Page({ top }) {
	return (
		<Bg className='page z-30'>
			<h2 className='absolute left-20 top-20 text-2xl font-bold text-(--main)'>PORTFOLIO</h2>
			<div className='flex'>
				<Card>
					<div className='absolute z-10'></div>
				</Card>
				<Card></Card>
				<Card></Card>
			</div>
			<Top onClick={top}>TOP</Top>
		</Bg>
	);
}
