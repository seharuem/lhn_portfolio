import gsap from 'gsap';

export const aniTL = () => {
	const tl = gsap.timeline();

	tl.fromTo('#name1', { xPercent: 100, x: '1.25rem' }, { xPercent: 0, x: 0 })
		.fromTo('#name3', { xPercent: -100, x: '-1.25rem' }, { xPercent: 0, x: 0 }, 0)
		.to('.name', { boxShadow: '0 0 5px var(--main)' }, 0)
		.fromTo('.lt', { xPercent: 100, yPercent: 100, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 })
		.fromTo('.rt', { xPercent: -100, yPercent: 100, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }, '<')
		.fromTo('.lb', { xPercent: 100, yPercent: -100, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }, '<')
		.fromTo('.rb', { xPercent: -100, yPercent: -100, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1 }, '<');

	return tl;
};
