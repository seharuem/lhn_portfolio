import './App.css';
import { useRef } from 'react';
import Wheel from './Wheel';
import { useIntro } from './Intro';
import { aniTL } from './ani';
import Shape from './Shape';
import Page from './Page';
import { Bg, Scroll, Skip } from './style';

function App() {
	Wheel();

	const triggerRef = useRef(null);
	const { skip, top } = useIntro(triggerRef, aniTL);

	return (
		<>
			<Bg ref={triggerRef}>
				<Shape className='test' />
				<Skip onClick={skip}>SKIP</Skip>
				<Scroll className='scroll'>scroll</Scroll>
				<Page top={top} />
			</Bg>
		</>
	);
}

export default App;
