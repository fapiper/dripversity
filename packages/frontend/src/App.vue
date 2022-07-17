<template>
    <LayoutHeader />
    <LayoutBody>
        <router-view />
    </LayoutBody>
    <LayoutFooter />
</template>

<script lang="ts" setup>
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import LayoutFooter from "@/components/layout/LayoutFooter.vue";
import LayoutBody from "@/components/layout/LayoutBody.vue";
</script>
