<template>
    <section id="blockschmidt" class="lg:!p-0">
        <div class="container-default overflow-visible">
            <div class="relative grid grid-cols-1 lg:grid-cols-5">
                <div
                    class="w-full lg:absolute lg:top-0 lg:right-0 lg:w-4/5 lg:h-full flex"
                    v-animate
                >
                    <video
                        autoplay
                        muted
                        loop
                        id="maskof"
                        class="w-full flex-1 object-contain"
                    >
                        <source
                            src="@/assets/videos/MASKOF.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div
                    v-parallax="{
                        from: { yPercent: 25 },
                        to: { yPercent: -25 },
                    }"
                    class="relative bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 py-8 px-4 lg:px-8 space-y-2 col-start-1 col-span-2 z-10 lg:my-32"
                    v-animate.stagger
                >
                    <h2 class="title-2">The first Collection</h2>
                    <p class="text-neutral-600">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>

                    <AppPanel
                        class="!mt-8"
                        title="Explore MASKOF Collection"
                        subtitle="On Foundation"
                        :src="require('@/assets/images/maskof.gif')"
                        href="https://foundation.app/collection/maskof?sortOrder=DEFAULT"
                    >
                        <button class="px-4">
                            <ChevronRightIcon
                                class="block w-4 text-neutral-200"
                            />
                        </button>
                    </AppPanel>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/outline";
import AppPanel from "@/components/app/AppPanel.vue";
</script>
