<template>
    <LayoutSidebarContainer>
        <LayoutSidebarSidebar />
        <LayoutSidebarBody>
            <router-view />
        </LayoutSidebarBody>
    </LayoutSidebarContainer>
</template>

<script lang="ts" setup>
import LayoutSidebarContainer from "@/layouts/sidebar/src/LayoutSidebarContainer.vue";
import LayoutSidebarBody from "@/layouts/sidebar/src/LayoutSidebarBody.vue";
import LayoutSidebarSidebar from "@/layouts/sidebar/src/LayoutSidebarSidebar.vue";
</script>
