import gsap from 'gsap';

export const aniTL = () => {
	const tl = gsap.timeline();

	tl.fromTo('#name1', { xPercent: 100, x: '1.25rem' }, { xPercent: 0, x: 0 })
		.fromTo('#name3', { xPercent: -100, x: '-1.25rem' }, { xPercent: 0, x: 0 }, 0)
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, 0)
		.from('#nameBox', { xPercent: -10 })
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
		.from('#hello', { clipPath: 'inset(0 100% 0 0)' })
		.from('#textBox', { clipPath: 'inset(25% 0)' }, '<')
		.to('.name', { color: 'var(--main)' });

	return tl;
};
