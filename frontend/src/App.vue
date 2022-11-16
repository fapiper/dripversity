<template>
    <LayoutHeader />
    <LayoutBody>
        <router-view v-slot="{ Component }">
            <LayoutTransition>
                <component :is="Component" />
            </LayoutTransition>
        </router-view>
    </LayoutBody>
    <LayoutFooter />
</template>

<script lang="ts" setup>
import LayoutHeader from "@/layouts/default/LayoutHeader.vue";
import LayoutFooter from "@/layouts/default/Footer/LayoutFooter.vue";
import LayoutBody from "@/layouts/default/LayoutBody.vue";
import LayoutTransition from "@/layouts/default/LayoutTransition.vue";
</script>
