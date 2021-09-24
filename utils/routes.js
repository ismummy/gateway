const ROUTES = [
    {
        url: '/search',
        proxy: {
            target: "http://localhost:6000",
            changeOrigin: true,
            pathRewrite: {
                [`^/search`]: '',
            },
        }
    },
    {
        url: '/logger',
        proxy: {
            target: "http://localhost:5000",
            changeOrigin: true,
            pathRewrite: {
                [`^/logger`]: '',
            },
        }
    }
]

module.exports = ROUTES;
