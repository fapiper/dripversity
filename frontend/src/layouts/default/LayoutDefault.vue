<template>
    <LayoutHeader />
    <LayoutBody>
        <slot />
    </LayoutBody>
    <LayoutFooter />
</template>

<script lang="ts" setup>
import LayoutHeader from "@/layouts/default/Header/LayoutHeader.vue";
import LayoutFooter from "@/layouts/default/Footer/LayoutFooter.vue";
import LayoutBody from "@/layouts/default/Body/LayoutBody.vue";
</script>
