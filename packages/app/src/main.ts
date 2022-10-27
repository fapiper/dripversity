import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/font.css";
import "@/assets/styles/app.css";
import "@/assets/styles/web3-onboard.css";

import "./registerServiceWorker";
import "swiper/css";
import "swiper/css/free-mode";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import pinDirective from "@/directives/pin";
import animateDirective from "@/directives/animate";
import parallaxDirective from "@/directives/parallax";
import { router, setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/store";
import { setupWeb3Onboard } from "@/wallets";
import { setupApolloClients } from "@/graphql";
import { setupGlobalComposables } from "@/composables";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.directive("pin", pinDirective);
app.directive("animate", animateDirective);
app.directive("parallax", parallaxDirective);

// Configure store
setupStore(app);

// Configure apollo graphql clients
setupApolloClients(app);

// Configure routing and head setup
setupRouter(app);
setupRouterGuard(router);

// Configure global composables
setupGlobalComposables(app);

// Configure web3 onboard modal
setupWeb3Onboard();

app.mount("#app");
