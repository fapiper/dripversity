<template>
    <LayoutLegalContainer>
        <LayoutLegalSidebar />
        <LayoutLegalBody>
            <router-view />
        </LayoutLegalBody>
    </LayoutLegalContainer>
</template>

<script lang="ts" setup>
import LayoutLegalContainer from "@/layouts/legal/src/LayoutLegalContainer.vue";
import LayoutLegalBody from "@/layouts/legal/src/LayoutLegalBody.vue";
import LayoutLegalSidebar from "@/layouts/legal/src/LayoutLegalSidebar.vue";
</script>
