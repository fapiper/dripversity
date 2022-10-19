<template>
    <NewsletterForm :color="color" v-if="isPreSale" />
    <AppButton
        v-else
        :size="size"
        :color="color"
        @click="setShowMintModal(true)"
        >Start Minting</AppButton
    >
</template>

<script setup lang="ts">
import { useSalePhase } from "@/composables/useSalePhase";
import AppButton from "@/components/app/AppButton.vue";
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
import { useAppStore } from "@/store/modules/app";
const { setShowMintModal } = useAppStore();

const { isPreSale } = useSalePhase();

defineProps(["color", "size"]);
</script>
