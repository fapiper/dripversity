<template>
    <AppModal
        @update:modelValue="$emit('update:modelValue', false)"
        :modelValue="modelValue"
    >
        <div class="container-default py-8 lg:py-16 space-y-12">
            <div
                class="w-full max-w-lg mx-auto space-y-8 text-center"
                v-animate.stagger
            >
                <h2 class="title">Stay up to date</h2>

                <p class="text-neutral-50">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt.
                </p>

                <div>
                    <NewsletterForm />

                    <p class="text-xs text-left">
                        We will send you updates on the development on
                        dripversity to your email once a month.
                    </p>
                </div>
            </div>
        </div>
    </AppModal>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
import AppModal from "@/components/app/AppModal.vue";

defineEmits(["update:modelValue"]);
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
</script>
