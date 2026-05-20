import { Grid, Title } from '../style/page.style';
import R from '/react.svg';
import V from '/vite.svg';
import G from '/gsap-white.svg';

const skills = [
	{
		title: 'Development',
		list: [
			{ name: 'html5', icon: 'html5-plain colored' },
			{ name: 'css3', icon: 'css3-plain colored' },
			{ name: 'javascript', icon: 'javascript-plain colored' }
		]
	},
	{
		title: 'Libraries',
		list: [
			{ name: 'tailwindcss', icon: 'tailwindcss-original colored' },
			{ name: 'styled components', icon: 'styledcomponents-plain colored' },
			{ name: 'zustand', icon: 'zustand-plain' }
		]
	},
	{
		title: 'Design & Collaboration',
		list: [
			{ name: 'photoshop', icon: 'photoshop-plain' },
			{ name: 'figma', icon: 'figma-plain' },
			{ name: 'gitHub', icon: 'github-original' }
		]
	}
];

export default function Skills() {
	return (
		<div className='flex-1 min-w-0 h-full flex flex-col gap-10'>
			{skills.map((skill) => (
				<div key={skill.title} className='flex flex-col gap-8 w-full font-(family-name:--font2)'>
					<Title className='w-max'>{skill.title}</Title>
					<Grid>
						{skill.list.map((s) => (
							<li key={s.name} className='flex flex-col items-center gap-2 w-20'>
								<i className={`devicon-${s.icon} text-3xl`} />
								{s.name}
							</li>
						))}
						{skill.title === 'Development' && (
							<li className='flex flex-col gap-2 items-center'>
								<div className='flex gap-4 w-max'>
									<img className='h-7.5' src={V} alt='vite' />
									<img className='h-7.5' src={R} alt='react' />
								</div>
								vite + react
							</li>
						)}
						{skill.title === 'Libraries' && (
							<li className='flex flex-col gap-2 items-center'>
								<img className='h-7.5' src={G} alt='gsap' />
								gsap
							</li>
						)}
					</Grid>
				</div>
			))}
		</div>
	);
}
