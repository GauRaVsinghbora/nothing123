import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

const app = express();
const port = 5500;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Serve frontend files
app.use(express.static(path.join(__dirname)));

// Proxy middleware
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
