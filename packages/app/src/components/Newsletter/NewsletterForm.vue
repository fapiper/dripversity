<template>
    <div
        class="flex flex-col md:flex-row w-full md:items-end space-y-4 md:space-y-0 md:space-x-4"
    >
        <div class="text-left flex flex-col flex-1">
            <label for="email" class="text-xs leading-relaxed">Email</label>
            <input
                v-model="email"
                type="email"
                id="email"
                placeholder="Please enter your Email"
                class="w-full block h-12 bg-transparent px-4 border-b border-neutral-500 placeholder-neutral-500 !ring-0 !outline-none focus:border-blue"
            />
        </div>
        <div class="md:flex-shrink-0 md:w-40 md:inline-flex md:justify-end">
            <AppButton
                @click="subscribe"
                :disabled="isFetching"
                color="outline"
                >{{
                    isFetching ? "Loading" : error ? "Try Again" : "Subscribe"
                }}</AppButton
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppButton from "@/components/app/AppButton.vue";
import { reactive, ref } from "vue";
import { useFetch } from "@vueuse/core";

const email = ref("");

const {
    isFetching,
    error,
    execute: subscribe,
} = useFetch(`/api/subscribe`, { immediate: false })
    .post(reactive({ email }))
    .json();
</script>
