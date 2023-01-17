<template>
    <header id="home" class="relative z-10">
        <div
            class="relative min-h-screen w-full flex items-center justify-center py-32"
        >
            <div
                class="relative container-default max-w-2xl z-20 space-y-12 mt-32"
                v-animate.stagger
            >
                <DripversityIcon class="w-full text-blue stroke-creme" />
                <div
                    class="max-w-lg w-full mx-auto space-y-8 flex flex-col items-center"
                >
                    <p class="text-neutral-50 text-center">
                        A 3D-rendered collection of 250 NFTs representing the
                        diversity of ethnic heritage, cherishing education and
                        learning, with a crossover of college-themed and urban
                        fashion aesthetics
                    </p>
                    <AppCta />
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 left-0 w-full py-8 z-20">
            <div
                class="container-default mx-auto flex items-center justify-between"
            >
                <div
                    class="flex flex-col md:flex-row md:space-x-3 md:items-center"
                >
                    <span class="block text-neutral-400">Current phase:</span>

                    <div class="flex items-center space-x-2">
                        <span
                            class="relative h-3 w-3 flex items-center justify-center"
                        >
                            <span
                                class="animate-ping absolute block inset-0 rounded-full bg-orange-400 opacity-50"
                            ></span>
                            <span
                                class="relative block h-2 w-2 rounded-full bg-orange-400"
                            ></span>
                        </span>

                        <span class="block font-bold">{{
                            stringify(currentSalePhase)
                        }}</span>
                    </div>
                </div>
                <!--
                <AppButton color="outline" rounded="full" size="sm">
                    <PlayIcon class="w-4 h-4" />
                    <span class="block">Watch full promo</span>
                </AppButton>
-->
            </div>
        </div>

        <div
            class="absolute top-0 left-0 -bottom-60 w-full flex z-0 overflow-hidden"
        >
            <span
                class="block absolute inset-0 bg-gradient-to-t from-black via-black/75 md:via-black/50 z-10"
            />

            <img
                class="flex-1 object-cover object-top"
                src="@/assets/images/domel-lobby.png"
                alt="Dripversity Lobby"
            />
        </div>
    </header>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import { useSalePhase } from "@/composables/useSalePhase";
import AppButton from "@/components/app/AppButton.vue";
import AppCta from "@/components/app/AppCta.vue";
import { PlayIcon } from "@heroicons/vue/24/outline";

const { currentSalePhase, stringify } = useSalePhase();
</script>
