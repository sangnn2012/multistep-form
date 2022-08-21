import { createWebHistory, createRouter } from "vue-router";
import Wizard from '@/views/Wizard.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;