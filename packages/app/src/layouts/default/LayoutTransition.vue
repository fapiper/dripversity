<template>
    <div
        v-show="show"
        class="fixed bottom-0 left-0 h-screen w-full overflow-hidden z-50"
    >
        <div
            class="absolute bottom-0 left-0 w-full h-0 bg-blue z-10"
            ref="lightBgRef"
        />

        <div
            class="absolute inset-0 flex items-center justify-center bg-black text-neutral-50"
            ref="darkBgRef"
        >
            <div
                ref="darkContentRef"
                class="text-center space-y-16 flex flex-col justify-center items-center transform translate-y-8"
            >
                <span class="font-logo text-5xl">DRIPVERSITY</span>
                <div
                    class="relative w-40 h-px bg-neutral-50/20 overflow-hidden rounded"
                >
                    <span
                        ref="progressRef"
                        class="absolute top-0 left-0 block w-0 h-full bg-neutral-50"
                    />
                </div>
            </div>
        </div>
    </div>

    <Transition
        @enter="onEnter"
        @leave="onLeave"
        :css="false"
        :appear="true"
        mode="out-in"
    >
        <slot></slot>
    </Transition>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { templateRef } from "@vueuse/core";
import { onMounted, ref } from "vue";

const show = ref(true);
const lightBgRef = templateRef("lightBgRef");
const darkBgRef = templateRef("darkBgRef");
const darkContentRef = templateRef("darkContentRef");
const progressRef = templateRef("progressRef");

const tl = () =>
    gsap.timeline({
        paused: true,
        defaults: { duration: 0.4, ease: "Power1.easeInOut" },
    });

const enterTl = ref();
const leaveTl = ref();

onMounted(() => {
    enterTl.value = tl().fromTo(
        progressRef.value,
        { width: "0%" },
        {
            width: "100%",
            duration: 1.2,
            ease: "slow(0.1, 2, false)",
        }
    );

    leaveTl.value = tl()
        .to(darkContentRef.value, { autoAlpha: 0, duration: 0.8 })
        .to(lightBgRef.value, { height: "100vh" })
        .to(lightBgRef.value, { yPercent: -100 })
        .to(darkBgRef.value, { autoAlpha: 0 });

    showLoader();
});

async function onEnter(el: Element, done: () => any) {
    await hideLoader();
    await done();
}

async function onLeave(el: Element, done: () => any) {
    showLoader();
    await done();
}

function showLoader() {
    console.log("showLoader");
    show.value = true;
    enterTl.value.play(0);
}

async function hideLoader() {
    console.log("hideLoader");
    await enterTl.value.then(() => leaveTl.value.play(0));
    show.value = false;
    leaveTl.value.progress(0).pause();
    enterTl.value.progress(0).pause();
}
</script>
