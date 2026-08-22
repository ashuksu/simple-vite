import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json' with {type: 'json'}
import {tanstackRouter} from '@tanstack/router-plugin/vite'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');
    const basePath = env.BASE_PATH || process.env.BASE_PATH || `/${pkg.name}/`;

    return {
        base: basePath,
        plugins: [
            tanstackRouter({
                target: 'react',
                autoCodeSplitting: true,
            }),
            react(),
            tailwindcss(),
        ],
    }
})
