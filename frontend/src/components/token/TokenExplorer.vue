<template>
    <div class="w-full overflow-hidden">
        <ul
            ref="list"
            class="flex w-full justify-start items-center md:gap-y-4 lg:gap-y-8"
        >
            <li
                class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0"
                v-for="token in tokens"
                :key="token.name"
            >
                <TokenCard :token="token" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import TokenCard from "@/components/token/TokenCard.vue";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const props = defineProps(["tokens", "rtl"]);
const list = ref(null);

onMounted(() => {
    const [xStart, xEnd] = props.rtl ? [-25, -100] : [-75, 0];

    gsap.fromTo(
        list.value,
        { xPercent: xStart },
        {
            xPercent: xEnd,
            scrollTrigger: {
                trigger: list.value,
                scrub: 1,
                start: "top top",
            },
        }
    );
});
</script>
