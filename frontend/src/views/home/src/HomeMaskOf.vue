<template>
    <section id="mask-of" class="lg:py-0">
        <div class="container-default px-0 overflow-visible">
            <div class="relative grid grid-cols-1 lg:grid-cols-5">
                <div
                    class="w-full lg:absolute lg:top-0 lg:right-0 lg:w-4/5 lg:h-full flex"
                    v-animate
                >
                    <video
                        autoplay
                        playsinline
                        muted
                        loop
                        class="w-full flex-1 object-contain bg-transparent"
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
                    class="relative bg-neutral-900 rounded p-8 space-y-6 col-start-1 col-span-2 z-10 lg:my-32"
                    v-animate.stagger
                >
                    <div>
                        <h2 class="title-2 mb-0">About the First Collection</h2>
                    </div>

                    <div class="space-y-2">
                        <p class="text-neutral-400">
                            MASKOF is an animated 1/1 NFT collection of unique
                            masked outfits. Instantly sold out, two more NFTs
                            completed the project. We felt that collectors
                            appreciated the detailed 3D art and effort that was
                            put into this project - it felt surreal and we were
                            beyond grateful for this opportunity.
                        </p>

                        <p class="text-neutral-400">
                            However, after MASKOF we started DRIPVERSITY to
                            create a collection that demanded even greater
                            effort and time. Maintaining the masked outfit
                            aesthetic of MASKOF, DRIPVERSITY showcases a
                            coherent look with a great variety of headwear,
                            hairstyle, clothes, and jewelry traits.
                        </p>
                    </div>
                    <div>
                        <AppPanel
                            title="Explore MASKOF Collection"
                            subtitle="On Foundation"
                            :src="require('@/assets/images/maskof.gif')"
                            size="sm"
                            href="https://foundation.app/collection/maskof?sortOrder=DEFAULT"
                        >
                            <button class="px-4">
                                <ChevronRightIcon
                                    class="block w-3 text-neutral-200"
                                />
                            </button>
                        </AppPanel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import AppPanel from "@/components/app/AppPanel.vue";
</script>
