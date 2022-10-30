<template>
    <div class="inline-flex flex-col">
        <div class="flex items-center">
            <span class="block font-semibold">
                {{ round(price) }}
            </span>
            &nbsp;
            <PolygonIcon class="w-2 h-4 block" />
        </div>
        <span v-if="!hideFiat" class="block text-neutral-400 text-sm"
            >{{ maticToUsd(price, digits) }} $</span
        >
    </div>
</template>

<script setup lang="ts">
import PolygonIcon from "@/components/icons/PolygonIcon.vue";
import { useCurrency } from "@/composables/useCurrency";

const { maticToUsd } = useCurrency();

const props = defineProps(["price", "hideFiat", "digits"]);

const round = (price: number | string) =>
    Number(price).toFixed(props.digits || 2);
</script>
