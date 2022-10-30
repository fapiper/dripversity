<template>
    <section id="explore">
        <div class="relative z-10 w-full" v-animate>
            <Swiper
                :modules="modules"
                grab-cursor
                free-mode
                :centeredSlides="true"
                loop
                :slides-per-view="'auto'"
                :loopedSlides="tokenLength"
                :space-between="0"
            >
                <SwiperSlide
                    v-for="token in tokens"
                    ref="slideRef"
                    :key="token.name"
                    class="!w-80 px-2"
                >
                    <TokenCard :token="token" />
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

const tokenLength = 10;
const tokens = Array.from({ length: tokenLength }, (_, id) => ({
    image: require(`@/assets/images/token/${id + 1}.jpg`),
    name: `# XXX`,
}));

const modules = [FreeMode] as any[];
</script>
