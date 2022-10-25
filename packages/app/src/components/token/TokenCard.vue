<template>
    <article class="relative flex group rounded border border-neutral-800">
        <img
            :src="token.image"
            :alt="token.name"
            class="w-full aspect-square rounded"
        />

        <div
            class="absolute top-0 left-0 w-full h-full flex p-2 bg-neutral-900/90 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200"
        >
            <div
                class="p-2 md:p-4 border-2 border-neutral-400/50 border-dashed flex flex-col justify-center space-y-2 md:space-y-4"
            >
                <template v-if="isPreSale">
                    <h4
                        class="font-bold text-neutral-400/50 text-3xl md:text-6xl lg:text-7xl uppercase"
                    >
                        {{ token.name }}
                    </h4>
                    <p class="text-xs md:text-base text-neutral-400">
                        Join the waitlist and be the first to claim this NFT on
                        launch day
                    </p>
                    <div>
                        <AppCta size="sm" />
                    </div>
                </template>
                <template v-else>
                    <h4 class="font-bold text-xl">Yours?</h4>
                    <p class="text-xs md:text-base text-neutral-400">
                        Mint your own NFT now. Lorem Ipsum dolor sit amet.
                    </p>
                    <div>
                        <AppButton size="sm" to="/#home"
                            >Start Minting</AppButton
                        >
                    </div>
                </template>
            </div>
        </div>
    </article>
</template>

<script lang="ts" setup>
import AppButton from "@/components/app/AppButton.vue";
import { useSalePhase } from "@/composables/useSalePhase";
import AppCta from "@/components/app/AppCta.vue";

const { isPreSale } = useSalePhase();
defineProps(["token"]);
</script>
