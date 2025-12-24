import gsap from 'gsap';

export const aniTL = () => {
	const tl = gsap.timeline({ defaults: { duration: 0.2 } });

	tl.set(['.click', '.line', '.circle'], { visibility: 'visible' })
		.to('.click', { opacity: 0 })
		.from('#name1', { xPercent: 100, x: '1.25rem' }, '<')
		.from('#name3', { xPercent: -100, x: '-1.25rem' }, '<')
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, '<')
		.fromTo('.scroll', { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0 }, '<')
		.set('.click', { visibility: 'hidden' }, '<0.01')
		.from('.lt', { xPercent: 100, yPercent: 100, opacity: 0 })
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
		.from('.text1', { clipPath: 'inset(100% 0 0)' }, '<')
		.from('.text2', { clipPath: 'inset(0 0 100%)' }, '<')
		.to('.name', { color: 'var(--main)' })
		.from('.circle', { opacity: 0 }, '<')
		.from('.line', { clipPath: 'inset(50% 0)' })
		.to('.scroll', { opacity: 0, yPercent: 50 }, '<')
		.to('.c1', { top: 0, yPercent: 0 }, '<')
		.to('.c2', { top: 'initial', bottom: 0, yPercent: 0 }, '<')
		.to('.c1', { top: '50%', yPercent: -50 })
		.to('.c2', { bottom: '50%', yPercent: 50 }, '<')
		.to('.cl', { rotate: 90 })
		.to('.circle', { background: 'var(--mainGD)' })
		.to(['#hello', '#textBox', '.circleLine', '.box'], { opacity: 0, duration: 0.4 })
		.from('.page', { clipPath: 'inset(0 100%)', duration: 0.4 }, '<')
		.to('.skip', { clipPath: 'inset(0 0 0 100%)' }, '<0.2');

	return tl;
};

export const tl1152 = () => {
	const tl = gsap.timeline({ defaults: { duration: 0.2 } });

	tl.set(['.click', '.line', '.circle'], { visibility: 'visible' })
		.to('.click', { opacity: 0 })
		.from('#name1', { yPercent: 100, y: '1.25rem' }, '<')
		.from('#name3', { yPercent: -100, y: '-1.25rem' }, '<')
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, '<')
		.fromTo('.scroll', { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0 }, '<')
		.set('.click', { visibility: 'hidden' }, '<0.01')
		.from('.lt', { xPercent: 100, yPercent: 100, opacity: 0 })
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
		.from('.text1', { clipPath: 'inset(100% 0 0)' }, '<')
		.from('.text2', { clipPath: 'inset(0 0 100%)' }, '<')
		.to('.name', { color: 'var(--main)' })
		.from('.circle', { opacity: 0 }, '<')
		.from('.line', { clipPath: 'inset(50% 0)' })
		.to('.scroll', { opacity: 0, yPercent: 50 }, '<')
		.to('.c1', { top: 0, yPercent: 0 }, '<')
		.to('.c2', { top: 'initial', bottom: 0, yPercent: 0 }, '<')
		.to('.c1', { top: '50%', yPercent: -50 })
		.to('.c2', { bottom: '50%', yPercent: 50 }, '<')
		.to('.cl', { rotate: 90 })
		.to('.circle', { background: 'var(--mainGD)' })
		.to(['#hello', '#textBox', '.circleLine', '.box'], { opacity: 0, duration: 0.4 })
		.from('.page', { clipPath: 'inset(0 100%)', duration: 0.4 }, '<')
		.to('.skip', { clipPath: 'inset(0 0 0 100%)' }, '<0.2');

	return tl;
};

export const tl768 = () => {
	const tl = gsap.timeline();

	tl.set(['.click', '.line', '.circle'], { visibility: 'hidden' })
		.set('.scroll', { opacity: 1, yPercent: 0 })
		.from('#name1', { yPercent: 100, y: '1.25rem' })
		.from('#name3', { yPercent: -100, y: '-1.25rem' }, '<')
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, '<')
		.from('.lt', { xPercent: 100, yPercent: 100, opacity: 0 })
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
		.from('.text1', { clipPath: 'inset(100% 0 0)' }, '<')
		.from('.text2', { clipPath: 'inset(0 0 100%)' }, '<')
		.to('.name', { color: 'var(--main)' })
		.to(['#hello', '#textBox', '.box', '.scroll'], { opacity: 0 })
		.from('.page', { clipPath: 'inset(100% 0)' }, '<')
		.to('.skip', { clipPath: 'inset(0 0 0 100%)' }, '<');

	return tl;
};
