import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: [
                'resources/routes/**',
                'routes/**',
                'resources/views/**',
            ],
        }),
    ],
    server: {
        https: false,
        host: true,
        port: 3009,
        hmr: {
            host: 'localhost',
            protocol: 'ws',
        },
    },
});
