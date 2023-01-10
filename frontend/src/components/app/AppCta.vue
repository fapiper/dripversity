<template>
    <template v-if="isPreSale">
        <AppButton
            href="https://foundation.app/@blockschmidt"
            :size="size"
            :color="color"
        >
            Mint Dripversity Drop
        </AppButton>
    </template>
    <template v-else>
        <AppButton
            :size="size"
            :color="color"
            href="https://foundation.app/@blockschmidt"
            >Mint Dripversity Drop
        </AppButton>
    </template>
</template>

<script setup lang="ts">
import { useSalePhase } from "@/composables/useSalePhase";
import AppButton from "@/components/app/AppButton.vue";
import { ref } from "vue";
import NewsletterModal from "@/components/newsletter/NewsletterModal.vue";
const showNewsletterModal = ref(false);

const { isPreSale } = useSalePhase();

defineProps(["color", "size"]);
</script>
