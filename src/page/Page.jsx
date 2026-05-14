import { Card, Title } from '../style/page.style';
import Skills from './Skills';
import Projects from './Projects';

export default function Page() {
	return (
		<div className='page p-20 flex flex-col gap-40 -mt-[100vh]'>
			<div className='flex gap-20 w-full'>
				<Title>SKILLS</Title>
				<div className='border border-(--main) flex-1 min-w-0'>
					<Skills />
				</div>
			</div>
			<div className='flex gap-20 w-full'>
				<Title>PROJECTS</Title>
				<Projects />
			</div>
		</div>
	);
}
