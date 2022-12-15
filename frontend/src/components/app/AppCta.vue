<template>
    <template v-if="isPreSale">
        <NewsletterModal v-model="showNewsletterModal" />
        <AppButton
            @click.prevent="showNewsletterModal = true"
            :size="size"
            :color="color"
        >
            Join Waitlist
        </AppButton>
    </template>
    <template v-else>
        <AppButton :size="size" :color="color" to="/mint"
            ><span class="block">Start Minting</span>
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
