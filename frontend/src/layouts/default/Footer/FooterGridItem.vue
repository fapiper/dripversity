<template>
    <div :class="classes.wrapper">
        <h3 v-if="title" :class="classes.title">{{ title }}</h3>

        <slot />

        <ul class="flex flex-col space-y-2" v-if="routes">
            <li v-for="(to, name) in routes" :key="name">
                <router-link :to="to" class="link text-sm">{{
                    name
                }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Indexable } from "@types";

const props = defineProps(["title", "routes", "size"]);

const sizes: Indexable<Indexable<string>> = {
    title: { md: "font-semibold", lg: "title-2 !mb-0" },
    cols: { md: "col-span-1", lg: "col-span-2" },
};

const classes = computed(() => {
    const size = props.size || "md";
    const title = sizes.title[size];
    const wrapper = [
        sizes.cols[size],
        "flex flex-col items-start justify-between space-y-6 lg:py-24 p-8",
    ];

    return {
        title,
        wrapper,
    };
});
</script>
