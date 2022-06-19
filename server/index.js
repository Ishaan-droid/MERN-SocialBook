const express = require('express');
require('dotenv').config({ path: `${__dirname}/config.env` });
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const postRouter = require('./routes/posts');
const { connectDB } = require('./utils/connectDB');

const app = express();

// MIDDLEWARES
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));

// ROUTES
app.use('/posts', postRouter);

// DB CONNECTION
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
