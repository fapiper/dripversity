<template>
    <section id="cta">
        <div class="overflow-hidden pt-28 lg:pt-20">
            <div
                class="sm:rounded bg-gradient-to-bl from-blue via-blue to-blue-700 border border-blue-700 container-default max-w-6xl py-8 lg:py-16 space-y-12"
            >
                <ul
                    class="w-full flex items-center justify-center space-x-4 lg:space-x-8 -mt-28 lg:-mt-36"
                    v-animate.stagger
                >
                    <li
                        class="block flex-grow-0 flex-shrink-0 w-32"
                        v-for="item in 5"
                        :key="item"
                    >
                        <div
                            class="flex items-center justify-center text-center aspect-square w-full bg-black/70 backdrop-blur-sm border-2 border-neutral-50 border-dashed rounded transform scale-100"
                            v-if="item === 3"
                        >
                            <span class="block font-bold text-2xl">?</span>
                        </div>
                        <img
                            v-else
                            class="w-full rounded scale-90"
                            :src="
                                require(`@/assets/images/token/${item + 1}.jpg`)
                            "
                            :alt="'Token Cta ' + item"
                        />
                    </li>
                </ul>

                <div
                    class="w-full max-w-lg mx-auto space-y-8 text-center"
                    v-animate.stagger
                >
                    <h2 class="title">
                        {{
                            isPreSale ? "Stay up to date" : "Claim your NFT now"
                        }}
                    </h2>

                    <p class="text-neutral-50 text-lg">
                        {{
                            isPreSale
                                ? "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
                                : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt."
                        }}
                    </p>

                    <AppCta color="secondary" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useSalePhase } from "@/composables/useSalePhase";
import AppCta from "@/components/app/AppCta.vue";

const { isPreSale } = useSalePhase();
</script>
