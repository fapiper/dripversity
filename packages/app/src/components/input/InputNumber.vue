<template>
    <div class="inline-flex p-1 bg-neutral-800 rounded text-neutral-400">
        <label :for="id" class="sr-only">{{ label }}</label>
        <button
            class="flex items-center justify-center w-6 h-6 bg-neutral-700 disabled:bg-transparent rounded"
            @click.prevent="emit('update:modelValue', modelValue - 1)"
            :disabled="!!min ? modelValue <= Number(min) : false"
        >
            <span class="block"> <MinusIcon class="w-4 h-4" /></span>
        </button>
        <input
            v-bind="$attrs"
            type="number"
            class="inline-flex items-center text-neutral-50 w-8 h-6 text-center text-base font-normal bg-transparent m-0 !border-none !outline-none"
            :id="id"
            :value="modelValue"
            readonly
        />
        <button
            class="flex items-center justify-center w-6 h-6 bg-neutral-700 disabled:bg-transparent rounded"
            @click.prevent="emit('update:modelValue', modelValue + 1)"
            :disabled="!!max ? modelValue >= Number(max) : false"
        >
            <span class="block">
                <PlusIcon class="w-4 h-4" />
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";
defineProps(["modelValue", "id", "label", "max", "min"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<script lang="ts">
export default {
    inheritAttrs: false,
    customOptions: {},
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
