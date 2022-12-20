<template>
    <div
        class="relative flex flex-col w-full flex-1 items-center justify-center p-8 pt-32 lg:py-32"
    >
        <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            src="@/assets/images/placeholder-airdrop-bg.png"
            :alt="alt + ' Background'"
        />

        <img
            class="relative block w-full flex-1 object-cover rounded shadow"
            src="@/assets/images/placeholder-airdrop.png"
            :alt="alt"
        />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps(["image", "alt"]);

const video = ref<HTMLVideoElement>();

onMounted(() => {
    if (video.value) {
        video.value.playbackRate = 1.5;
    }
});

const play = function () {
    video.value?.play();
};

const pause = function () {
    video.value?.pause();
};

defineExpose({ play, pause });
</script>
