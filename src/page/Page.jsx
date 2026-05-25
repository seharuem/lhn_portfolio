import { Card, Category, PageBg } from '../style/page.style';
import Skills from './Skills';
import Projects from './Projects';

export default function Page() {
	return (
		<PageBg>
			<div className='flex justify-between w-full max-lg:flex-col gap-8'>
				<Category>SKILLS</Category>
				<Skills />
			</div>
			<div className='flex justify-between w-full max-lg:flex-col gap-8'>
				<Category>PROJECTS</Category>
				<Projects />
			</div>
			<footer className='text-sm text-(--main) opacity-50 font-semibold text-left'>© 2026 이하늘 포트폴리오</footer>
		</PageBg>
	);
}
