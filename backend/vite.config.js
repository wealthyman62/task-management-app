import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import path from 'path';

export default defineConfig({
    define: {
        __dirname: JSON.stringify(path.resolve()), // Inject global __dirname
    },
    server: {
        port: process.env.PORT,
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'express', // Framework: express, fastify, koa, etc.
            appPath: './server.js', // Entry point to your backend
            exportName: 'viteNodeApp', // Exported server instance
        }),
    ],
});
