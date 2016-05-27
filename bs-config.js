var proxy = require('http-proxy-middleware');

module.exports = {
    server: {
        middleware: [
            proxy('/api/v1', {target: 'http://localhost:8080'}),
            proxy('/auth/v1', {
                target: 'http://localhost:8080',
                changeOrigin: true,
                auth: '1234:aabbccdd'
            })
        ]
    }
};