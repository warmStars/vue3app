import home from './modules/home';
export const appRouter = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: { title: '登录' }
    },
    ...home
]
export const routers = [...appRouter];