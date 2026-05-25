import { useState, useEffect } from 'react';
import { Top } from './style/intro.style';

export default function ScrollTop({ ref, onClick }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setVisible(!entry.isIntersecting);
			},
			{ threshold: 0, rootMargin: '0px 0px -500px 0px' }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [ref]);

	return (
		<Top onClick={onClick} className={visible ? 'visible' : ''}>
			TOP
		</Top>
	);
}
