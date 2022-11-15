<template>
    <section id="blockschmidt" class="lg:py-0">
        <div class="container-default overflow-visible">
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
                        id="maskof"
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
                    class="relative bg-neutral-900 rounded py-8 px-4 lg:px-8 space-y-2 col-start-1 col-span-2 z-10 lg:my-32"
                    v-animate.stagger
                >
                    <h2 class="title-2">The first Collection</h2>
                    <p class="text-neutral-400">
                        “MASKOF” is an animated 1/1 NFT collection of unique
                        masked outfits with custom beats. Instantly sold out,
                        and followed up by two more editions, the 10 piece
                        collection was completed. We felt that people
                        appreciated the 3D animated art style and saw the time
                        and love that was put into this collection. After
                        realizing that NFT collectors spent over 2 ETH on those
                        NFTs, it felt surreal, and we were beyond grateful for
                        this opportunity.
                    </p>
                    <p class="text-neutral-400">
                        However, after “MASKOF” this new project “DRIPVRSITY”
                        was started with an approach to create a collection with
                        even greater time and effort needed to be accomplished.
                        Staying true to the masked outfit aesthetic of “MASKOF”,
                        “DRIPVERSITY” includes this coherent aesthetic while
                        simultaneously combining it with an abundant variety of
                        headwear, hairstyle, clothes and jewelry pieces.
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
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import AppPanel from "@/components/app/AppPanel.vue";
</script>
