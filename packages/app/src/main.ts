import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/font.css";
import "@/assets/styles/app.css";
import "./registerServiceWorker";
import animateDirective from "@/directives/animate";
import router from "./router";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.directive("animate", animateDirective);
app.use(router);
app.mount("#app");
