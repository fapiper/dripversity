<template>
    <section :id="id" class="relative">
        <img
            :src="src"
            :alt="alt || id"
            class="absolute top-0 left-0 w-full h-full object-cover object-left-bottom"
        />

        <span
            class="block absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-black/25 via-black/50 to-black"
        />

        <div
            class="relative container-default max-w-xl space-y-8 text-center"
            v-animate.stagger
        >
            <slot />
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id", "src", "alt"]);
</script>
