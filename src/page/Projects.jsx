import { Card, Link, Tag } from '../style/page.style';
import { projects } from './projects';

export default function Projects() {
	return (
		<div className='card flex-1 min-w-0 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
			{projects.map((p) => (
				<Card key={p.title}>
					<img src={p.img} className='absolute size-full object-cover object-top-right opacity-50' alt='' />
					<div className='absolute inset-0 flex flex-col gap-2 p-5'>
						<h3 className='text-2xl text-left'>{p.title}</h3>
						<div className='flex gap-2 flex-wrap'>
							{p.tag.map((t, i) => (
								<Tag key={i}>{t}</Tag>
							))}
						</div>
						<div className='flex mt-auto self-end'>
							{p.link.map((l, i) => (
								<Link key={i} target='_blank' rel='noopener noreferrer' href={l.href} className={l.name}>
									{l.name}
								</Link>
							))}
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}
