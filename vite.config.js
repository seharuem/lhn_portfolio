import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		svgr(),
		visualizer({
			open: true,
			filename: 'stats.html',
			gzipSize: true
		})
	],
	build: {
		rollupOptions: {
			plugins: visualizer(),
			output: {
				manualChunks(id) {
					if (id.includes('gsap')) {
						return 'gsap';
					}
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				}
			}
		}
	},
	optimizeDeps: {
		include: ['gsap']
	},
	base: '/lhn_portfolio/'
});
