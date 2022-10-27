<template>
    <form
        @submit.prevent="subscribe"
        class="bg-neutral-800/50 backdrop-blur p-1 rounded space-y-2"
    >
        <div
            v-if="isFinished"
            class="flex items-start w-full space-x-2"
            :class="error ? 'text-red-600' : 'text-green-600'"
        >
            <ExclamationCircleIcon v-if="error" class="w-6 h-6 block" />
            <CheckCircleIcon v-else class="w-6 h-6 block" />

            <div class="space-y-1">
                <h4>
                    {{
                        error
                            ? "The following Error occured:"
                            : "Congratulations! Your subscription was successful"
                    }}
                </h4>

                <div
                    v-if="error"
                    class="p-2 text-xs rounded bg-red-600 text-white inline-block"
                >
                    <span>{{ error }}</span>
                </div>
            </div>
        </div>
        <div class="flex w-full items-end space-x-2">
            <div class="text-left flex flex-col flex-1">
                <input
                    required
                    v-model="email"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    class="w-full block h-12 bg-transparent px-4 border-none placeholder-neutral-400 placeholder:font-semibold !ring-0 !outline-none"
                />
            </div>
            <div>
                <AppButton :disabled="isFetching" type="submit" :color="color">
                    <span class="block w-24">{{
                        isFetching
                            ? "Loading"
                            : error
                            ? "Try Again"
                            : "Join Waitlist"
                    }}</span>
                </AppButton>
            </div>
        </div>

        <!--
        <div class="flex items-center space-x-2">
            <input
                id="agreement"
                type="checkbox"
                value=""
                required
                class="w-4 h-4 bg-neutral-200 border border-neutral-900 rounded !ring-0 !outline-0"
            />
            <label for="agreement" class="text-xs"
                >I agree to receive marketing emails from Dripversity</label
            >
        </div>
-->
    </form>
</template>

<script lang="ts" setup>
import AppButton from "@/components/app/AppButton.vue";
import { reactive, ref } from "vue";
import { useFetch } from "@vueuse/core";
import {
    ExclamationCircleIcon,
    CheckCircleIcon,
} from "@heroicons/vue/24/solid";

defineProps(["color"]);
const email = ref("");

const {
    isFinished,
    isFetching,
    error,
    execute: subscribe,
} = useFetch(`/api/subscribe`, { immediate: false })
    .post(reactive({ email }))
    .json();
</script>
