import { Card, Link, Tag, Title } from '../style/page.style';
import { team, solo } from './data';

const projects = [
	{
		title: 'Team',
		data: team
	},
	{
		title: 'Solo',
		data: solo
	}
];

export default function Projects() {
	return (
		<div className='flex-1 min-w-0 flex flex-col gap-8'>
			{projects.map((p) => (
				<div key={p.title} className='flex flex-col gap-4'>
					<Title>{p.title}</Title>
					<div className='card grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
						{p.data.map((d) => (
							<Card key={d.title}>
								<img src={d.img} className='absolute size-full object-cover' alt='' />
								<div className='absolute inset-0 flex flex-col'>
									<div className='flex flex-col gap-2 p-5 bg-(--bg)/70'>
										<h3 className='text-2xl text-left'>{d.title}</h3>
										<div className='flex gap-2 flex-wrap'>
											{d.tag.map((t, i) => (
												<Tag key={i}>{t}</Tag>
											))}
										</div>
									</div>
									<div className='flex gap-1 justify-end mt-auto p-2'>
										{d.link.map((l, i) => (
											<Link key={i} target='_blank' rel='noopener noreferrer' href={l.href} className={l.name}>
												{l.name}
											</Link>
										))}
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
