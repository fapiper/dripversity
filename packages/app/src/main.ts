import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/font.css";
import "@/assets/styles/app.css";
// Import Swiper styles
import "./registerServiceWorker";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import pinDirective from "@/directives/pin";
import animateDirective from "@/directives/animate";
import parallaxDirective from "@/directives/parallax";
import { router, setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import { setupStore } from "@/store";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.directive("pin", pinDirective);
app.directive("animate", animateDirective);
app.directive("parallax", parallaxDirective);

// Configure store
setupStore(app);

// Configure routing and head setup
setupRouter(app);
setupRouterGuard(router);

app.mount("#app");
