import './App.css';
import { useRef, useState, useEffect } from 'react';
import wheel from './js/wheel';
import { useIntro } from './js/intro';
import Shape from './Shape';
import Page from './page/Page';
import ParticlesBg from './ParticlesBg';
import ScrollTop from './ScrollTop';

function App() {
	const [showTop, setShowTop] = useState(false);
	const triggerRef = useRef(null);
	const scrollRef = useRef(null);
	const { skip, top, setReady } = useIntro(triggerRef);
	wheel(triggerRef);

	return (
		<>
			<div ref={triggerRef} className='bg'>
				<Shape />
				<button type='button' className='skip' ref={scrollRef} onClick={skip}>
					SKIP
				</button>
			</div>
			<Page />
			<ParticlesBg onReady={setReady} />
			<ScrollTop ref={scrollRef} onClick={top} />
		</>
	);
}

export default App;
