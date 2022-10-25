<template>
    <header id="home" class="relative z-10">
        <div
            class="relative min-h-screen w-full flex items-center justify-center py-32"
        >
            <div
                class="relative container-default max-w-xl flex flex-col items-center text-center z-20 space-y-8"
                v-animate.stagger
            >
                <DripversityIcon class="w-full text-blue stroke-creme" />

                <p class="text-neutral-50 text-sm md:text-base">
                    Molestie ullamcorper egestas at amet, id proin gravida
                    tortor. Semper pellentesque sed nisl enim volutpat sem est
                    vel. Id nunc cras at neque.
                </p>

                <div>
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
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"
                            ></span>
                            <span
                                class="relative inline-flex rounded-full h-2 w-2 bg-blue"
                            ></span>
                        </span>

                        <span class="block font-bold">{{
                            stringify(currentSalePhase)
                        }}</span>
                    </div>
                </div>
                <AppButton color="outline" rounded="full" size="sm">
                    <PlayIcon class="w-6 h-6" />
                    <span class="block">Watch full promo</span>
                </AppButton>
            </div>
        </div>

        <span
            class="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10"
        />

        <div class="absolute inset-0 flex z-0 overflow-hidden">
            <img
                class="flex-1 object-cover"
                src="@/assets/images/hero.jpeg"
                alt="Dripversity Environment"
            />
        </div>
    </header>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import { useSalePhase } from "@/composables/useSalePhase";
import AppButton from "@/components/app/AppButton.vue";
import AppCta from "@/components/app/AppCta.vue";
import { PlayIcon } from "@heroicons/vue/outline";

const { currentSalePhase, stringify } = useSalePhase();
</script>
