import Skills from './Skills';
import Projects from './Projects';

const category = [
	{ title: 'SKILLS', component: <Skills /> },
	{ title: 'PROJECTS', component: <Projects /> }
];

export default function Page() {
	return (
		<div className='page'>
			{category.map((c) => (
				<div key={c.title} className='flex justify-between w-full max-lg:flex-col gap-8'>
					<h2 className='w-40 text-start text-2xl font-bold text-(--main)'>{c.title}</h2>
					{c.component}
				</div>
			))}
			<footer className='text-sm text-(--main) opacity-50 font-semibold text-left'>© 2026 이하늘 포트폴리오</footer>
		</div>
	);
}
