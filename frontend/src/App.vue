<template>
    <LayoutDefault>
        <router-view v-slot="{ Component }">
            <LayoutTransition>
                <component :is="Component" />
            </LayoutTransition>
        </router-view>
    </LayoutDefault>
</template>

<script lang="ts" setup>
import LayoutTransition from "@/layouts/default/Transition/LayoutTransition.vue";
import LayoutDefault from "@/layouts/default/LayoutDefault.vue";
</script>
