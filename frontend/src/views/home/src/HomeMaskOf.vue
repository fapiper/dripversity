<template>
    <section id="mask-of" class="lg:py-0">
        <div class="container-default px-3 overflow-visible">
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
                    class="relative bg-gradient-to-bl from-neutral-900 via-neutral-900 to-black rounded-xl px-3 py-6 lg:px-6 space-y-6 col-start-1 col-span-2 z-10 lg:my-32"
                    v-animate.stagger
                >
                    <div>
                        <h2 class="title-2">
                            About the first Foundation collection
                        </h2>
                    </div>

                    <div class="space-y-2">
                        <p class="">
                            MASKOF is an animated 1/1 NFT collection showcasing
                            a character avatar with unique masked outfits. With
                            each NFT presenting its own story and aesthetic, it
                            was sold out instantly, with two more NFTs
                            completing the project.
                        </p>

                        <p class="">
                            However, after MASKOF,
                            <DripversityIcon class="text-dripversity" /> was
                            started and demanded even greater effort and time.
                            Maintaining the masked outfit aesthetic of MASKOF,
                            <DripversityIcon class="text-dripversity" />
                            showcases a great variety of headwear, hairstyle,
                            clothes, and jewelry traits, fitting all character
                            avatars.
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
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
</script>
