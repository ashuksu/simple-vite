import {defineConfig, loadEnv, type Plugin} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {tanstackRouter} from '@tanstack/router-plugin/vite'
import pkg from './package.json' with {type: 'json'}
import fs from 'node:fs'
import path from 'node:path'

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
            spaFallback404(basePath),
        ],
    }
})

/**
    Generates dist/404.html for GitHub Pages SPA fallback.
    pathSegmentsToKeep is calculated from basePath, not hardcoded
*/
function spaFallback404(basePath: string): Plugin {
    return {
        name: 'spa-fallback-404',
        closeBundle() {
            const pathSegmentsToKeep = basePath.split('/').filter(Boolean).length;

            const html = `<!doctype html>
            <html lang="en">
            <head>
                <meta charset="utf-8"/>
                <title>Redirecting...</title>
                <script>
                    var pathSegmentsToKeep = ${pathSegmentsToKeep};
                    var l = window.location;
                    l.replace(
                        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
                        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
                        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
                        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
                        l.hash
                    );
                </script>
            </head>
            <body></body>
            </html>`;

            fs.writeFileSync(path.resolve('dist', '404.html'), html);
        }
    };
}