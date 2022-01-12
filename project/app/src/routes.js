export default [
    {
        path: '/',
        component: () => import('./pages/Homepage.vue'),
        name: 'home',
    },
    // {
    //     path: '/:catchAll(.*)',
    //     name: 'not-found',
    //     component: () => import('./pages/404.vue'),
    // },
]
