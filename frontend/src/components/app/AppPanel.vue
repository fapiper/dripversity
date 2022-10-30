<template>
    <component
        :is="is"
        :to="to && to"
        :href="href && href"
        :target="href && '_blank'"
        :rel="href && 'noopener noreferrer'"
        class="flex items-center w-full rounded p-2 space-x-4 transition duration-200"
        :class="
            transparent
                ? 'bg-transparent'
                : 'bg-black/50 backdrop-blur-sm hover:bg-black/60'
        "
    >
        <img
            v-if="src"
            class="w-12 h-12 rounded object-cover"
            :src="src"
            :alt="title"
        />
        <div class="flex flex-col">
            <h4 class="font-semibold">
                {{ title }}
            </h4>
            <span v-if="subtitle" class="text-neutral-400 text-sm">{{
                subtitle
            }}</span>
        </div>
        <div class="!ml-auto flex items-center">
            <slot></slot>
        </div>
    </component>
</template>

<script setup lang="ts">
const props = defineProps([
    "transparent",
    "src",
    "title",
    "subtitle",
    "href",
    "to",
]);
const is = props.to ? "router-link" : props.href ? "a" : "div";
</script>
