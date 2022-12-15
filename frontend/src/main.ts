import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/font.css";
import "@/assets/styles/app.css";
import "@/assets/styles/web3-onboard.css";
import "@/assets/styles/swiper.css";

import "./registerServiceWorker";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-coverflow";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { router, setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/store";
import { setupWeb3Onboard } from "@/wallets";
import { setupApolloClients } from "@/graphql";
import { setupGlobalComposables } from "@/composables";
import { setupDirectives } from "@/directives";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);

// Configure store
setupStore(app);

// Configure apollo graphql clients
setupApolloClients();

// Configure routing and head setup
setupRouter(app);
setupRouterGuard(router);

// Configure web3 onboard modal
setupWeb3Onboard();

// Configure global composables after web3Onboard
setupGlobalComposables(app);

// Configure directives
setupDirectives(app);

app.mount("#app");
