<template>
    <section :id="id" class="relative overflow-hidden">
        <div
            class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full flex"
        >
            <img
                :src="src"
                :alt="alt || id"
                class="w-full object-cover object-left-bottom"
                v-parallax="{
                    from: { yPercent: 25, scale: 1.5 },
                    to: { yPercent: -25, scale: 1.5 },
                }"
            />
        </div>

        <span
            v-if="!!gradient"
            class="block absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-black/0 via-black/50 to-black"
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
defineProps(["id", "src", "alt", "gradient"]);
</script>
