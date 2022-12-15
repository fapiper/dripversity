import { Directive, ref } from "vue";
import { gsap } from "gsap";

const from = { autoAlpha: 0, xPercent: 0, y: 10 };
const duration = 0.6;
const tween = ref<gsap.core.Tween | null>(null);

export default {
    mounted(el, binding) {
        const els = (binding?.modifiers.stagger && el.children) || el;
        tween.value = gsap.from(els, {
            ...from,
            stagger: {
                amount: duration,
            },
            scrollTrigger: {
                trigger: el,
                start: "center bottom",
            },
            overwrite: true,
            duration,
            ease: "Power3.in",
            ...binding?.value,
        });
    },
} as Directive;
