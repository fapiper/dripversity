<template>
    <li class="relative w-full flex space-x-2">
        <div class="flex flex-col items-center left-0 top-0 bottom-0 w-4">
            <span
                class="relative mt-1 mb-3 h-4 w-4 flex items-center justify-center flex-shrink-0"
            >
                <span
                    v-if="isCurrent"
                    class="animate-ping absolute block inset-0 rounded-full bg-blue/50"
                />
                <span
                    class="relative block h-2 w-2 rounded-full"
                    :class="[
                        isActive || isCurrent ? 'bg-blue' : 'bg-neutral-400/50',
                    ]"
                />
            </span>

            <span
                class="block flex-1 w-px"
                :class="[
                    isLast
                        ? 'bg-neutral-400/0'
                        : isActive || isCurrent
                        ? 'bg-blue'
                        : 'bg-neutral-400/25',
                ]"
            />
        </div>

        <div class="flex-1">
            <div class="flex items-center space-x-2">
                <h4 class="title-3 !mb-0 !leading-none inline-block">
                    {{ title }}
                </h4>
                <div
                    class="inline-flex rounded-lg items-center justify-center px-2 py-1 bg-neutral-800 text-xs whitespace-nowrap font-semibold"
                >
                    <span class="block">{{ tag }}</span>
                </div>
            </div>
            <div class="pb-12 pt-3">
                <slot />
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps([
    "title",
    "subtitle",
    "isCurrent",
    "isActive",
    "tag",
    "isLast",
]);

const classes = computed(() => {
    return {
        "!bg-green-600 !text-neutral-50": !!props.isCurrent,
    };
});
</script>
