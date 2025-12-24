import './App.css';
import { useRef } from 'react';
import Wheel from './Wheel';
import { useIntro } from './Intro';
import Shape from './Shape';
import Page from './Page';
import { Bg, Skip } from './style/page.style';
import ParticlesBg from './ParticlesBg';

function App() {
	Wheel();

	const triggerRef = useRef(null);
	const { skip, top, setReady } = useIntro(triggerRef);

	return (
		<>
			<Bg ref={triggerRef}>
				<Shape className='test' />
				<Skip className='skip' onClick={skip}>
					SKIP
				</Skip>
				<Page top={top} />
			</Bg>
			<ParticlesBg onReady={setReady} />
		</>
	);
}

export default App;
