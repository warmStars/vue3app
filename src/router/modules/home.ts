export default [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
        children: [{
            path: "/myIndex",
            component: () => import('@/views/home/myIndex.vue'),
            meta: { title: '我的' },
        }]
    }
]
