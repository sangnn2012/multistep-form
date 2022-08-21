import { createWebHistory, createRouter } from "vue-router";
import Wizard from '@/views/Wizard.vue';
import WizardError from '@/components/WizardError.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        redirect: '/wizard'
    },
    {
        path: "/wizard",
        name: "Wizard",
        component: Wizard,
    },
    {
        path: "/error",
        name: "WizardError",
        component: WizardError,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;