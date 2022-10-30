<template>
    <main>
        <LayoutLettering />

        <div class="relative min-h-screen flex flex-col">
            <slot />
        </div>
    </main>
</template>

<script lang="ts" setup>
import LayoutLettering from "@/layouts/default/LayoutLettering.vue";
</script>
