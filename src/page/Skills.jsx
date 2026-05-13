import { Category } from '../style/page.style';
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
		<div className='h-full px-20 py-12 flex flex-col gap-10'>
			{skills.map((skill) => (
				<div key={skill.title} className='flex flex-col gap-8'>
					<Category>{skill.title}</Category>
					<ul className='flex gap-15'>
						{skill.title === 'Markup & Styling' && (
							<li className='flex flex-col gap-2 items-center'>
								<div className='flex gap-4 w-max'>
									<img className='h-9' src={V} alt='vite' />
									<img className='h-9' src={R} alt='react' />
								</div>
								vite + react
							</li>
						)}
						{skill.list.map((s) => (
							<li key={s.name} className='flex flex-col items-center gap-2 w-20'>
								<i className={`devicon-${s.icon} text-4xl`} />
								{s.name}
							</li>
						))}
						{skill.title === 'Interactions' && (
							<li className='flex flex-col gap-2 items-center'>
								<img className='h-9' src={G} alt='gsap' />
								gsap
							</li>
						)}
					</ul>
				</div>
			))}
		</div>
	);
}
