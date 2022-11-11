<template>
    <AppButton @click.prevent="goBackOrHome" color="transparent" class="!px-0">
        <ArrowLeftIcon class="w-4 h-4 block" />
        <span class="block">{{
            canGoBack ? "Back" : "Back to Main page"
        }}</span>
    </AppButton>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import AppButton from "@/components/app/AppButton.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { routes } from "@/constants/";

const router = useRouter();

const canGoBack = computed(() => !!window.history.state.back);

const goBackOrHome = function () {
    console.log("window.history", window.history);
    canGoBack.value ? router.go(-1) : router.push(routes.home.Home);
};
</script>
