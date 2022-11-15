<template>
    <div>
        <LayoutSidebarContainer>
            <LayoutSidebarSidebar />
            <LayoutSidebarBody>
                <router-view />
            </LayoutSidebarBody>
        </LayoutSidebarContainer>
        <CtaSection />
    </div>
</template>

<script lang="ts" setup>
import LayoutSidebarContainer from "@/layouts/sidebar/src/LayoutSidebarContainer.vue";
import LayoutSidebarBody from "@/layouts/sidebar/src/LayoutSidebarBody.vue";
import LayoutSidebarSidebar from "@/layouts/sidebar/src/LayoutSidebarSidebar.vue";
import CtaSection from "@/components/cta/CtaSection.vue";
</script>
