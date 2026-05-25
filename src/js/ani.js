import gsap from 'gsap';

export const aniTL = (isMax = true) => {
	const tl = gsap.timeline({ defaults: { duration: 0.2 } });

	const axis = isMax ? 'x' : 'y';
	const percent = isMax ? 'xPercent' : 'yPercent';

	tl.to('.click', { opacity: 0 })
		.from('.circle', { opacity: 0 }, '<')
		.from('#name1', { [percent]: 100, [axis]: '1.25rem' }, '<')
		.from('#name3', { [percent]: -100, [axis]: '-1.25rem' }, '<')
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, '<')
		.fromTo('.scroll', { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0 }, '<')
		.set('.click', { pointerEvents: 'none' }, '<0.01')
		.from('.lt', { xPercent: 100, yPercent: 100, opacity: 0 })
		.from('.rt', { xPercent: -100, yPercent: 100, opacity: 0 }, '<')
		.from('.lb', { xPercent: 100, yPercent: -100, opacity: 0 }, '<')
		.from('.rb', { xPercent: -100, yPercent: -100, opacity: 0 }, '<')
		.fromTo(
			'#textBox',
			{ right: '50%', bottom: '50%', xPercent: 50, yPercent: 50 },
			{ right: '6rem', bottom: '6rem', xPercent: 0, yPercent: 0 },
			'<'
		)
		.from('#hello', { clipPath: 'inset(0 100% 0 0)', opacity: 0 })
		.from('.text1', { clipPath: 'inset(100% 0 0)', opacity: 0 }, '<')
		.from('.text2', { clipPath: 'inset(0 0 100%)', opacity: 0 }, '<')
		.fromTo('.name', { color: 'transparent' }, { color: 'var(--main)' })
		.fromTo('.circle', { scale: 0.1 }, { scale: 1, rotate: '360deg' }, '<')
		.from('.door', { clipPath: 'inset(50% 0)' })
		.to('.scroll', { opacity: 0, yPercent: 50 }, '<')
		.to('.c1', { top: 0, yPercent: 0 }, '<')
		.to('.c2', { top: 'initial', bottom: 0, yPercent: 0 }, '<')
		.to('.c1', { top: '50%', yPercent: -50 })
		.to('.c2', { bottom: '50%', yPercent: 50 }, '<')
		.to('.cl', { rotate: 90 })
		.to('.circle', { background: 'var(--mainGD)' })
		.to('.lt', { clipPath: 'inset(0 100% 100% 0)' })
		.to('.rt', { clipPath: 'inset(0 0 100% 100%)' }, '<')
		.to('.lb', { clipPath: 'inset(100% 100% 0 0)' }, '<')
		.to('.rb', { clipPath: 'inset(100% 0 0 100%)' }, '<')
		.to(['#hello', '#textBox'], { opacity: 0 }, '<')
		.to('#hello', { clipPath: 'inset(0 100% 0 0)' }, '<')
		.to('#textBox > div', { clipPath: 'inset(0 0 0 100%)' }, '<')
		.to('.door', { width: '100%' }, '<')
		.to('.circleLine', { width: '100%' }, '<')
		.to('.skip', { clipPath: 'inset(0 0 0 100%)' }, '<')
		.to('.door', { borderColor: 'transparent', duration: 0.1 }, '<0.1')
		.to('.circle', { opacity: 0, duration: 0.1 }, '<')
		.fromTo('.page', { scale: 0 }, { opacity: 1, scale: 1, duration: 0.1 }, '<');

	return tl;
};
