import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutLegal from "@/layouts/legal/LayoutLegal.vue";
import HomeView from "@/views/HomeView.vue";
import scrollBehavior from "@/router/scrollBehavior";
import { App } from "vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/legal",
        name: `legal-layout`,
        component: LayoutLegal,
        children: [
            {
                path: "privacy-policy",
                name: "privacy-policy",
                component: () =>
                    import(
                        /* webpackChunkName: "privacy-policy" */ "@/views/PrivacyView.vue"
                    ),
            },
            {
                path: "terms-of-service",
                name: "terms-of-service",
                component: () =>
                    import(
                        /* webpackChunkName: "terms-of-service" */ "@/views/TermsView.vue"
                    ),
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior,
});

export function setupRouter(app: App<Element>) {
    app.use(router);
}
