const ROUTES = [
    {
        url: '/service1',
        proxy: {
            target: "https://jsonplaceholder.typicode.com/posts",
            changeOrigin: true,
            pathRewrite: {
                [`^/service1`]: '',
            },
        }
    },
    {
        url: '/service2',
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/service1`]: '',
            },
        }
    }
]

module.exports = ROUTES;
