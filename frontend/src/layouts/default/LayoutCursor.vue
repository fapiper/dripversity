<template>
    <div>
        <div
            class="fixed top-0 left-0 w-6 h-6 rounded-full bg-neutral-200 opacity-50 pointer-events-none z-50"
            ref="followRef"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

const followRef = ref();

onMounted(() => {
    gsap.set(followRef.value, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(followRef.value, "x", "px");
    const ySet = gsap.quickSetter(followRef.value, "y", "px");

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });
});
</script>
