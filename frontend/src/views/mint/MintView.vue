<template>
    <div
        class="w-full grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-900"
    >
        <div
            class="lg:sticky lg:top-0 lg:left-0 w-full lg:h-screen p-8 pt-32 lg:py-32 flex flex-col bg-neutral-900"
        >
            <MintPreview
                ref="preview"
                :image="tokens[0]?.metadata?.image"
                :alt="tokens[0]?.metadata?.name"
            />
        </div>

        <div class="relative bg-black p-8 lg:py-32">
            <div class="flex flex-col w-full max-w-lg mx-auto">
                <div class="mb-8 lg:mb-16 self-start">
                    <AppButtonBackOrHome />
                </div>

                <h1 class="title">Claim your Dripversity NFT</h1>

                <MintSteps
                    v-model="tokens"
                    @update:modelValue="preview?.pause()"
                    @load="preview?.play()"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MintSteps from "@/views/mint/src/MintSteps.vue";
import MintPreview from "@/views/mint/src/MintPreview.vue";
import AppButtonBackOrHome from "@/components/app/AppButtonBackOrHome.vue";

const tokens = ref([]);
const preview = ref<typeof MintPreview>();
</script>
