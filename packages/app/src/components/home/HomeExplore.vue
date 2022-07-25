<template>
    <section id="explore" ref="outer">
        <div class="container-default">
            <div class="w-full overflow-hidden" v-for="i in 3" :key="i">
                <ul
                    ref="inner"
                    class="flex w-full justify-start items-center"
                    v-animate.stagger
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
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import TokenCard from "@/components/token/TokenCard.vue";

const description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";

const tokens = Array.from({ length: 10 }, (_, id) => ({
    image: require(`@/assets/images/token/${id + 1}.jpg`),
    name: `Item #${id + 1}`,
    description,
}));

const outer = ref(null);
const inner = ref<Array<any>>([]);

onMounted(() => {
    inner.value.forEach((el, i) => {
        const [xStart, xEnd] = i % 2 === 0 ? [-100, 0] : [-0, -100];

        gsap.fromTo(
            el,
            { xPercent: xStart },
            {
                xPercent: xEnd,
                scrollTrigger: {
                    trigger: outer.value,
                    scrub: 0,
                    start: "top bottom",
                },
            }
        );
    });
});
</script>
