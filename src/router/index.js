import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Sample',
        component: () => import('@/components/Sample.vue'),
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () => import('@/components/Gallery.vue'),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;