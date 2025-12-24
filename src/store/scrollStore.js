import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { create } from 'zustand';
import { aniTL, tl1152, tl768 } from '../ani';

gsap.registerPlugin(ScrollTrigger);

const createSt = (trigger, ani, end = '1000%') => {
	ScrollTrigger.getAll().forEach((st) => st.kill());

	return ScrollTrigger.create({
		trigger: trigger,
		end: `+=${end}`,
		scrub: 1,
		pin: true,
		invalidateOnRefresh: true,
		animation: ani(),
		markers: true
	});
};

export const useScrollStore = create((set, get) => ({
	ready: false,
	mmRef: null,

	setReady: () => set({ ready: true }),

	createTrigger: (t) => {
		if (!get().ready) return;
		if (get().mmRef) get().mmRef.revert();

		const mm = gsap.matchMedia();
		mm.add('(min-width: 1152px)', () => createSt(t, aniTL));
		mm.add('(min-width: 896px) and (max-width: 1151px)', () => createSt(t, tl1152));
		mm.add('(min-width: 768px) and (max-width: 895px)', () => createSt(t, tl768, '500%'));
		mm.add('(max-width: 767px)', () => createSt(t, tl768, '150%'));

		set({ mmRef: mm });
	}
}));
