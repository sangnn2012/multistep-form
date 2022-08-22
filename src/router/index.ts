import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        redirect: '/wizard'
    },
    {
        path: "/wizard",
        name: "Wizard",
        component: () => import('@/views/Wizard.vue'),
    },
    {
        path: "/error",
        name: "WizardError",
        component: () => import('@/views/WizardError.vue'),
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;