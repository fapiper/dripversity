<template>
    <section id="explore">
        <div class="relative z-10 w-full overflow-hidden" v-animate>
            <Swiper
                :modules="modules"
                grab-cursor
                free-mode
                loop
                centeredSlides
                :slides-per-view="2"
                :breakpoints="{
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1536: {
                        slidesPerView: 5,
                    },
                }"
                :space-between="16"
            >
                <SwiperSlide
                    v-for="(token, i) in tokens"
                    ref="slideRef"
                    :key="token.name"
                >
                    <div
                        class="transform block py-8"
                        :class="
                            i % 2 === 0 ? '-translate-y-8' : 'translate-y-8'
                        "
                    >
                        <TokenCard :token="token" />
                    </div>
                </SwiperSlide>
                <template v-slot:container-start
                    ><span
                        class="absolute top-0 left-0 w-8 lg:w-32 h-full bg-gradient-to-r from-black z-20 pointer-events-none"
                /></template>
                <template v-slot:container-end
                    ><span
                        class="absolute top-0 right-0 w-8 lg:w-32 h-full bg-gradient-to-l from-black z-20 pointer-events-none"
                /></template>
            </Swiper>
        </div>
    </section>
</template>

<script lang="ts" setup>
import TokenCard from "@/components/token/TokenCard.vue";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";

const tokens = Array.from({ length: 10 }, (_, id) => ({
    image: require(`@/assets/images/token/${id + 1}.jpg`),
    name: `# XXX`,
}));

const modules = [FreeMode] as any[];
</script>
