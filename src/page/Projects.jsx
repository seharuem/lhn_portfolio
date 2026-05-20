import { Card, Link, Tag } from '../style/page.style';
import animal from '../assets/img/animal.jpg';

export default function Projects() {
	return (
		<div className='card flex-1 min-w-0 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
			<Card>
				<img src={animal} className='absolute size-full object-cover object-top-right opacity-50' alt='' />
				<div className='absolute inset-0 flex flex-col gap-2 p-5'>
					<h3 className='text-3xl text-left'>랭킹동숲</h3>
					<div className='flex gap-2'>
						<Tag>반응형</Tag>
						<Tag>토이 프로젝트</Tag>
					</div>
					<div className='flex mt-auto self-end'>
						<Link target='_blank' rel='noopener noreferrer' href='https://animal-guide.pages.dev' className='home'>
							homepage
						</Link>
						<Link target='_blank' rel='noopener noreferrer' href='#' className='figma'>
							figma
						</Link>
						<Link target='_blank' rel='noopener noreferrer' href='#' className='github'>
							github
						</Link>
					</div>
				</div>
			</Card>
			{/* <Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card> */}
		</div>
	);
}
