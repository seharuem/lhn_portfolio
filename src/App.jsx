import './App.css';
import { useRef, useState, useEffect } from 'react';
import wheel from './js/wheel';
import { useIntro } from './js/intro';
import Shape from './Shape';
import Page from './page/Page';
import { Bg, Skip } from './style/page.style';
import ParticlesBg from './ParticlesBg';
import { Top } from './style/intro.style';
import ScrollTop from './ScrollTop';

function App() {
	const [showTop, setShowTop] = useState(false);
	const triggerRef = useRef(null);
	const scrollRef = useRef(null);
	const { skip, top, setReady } = useIntro(triggerRef);
	wheel(triggerRef);

	return (
		<>
			<Bg ref={triggerRef} className='opacity-0'>
				<Shape />
				<Skip ref={scrollRef} onClick={skip}>SKIP</Skip>
			</Bg>
			<Page />
			<ParticlesBg onReady={setReady} />
			<ScrollTop ref={scrollRef} onClick={top} />
		</>
	);
}

export default App;
