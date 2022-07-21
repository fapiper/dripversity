<template>
    <AppModal
        :modelValue="modelValue"
        @update:modelValue="emit('update:modelValue', $event)"
    >
        <div
            class="flex flex-col items-stretch p-4 md:p-8 lg:p-12 space-y-4 lg:space-y-8 text-center"
        >
            <div>
                <h2 class="font-bold text-xl">Subscribe to Newsletter</h2>
            </div>
            <div class="text-left">
                <label
                    for="email"
                    class="text-xs text-neutral-600 leading-relaxed"
                    >Email</label
                >
                <input
                    v-model="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    class="w-full block h-12 px-4 border rounded !ring-0 !outline-none focus:border-neutral-400"
                />
            </div>
            <div>
                <AppButton @click="subscribe" :disabled="isFetching">{{
                    isFetching ? "Loading" : error ? "Try Again" : "Subscribe"
                }}</AppButton>
            </div>
        </div>
    </AppModal>
</template>

<script lang="ts" setup>
import AppButton from "@/components/app/AppButton.vue";
import { reactive, ref } from "vue";
import { useFetch } from "@vueuse/core";
import AppModal from "@/components/app/AppModal.vue";

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const email = ref("");

const {
    isFetching,
    error,
    execute: subscribe,
} = useFetch(`/api/subscribe`, { immediate: false })
    .post(reactive({ email }))
    .json();
</script>
