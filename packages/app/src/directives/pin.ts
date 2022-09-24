import { Directive } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    mounted(el) {
        ScrollTrigger.create({
            trigger: el,
            start: "center center",
            pin: true,
            scrub: true,
            pinSpacing: false,
        });
    },
} as Directive;
