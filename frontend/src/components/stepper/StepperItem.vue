<template>
    <div class="w-full border-b border-neutral-800">
        <div
            class="flex items-center justify-start space-x-4 w-full py-4 cursor-auto"
        >
            <div
                class="inline-flex items-center justify-center w-6 h-6 text-sm rounded-full overflow-hidden bg-neutral-700 text-neutral-400 flex-shrink-0"
                :class="classes"
            >
                <XMarkIcon v-if="!!error" class="block w-3 h-3" />
                <CheckIcon v-else-if="isSuccess" class="block w-3 h-3" />
                <span v-else class="block">{{ index }}</span>
            </div>
            <h5 class="block font-semibold flex-grow flex-shrink-0">
                {{ title }}
            </h5>
            <span
                v-if="subtitle && isSuccess"
                class="block truncate text-neutral-400 text-right"
                >{{ subtitle }}</span
            >
        </div>

        <div v-show="isCurrent">
            <div class="relative py-4 pt-0">
                <div
                    v-if="error"
                    class="absolute z-10 inset-0 flex flex-col justify-center bg-neutral-900 p-4 pt-0"
                >
                    <div class="border border-red-600 p-4 rounded">
                        <p class="text-red-600 txt-sm truncate">
                            {{ error }}
                        </p>
                    </div>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps([
    "id",
    "title",
    "subtitle",
    "index",
    "isCurrent",
    "isSuccess",
    "error",
]);

const classes = computed(() => {
    return {
        "!bg-green-600 !text-neutral-50": !!props.isSuccess,
        "!bg-red-500 !text-neutral-50": !!props.error,
        "!bg-blue !text-neutral-50": !!props.isCurrent && !props.error,
    };
});
</script>
