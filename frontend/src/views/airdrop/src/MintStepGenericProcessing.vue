<template>
    <div class="space-y-4">
        <p>
            <slot />
        </p>

        <AppButton full-width disabled size="sm"
            ><LoadingIcon /><span class="block">{{ label }}</span></AppButton
        >
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app/AppButton.vue";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";

defineProps(["label"]);
</script>
