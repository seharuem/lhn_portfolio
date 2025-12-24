import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

export default function ParticlesBg({ onReady }) {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setInit(true));
	}, []);

	const options = useMemo(
		() => ({
			background: { color: { value: '#020014' } },
			fpsLimit: 30,
			particles: {
				color: { value: '#ffffff' },
				move: { enable: true, speed: 0.2 },
				number: { density: { enable: true }, value: 80 },
				opacity: { value: { min: 0.2, max: 0.5 } },
				shape: { type: 'circle' },
				size: { value: { min: 1, max: 3 } }
			},
			detectRetina: false
		}),
		[]
	);

	const particlesLoaded = () => onReady();

	if (!init) return null;

	return (
		<Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} className='fixed inset-0 -z-1' />
	);
}
