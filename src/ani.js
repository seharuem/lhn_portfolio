import gsap from 'gsap';

export const aniTL = () => {
	const tl = gsap.timeline();

	tl.from('#name1', { xPercent: 100, x: '1.25rem' })
		.from('#name3', { xPercent: -100, x: '-1.25rem' }, '<')
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, '<')
		.from('#nameBox', { xPercent: -7 })
		.from('.lt', { xPercent: 100, yPercent: 100, opacity: 0 }, '<')
		.from('.rt', { xPercent: -100, yPercent: 100, opacity: 0 }, '<')
		.from('.lb', { xPercent: 100, yPercent: -100, opacity: 0 }, '<')
		.from('.rb', { xPercent: -100, yPercent: -100, opacity: 0 }, '<')
		.fromTo(
			'#textBox',
			{ right: '50%', bottom: '50%', xPercent: 50, yPercent: 50 },
			{ right: '100px', bottom: '100px', xPercent: 0, yPercent: 0 },
			'<'
		)
		.from('#hello', { clipPath: 'inset(0 100% 0 0)', opacity: 0 })
		.from('#textBox', { clipPath: 'inset(25% 0)' }, '<')
		.to('.name', { color: 'var(--main)' })
		.from('.circle', { opacity: 0 }, '<')
		.from('.line', { clipPath: 'inset(50% 0)' })
		.to('.c1', { top: 0, yPercent: 0 }, '<')
		.to('.c2', { top: 'initial', bottom: 0, yPercent: 0 }, '<')
		.to('.c1', { top: '50%', yPercent: -50 })
		.to('.c2', { bottom: '50%', yPercent: 50 }, '<')
		.to('.circle', { rotate: 90 })
		.to('.circle', { backgroundColor: 'var(--main40)' });

	return tl;
};
