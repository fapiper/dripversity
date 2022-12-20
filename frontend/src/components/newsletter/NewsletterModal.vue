<template>
    <AppModal
        @update:modelValue="$emit('update:modelValue', false)"
        :modelValue="modelValue"
    >
        <div class="container-default max-w-xl py-8 lg:py-16 space-y-12">
            <h2 class="title text-center">Stay up to date</h2>

            <p class="text-neutral-50 text-center text-lg">
                Join the
                <DripversityIcon class="inline w-24 mb-1" /> family! Be the
                first to know about our token launch and get important
                information on the progress of our mission.
            </p>

            <NewsletterForm />
        </div>
    </AppModal>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
import AppModal from "@/components/app/AppModal.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";

defineEmits(["update:modelValue"]);
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
</script>
