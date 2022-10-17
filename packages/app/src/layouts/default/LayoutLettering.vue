<template>
    <div
        class="fixed top-1/2 left-0 w-full transform -translate-y-1/2 h-40 overflow-hidden"
    >
        <div
            ref="letterRef"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center"
        >
            <DripversityIcon
                v-for="i in 4"
                :key="i"
                class="text-transparent stroke-1 stroke-blue/20 h-40 flex-shrink-0"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const letterRef = ref();

onMounted(() => {
    gsap.to(letterRef.value, {
        xPercent: -25,
        start: "top top",
        end: "max",
        ease: "none",
        scrollTrigger: {
            scrub: 0.8,
        },
    });
});
</script>
