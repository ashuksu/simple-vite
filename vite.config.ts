import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json' with {type: 'json'}

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: env.BASE_PATH || process.env.BASE_PATH || `/${pkg.name}/`,

        plugins: [
            react(),
            tailwindcss(),
        ],
    }
})
