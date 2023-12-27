import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from "@/components/views/HomeComp.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComp
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../components/views/DashBoard.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/views/AboutComp.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router