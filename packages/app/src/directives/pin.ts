import { Directive } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    mounted(el) {
        ScrollTrigger.create({
            trigger: el,
            pin: true,
            scrub: true,
        });
    },
} as Directive;
