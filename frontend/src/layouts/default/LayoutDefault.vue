<template>
    <LayoutHeader />
    <LayoutBody>
        <LayoutTransition>
            <component :is="is" />
        </LayoutTransition>
    </LayoutBody>
    <LayoutFooter />
</template>

<script lang="ts" setup>
import LayoutHeader from "@/layouts/default/Header/LayoutHeader.vue";
import LayoutFooter from "@/layouts/default/Footer/LayoutFooter.vue";
import LayoutBody from "@/layouts/default/Body/LayoutBody.vue";
import LayoutTransition from "@/layouts/default/Transition/LayoutTransition.vue";

defineProps(["is"]);
</script>
