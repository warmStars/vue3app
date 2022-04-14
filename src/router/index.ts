import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { routers } from './router';
import util from '@/api/publicMethods/utils';
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
router.beforeEach((to, from, next) => {
    let title: any = to.meta.title;
    document.title = title;
    const role = util.getSessionStorage('userInfo');
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});
router.afterEach(to => {
    // TODO 设置 breadcrumbs
    window.scrollTo(0, 0);
});
export default router
