<template>
    <div class="inline-flex flex-col">
        <div class="flex items-center">
            <span class="block font-semibold">
                {{ round(price) }}
            </span>
            <PolygonIcon class="w-4 h-4 block" />
        </div>
        <span v-if="!hideFiat" class="block text-neutral-400 text-sm"
            >{{ round(price) }} $</span
        >
    </div>
</template>

<script setup lang="ts">
import PolygonIcon from "@/components/icons/PolygonIcon.vue";

const props = defineProps(["price", "hideFiat", "digits"]);

const round = (price: number | string) =>
    Number(price).toFixed(props.digits || 2);
</script>
