<template>
    <div class="flex lg:mx-auto w-60 h-60 lg:h-auto lg:w-full">
        <img
            v-if="image"
            class="block w-full object-contain"
            :src="image"
            :alt="alt"
        />

        <video
            v-else
            ref="video"
            playbackRate="1.5"
            loop
            class="block w-full object-cover"
            width="100%"
            poster="@/assets/images/placeholder.png"
        >
            <source src="@/assets/videos/reveal.mp4" type="video/mp4" />
        </video>
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
