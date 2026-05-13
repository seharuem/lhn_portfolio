import './App.css';
import { useRef } from 'react';
import wheel from './js/wheel';
import { useIntro } from './js/intro';
import Shape from './Shape';
import Page from './page/Page';
import { Bg, Skip } from './style/page.style';
import ParticlesBg from './ParticlesBg';
import { Top } from './style/intro.style';

function App() {
	const triggerRef = useRef(null);
	const { skip, top, setReady } = useIntro(triggerRef);
	wheel(triggerRef);

	return (
		<>
			<Bg ref={triggerRef} className='opacity-0'>
				<Shape />
				<Skip className='skip' onClick={skip}>
					SKIP
				</Skip>
			</Bg>
			<Page />
			<ParticlesBg onReady={setReady} />
			<Top onClick={top}>TOP</Top>
		</>
	);
}

export default App;
