import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import scrollBehavior from "@/router/scrollBehavior";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: () =>
            import(
                /* webpackChunkName: "privacy-policy" */ "../views/PrivacyView.vue"
            ),
    },
    {
        path: "/terms-of-service",
        name: "terms-of-service",
        component: () =>
            import(
                /* webpackChunkName: "terms-of-service" */ "../views/TermsView.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior,
});

export default router;
