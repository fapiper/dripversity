<template>
    <section id="explore" class="!pb-0">
        <div class="relative z-10 w-full">
            <Swiper
                :modules="modules"
                grab-cursor
                :free-mode="true"
                :centeredSlides="true"
                loop
                :slides-per-view="'auto'"
                :loopedSlides="tokens.length"
                :space-between="0"
                v-animate.stagger
            >
                <SwiperSlide
                    v-for="(token, i) in tokens.all"
                    ref="slideRef"
                    :key="i"
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
import { tokens } from "@/constants";

const modules = [FreeMode] as any[];
</script>
