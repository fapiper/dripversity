<template>
    <div
        class="w-full grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-900"
    >
        <div
            class="lg:sticky lg:top-0 lg:left-0 w-full lg:h-screen flex flex-col bg-black"
        >
            <AirdropPreview ref="preview" :alt="'Airdrop Placeholder'" />
        </div>

        <div class="relative bg-black p-8 lg:py-32">
            <div class="flex flex-col w-full max-w-lg mx-auto">
                <div class="mb-8 lg:mb-16 self-start">
                    <AppButtonBackOrHome />
                </div>

                <h1 class="title">
                    Claim your Dripversity Environment Airdrop
                </h1>

                <p class="mb-8">
                    Every Dripversity NFT owner receives an airdrop of it's
                    associated Environment NFT. Just follow the steps below to
                    assert your claim (it's free, you'll just need to cover the
                    transaction fees)
                </p>

                <div
                    class="space-y-4 rounded p-4 border-2 border-neutral-400/50 border-dashed"
                >
                    <h2 class="title-3">You're too early</h2>
                    <p class="text-lg">
                        This feature is not available in the current sale phase.
                    </p>
                    <AppButton color="outline" size="sm" :to="routes.home.Home"
                        >Return to Homepage</AppButton
                    >
                </div>
                <!--
                <AirdropSteps
                    v-model="tokens"
                    @update:modelValue="preview?.pause()"
                    @load="preview?.play()"
                />
-->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AirdropSteps from "@/views/airdrop/src/AirdropSteps.vue";
import AirdropPreview from "@/views/airdrop/src/AirdropPreview.vue";
import AppButtonBackOrHome from "@/components/app/AppButtonBackOrHome.vue";
import AppButton from "@/components/app/AppButton.vue";

import { routes } from "@/constants/";
const tokens = ref([]);
const preview = ref<typeof AirdropPreview>();
</script>
