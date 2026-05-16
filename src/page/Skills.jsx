import { Title } from '../style/page.style';
import R from '/react.svg';
import V from '/vite.svg';
import G from '/gsap-white.svg';

const skills = [
	{
		title: 'Markup & Styling',
		list: [
			{ name: 'html5', icon: 'html5-plain colored' },
			{ name: 'css3', icon: 'css3-plain colored' },
			{ name: 'styled components', icon: 'styledcomponents-plain colored' },
			{ name: 'tailwindcss', icon: 'tailwindcss-original colored' }
		]
	},
	{
		title: 'Interactions',
		list: [
			{ name: 'javascript', icon: 'javascript-plain colored' },
			{ name: 'zustand', icon: 'zustand-plain' }
		]
	},
	{
		title: 'Design & Collaboration',
		list: [
			{ name: 'figma', icon: 'figma-plain' },
			{ name: 'photoshop', icon: 'photoshop-plain' },
			{ name: 'gitHub', icon: 'github-original' }
		]
	}
];

export default function Skills() {
	return (
		<div className='flex-1 min-w-0 h-full flex flex-col gap-10'>
			{skills.map((skill) => (
				<div key={skill.title} className='flex flex-col gap-8 w-full'>
					<Title>{skill.title}</Title>
					<ul className='grid grid-cols-[repeat(auto-fill,minmax(min(100%,80px),1fr))] gap-8 max-lg:text-sm max-lg:gap-5'>
						{skill.title === 'Markup & Styling' && (
							<li className='flex flex-col gap-2 items-center'>
								<div className='flex gap-4 w-max'>
									<img className='h-6' src={V} alt='vite' />
									<img className='h-6' src={R} alt='react' />
								</div>
								vite + react
							</li>
						)}
						{skill.list.map((s) => (
							<li key={s.name} className='flex flex-col items-center gap-2 w-20'>
								<i className={`devicon-${s.icon} text-2xl`} />
								{s.name}
							</li>
						))}
						{skill.title === 'Interactions' && (
							<li className='flex flex-col gap-2 items-center'>
								<img className='h-6' src={G} alt='gsap' />
								gsap
							</li>
						)}
					</ul>
				</div>
			))}
		</div>
	);
}
