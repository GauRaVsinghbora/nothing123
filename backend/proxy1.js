import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 5500;

// Serve frontend files from the 'frontend' folder (relative to the current directory)
app.use(express.static(path.join(__dirname, '../frontend')));

// Proxy middleware to forward API requests to the backend
app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:3000', // Backend server
        changeOrigin: true,
    })
);

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
