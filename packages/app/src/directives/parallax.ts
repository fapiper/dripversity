import { Directive } from "vue";
import { gsap } from "gsap";
import { object } from "@/utils/";

export default {
    mounted(el, binding) {
        const defaultFrom = { yPercent: 50 };
        const defaultTo = {
            yPercent: -25,
            ease: "none",
            scrollTrigger: {
                start: "top bottom",
                end: "bottom top",
                trigger: el,
                scrub: true,
            },
        };

        const fromVars = object.deepMerge(
            defaultFrom,
            binding.value?.from || {}
        );
        const toVars = object.deepMerge(defaultTo, binding.value?.to || {});
        gsap.fromTo(el, fromVars, toVars);
    },
} as Directive;
