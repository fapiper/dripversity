<template>
    <div class="flex flex-col w-full flex-1 items-center justify-center">
        <div class="relative flex w-full lg:w-96 lg:h-96 z-10">
            <img v-if="image" class="block w-full" :src="image" :alt="alt" />

            <video
                v-else
                ref="video"
                loop
                preload="auto"
                class="block w-full object-cover"
                poster="@/assets/images/placeholder.png"
            >
                <source src="@/assets/videos/reveal.mp4" type="video/mp4" />
            </video>
        </div>
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
