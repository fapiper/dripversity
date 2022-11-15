import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutSidebar from "@/layouts/sidebar/LayoutSidebar.vue";
import HomeView from "@/views/home/HomeView.vue";
import MintView from "@/views/mint/MintView.vue";
import scrollBehavior from "@/router/scrollBehavior";
import { App } from "vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/mint",
        name: "mint",
        component: MintView,
    },
    {
        path: "/support",
        name: `support-layout`,
        component: LayoutSidebar,
        children: [
            {
                path: "getting-started/how-to-create-a-wallet",
                name: "how-to-create-a-wallet",
                component: () =>
                    import(
                        /* webpackChunkName: "how-to-create-a-wallet" */ "@/views/support/HowToCreateAWalletView.vue"
                    ),
            },
            {
                path: "getting-started/how-to-mint",
                name: "how-to-mint",
                component: () =>
                    import(
                        /* webpackChunkName: "how-to-mint" */ "@/views/support/HowToMintView.vue"
                    ),
            },
            {
                path: "legals/privacy-policy",
                name: "privacy-policy",
                component: () =>
                    import(
                        /* webpackChunkName: "privacy-policy" */ "@/views/legal/PrivacyView.vue"
                    ),
            },
            {
                path: "legals/terms-of-service",
                name: "terms-of-service",
                component: () =>
                    import(
                        /* webpackChunkName: "terms-of-service" */ "@/views/legal/TermsView.vue"
                    ),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
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
