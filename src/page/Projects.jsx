import { team, solo } from './data';
import R from '/react.svg';

const projects = [
	{ title: 'Team', data: team },
	{ title: 'Solo', data: solo }
];

export default function Projects() {
	return (
		<div className='flex-1 min-w-0 flex flex-col gap-8'>
			{projects.map((p) => (
				<div key={p.title} className='flex flex-col gap-4'>
					<h3 className='title'>{p.title}</h3>
					<div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
						{p.data.map((d) => (
							<div key={d.title} className='w-full h-80 border-2 border-(--main) bg-(--main)/30 relative'>
								{d.img ? (
									<img src={d.img} className='absolute size-full object-cover' alt='' />
								) : (
									<img
										className='absolute left-1/2 -translate-x-1/2 bottom-18 size-30 object-contain animate-pulse'
										src={R}
										alt='react'
									/>
								)}
								<div className='absolute inset-0 flex flex-col'>
									<div className='flex flex-col gap-2 p-5 bg-(--bg)/70'>
										<h3 className='text-2xl text-left'>{d.title}</h3>
										<div className='flex gap-2 flex-wrap'>
											{d.tag.map((t, i) => (
												<span className='border border-(--main) rounded-full px-2 text-sm backdrop-blur-xs' key={i}>
													{t}
												</span>
											))}
										</div>
									</div>
									<div className='flex gap-1 justify-end mt-auto p-2'>
										{d.link.map((l, i) => (
											<a key={i} target='_blank' rel='noopener noreferrer' href={l.href} className={`link ${l.name}`}>
												{l.name}
											</a>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
