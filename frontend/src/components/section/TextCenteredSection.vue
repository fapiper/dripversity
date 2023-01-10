<template>
    <section :id="id">
        <div
            class="px-8 lg:pl-[28%] lg:pr-12 w-full max-w-6xl 2xl:max-w-8xl space-y-6 flex flex-col"
            :class="aligns[align || 'left']"
            v-animate.stagger
        >
            <slot />
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id", "align"]);

const aligns = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
};
</script>
