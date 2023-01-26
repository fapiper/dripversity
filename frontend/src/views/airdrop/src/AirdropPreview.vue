<template>
    <div
        class="relative flex flex-col w-full flex-1 items-center justify-center p-8 pt-32 lg:py-32 bg-gradient-to-bl from-neutral-900 via-neutral-900 to-black"
    >
        <img
            class="relative block w-full object-contain rounded-xl"
            src="@/assets/images/classroom.png"
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
