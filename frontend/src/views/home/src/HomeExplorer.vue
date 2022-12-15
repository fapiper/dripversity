<template>
    <section id="explorer" class="!pb-0">
        <div
            class="relative z-10 w-full flex flex-col items-center justify-start space-y-4"
            v-animate
        >
            <div class="relative rotate-180 transform">
                <ArrowUp class="text-neutral-50/50 w-3 h-3 md:w-4 md:h-4" />
            </div>

            <div class="relative w-full">
                <Swiper
                    :effect="'coverflow'"
                    :modules="modules"
                    :autoplay="{
                        delay: 750,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }"
                    :coverflowEffect="{
                        rotate: 0,
                        modifier: 2.6,
                        stretch: 0,
                        scale: 0.99,
                        stretch: 1,
                        slideShadows: false,
                    }"
                    :centeredSlides="true"
                    loop
                    :allowTouchMove="false"
                    :breakpoints="{
                        0: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                        1536: {
                            slidesPerView: 6,
                        },
                    }"
                >
                    <SwiperSlide
                        v-for="(token, i) in tokens.all"
                        ref="slideRef"
                        :key="i"
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

            <div class="relative">
                <ArrowUp
                    class="text-neutral-50/50 block w-3 h-3 md:w-4 md:h-4"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import TokenCard from "@/components/token/TokenCard.vue";
import { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { tokens } from "@/constants";
import ArrowUp from "@/components/icons/ArrowUp.vue";

const modules = [EffectCoverflow, Autoplay] as any[];
</script>
