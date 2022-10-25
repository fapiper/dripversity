<template>
    <section id="team">
        <div class="container-default">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div
                    class="space-y-4 lg:col-start-2 lg:col-span-2"
                    v-animate.stagger
                >
                    <h2 class="title">Building a Team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p>
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div
                    class="lg:col-start-2 lg:col-span-3 flex space-x-4 overflow-hidden w-full"
                >
                    <Swiper
                        :modules="modules"
                        grab-cursor
                        free-mode
                        :slides-per-view="'auto'"
                        :breakpoints="{
                            768: {},
                            1024: {},
                            1536: {},
                        }"
                        :space-between="16"
                    >
                        <SwiperSlide
                            v-for="item in 5"
                            :key="item"
                            class="!w-64"
                        >
                            <article
                                class="flex flex-col border border-neutral-800 bg-neutral-900 rounded"
                            >
                                <img
                                    class="w-full aspect-square w-full rounded"
                                    :src="
                                        require(`@/assets/images/token/${
                                            item + 1
                                        }.jpg`)
                                    "
                                    :alt="'Member ' + item"
                                />
                                <div class="p-4">
                                    <h5 class="font-semibold leading-none">
                                        Name
                                    </h5>
                                    <span
                                        class="text-neutral-400/50 text-xs uppercase"
                                        >Role</span
                                    >
                                </div>
                            </article>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [FreeMode] as any[];
</script>
