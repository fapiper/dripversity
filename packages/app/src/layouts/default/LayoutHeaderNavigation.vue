<template>
    <ul class="flex space-x-4 items-center">
        <li v-for="(to, name) in routes" :key="name">
            <router-link
                class="text-base pointer-events-auto link-2"
                :to="to"
                >{{ name }}</router-link
            >
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { routes } from "@/constants/";
</script>
