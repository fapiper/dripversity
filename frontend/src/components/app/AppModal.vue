<template>
    <TransitionRoot appear :show="modelValue" as="template">
        <Dialog as="div" @close="$emit('update:modelValue', false)">
            <div class="fixed inset-0 overflow-y-auto z-50">
                <div class="flex items-center justify-center h-screen p-4">
                    <TransitionChild
                        as="template"
                        enter="duration-200 ease-in-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in-out"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-black/50" />
                    </TransitionChild>

                    <TransitionChild
                        as="template"
                        enter="duration-200 ease-in-out"
                        enter-from="opacity-0 translate-y-12"
                        enter-to="opacity-100 translate-y-0"
                        leave="duration-200 ease-in-out"
                        leave-from="opacity-100 translate-y-0"
                        leave-to="opacity-0 translate-y-12"
                    >
                        <div
                            class="relative w-auto max-w-full max-h-full bg-gradient-to-bl from-neutral-900 via-neutral-900 to-black shadow transition transform rounded"
                        >
                            <div class="absolute top-0 right-0 p-2">
                                <AppButton
                                    size="xs"
                                    color="transparent"
                                    only-icon
                                    rounded="full"
                                    @click.prevent="
                                        $emit('update:modelValue', false)
                                    "
                                    ><XMarkIcon class="w-4 h-4"
                                /></AppButton>
                            </div>

                            <slot />
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from "@headlessui/vue";
import AppButton from "@/components/app/AppButton.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
defineEmits(["update:modelValue"]);
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
</script>
