const ROUTES = [
    {
        url: '/search',
        proxy: {
            target: process.env.SEARCH_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/search`]: '',
            },
        }
    },
    {
        url: '/logger',
        proxy: {
            target: process.env.LOGGER_SERVICE,
            changeOrigin: true,
            pathRewrite: {
                [`^/logger`]: '',
            },
        }
    }
]

module.exports = ROUTES;
