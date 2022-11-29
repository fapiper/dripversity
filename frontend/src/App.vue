<template>
    <router-view v-slot="{ Component }">
        <LayoutDefault :is="Component" />
    </router-view>
</template>

<script lang="ts" setup>
import LayoutDefault from "@/layouts/default/LayoutDefault.vue";
</script>
