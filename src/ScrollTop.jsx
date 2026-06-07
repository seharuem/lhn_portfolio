import { useState, useEffect } from 'react';

export default function ScrollTop({ ref, onClick }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(!entry.isIntersecting);
		});

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [ref]);

	return (
		<button type='button' onClick={onClick} className={`top ${visible ? 'visible' : ''}`}>
			TOP
		</button>
	);
}
