import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/font.css";
import "@/assets/styles/app.css";
// Import Swiper styles
import "./registerServiceWorker";
import pinDirective from "@/directives/pin";
import animateDirective from "@/directives/animate";
import parallaxDirective from "@/directives/parallax";
import router from "./router";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.directive("pin", pinDirective);
app.directive("animate", animateDirective);
app.directive("parallax", parallaxDirective);

app.use(router);
app.mount("#app");
