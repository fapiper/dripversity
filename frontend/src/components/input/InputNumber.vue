<template>
    <div class="inline-flex p-1 bg-neutral-800 rounded text-neutral-400">
        <label :for="id" class="sr-only">{{ label }}</label>
        <AppButton
            size="xs"
            only-icon
            color="gray"
            rounded="base"
            @click.prevent="emit('update:modelValue', modelValue - 1)"
            :disabled="!!min ? modelValue <= Number(min) : false"
        >
            <MinusIcon class="w-4 h-4" />
        </AppButton>
        <input
            v-bind="$attrs"
            type="number"
            class="inline-flex items-center text-neutral-50 w-8 h-6 text-center text-base font-normal bg-transparent m-0 !border-none !outline-none"
            :id="id"
            :value="modelValue"
            readonly
        />
        <AppButton
            size="xs"
            only-icon
            color="gray"
            rounded="base"
            @click.prevent="emit('update:modelValue', modelValue + 1)"
            :disabled="!!max ? modelValue >= Number(max) : false"
        >
            <PlusIcon class="w-4 h-4" />
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";
import AppButton from "@/components/app/AppButton.vue";
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
