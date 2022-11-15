<template>
    <component
        :is="is"
        :to="to && to"
        :href="href && href"
        :target="href && '_blank'"
        :rel="href && 'noopener noreferrer'"
        :class="classes.wrapper"
    >
        <img v-if="src" :class="classes.img" :src="src" :alt="title" />
        <div class="flex flex-col w-full">
            <h4 :class="classes.title">
                {{ title }}
            </h4>
            <span v-if="subtitle" :class="classes.subtitle">{{
                subtitle
            }}</span>
        </div>
        <div class="!ml-auto flex items-center">
            <slot></slot>
        </div>
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Indexable } from "@types";

const props = defineProps([
    "src",
    "title",
    "subtitle",
    "href",
    "to",
    "color",
    "size",
    "border",
    "truncate",
    "reverse",
]);
const is = props.to ? "router-link" : props.href ? "a" : "div";

const colors: Indexable<string> = {
    black: "bg-black/50 backdrop-blur-sm hover:bg-black/60",
    gray: "bg-neutral-900",
    transparent: "bg-transparent",
};

const borders: Indexable<string> = {
    black: "border-neutral-900",
    gray: "border-neutral-800",
    transparent: "border-transparent",
};

const sizes: Indexable<Indexable<string>> = {
    title: { xs: "text-xs", sm: "text-sm", md: "text-base" },
    subtitle: {
        xs: "text-[0.6rem]",
        sm: "text-xs",
        md: "text-sm",
    },
    img: { xs: "w-8 h-8", sm: "w-10 h-10", md: "w-12 h-12" },
};

const classes = computed(() => {
    const wrapper = [
        "flex items-center w-full rounded p-2 space-x-4 transition duration-200 border",
        colors[props.color || "black"],
        props.border ? borders[props.color || "black"] : "border-transparent",
    ];
    const img = [
        "w-12 h-12 rounded object-cover",
        sizes.img[props.size || "md"],
    ];
    const title = [
        "font-semibold",
        sizes.title[props.size || "md"],
        props.truncate && "truncate",
        props.reverse && "order-last",
    ];
    const subtitle = [
        "text-neutral-400",
        props.truncate && "truncate",
        sizes.subtitle[props.size || "md"],
        props.reverse && "order-first",
    ];

    return { wrapper, img, title, subtitle };
});
</script>
