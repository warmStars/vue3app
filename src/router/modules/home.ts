export default [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '้ฆ้กต' },
        children: [{
            path: "/myIndex",
            component: () => import('@/views/home/myIndex.vue'),
            meta: { title: 'ๆ็' },
        }]
    }
]
