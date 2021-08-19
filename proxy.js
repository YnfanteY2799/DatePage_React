let { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => app.use( createProxyMiddleware( '/api', { target: 'http://localhost:9091/Dates' } ) );