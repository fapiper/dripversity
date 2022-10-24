<template>
    <Disclosure as="div" class="w-full">
        <div class="w-full border-b border-neutral-800">
            <div
                class="flex items-center justify-start space-x-4 w-full py-4 cursor-auto"
            >
                <div
                    class="inline-flex items-center justify-center w-6 h-6 text-sm rounded-full overflow-hidden bg-neutral-700 text-neutral-400"
                    :class="classes"
                >
                    <CheckIcon v-if="isSuccess" class="block w-3 h-3" />
                    <XIcon v-else-if="isError" class="block w-3 h-3" />
                    <span v-else class="block">{{ index }}</span>
                </div>
                <h5 class="block font-semibold">
                    {{ title }}
                </h5>
            </div>

            <div v-show="isCurrent">
                <div class="py-4 pt-0">
                    <slot />
                </div>
            </div>
        </div>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { computed } from "vue";
import { CheckIcon, XIcon } from "@heroicons/vue/outline";

const props = defineProps([
    "title",
    "index",
    "isCurrent",
    "isSuccess",
    "isError",
]);

const classes = computed(() => {
    return {
        "!bg-green-600 !text-neutral-50": !!props.isSuccess,
        "!bg-red-500 !text-neutral-50": !!props.isError,
        "!bg-blue !text-neutral-50": !!props.isCurrent && !props.isError,
    };
});
</script>
