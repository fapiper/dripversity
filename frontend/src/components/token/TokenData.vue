<template>
    <div class="space-y-4">
        <div class="grid grid-cols-2 gap-1">
            <template v-for="(value, key) in data" :key="key">
                <div class="text-neutral-400">{{ key }}</div>
                <div>{{ value }}</div>
            </template>

            <template v-if="collapse">
                <div class="col-span-2 border-t border-neutral-800 my-2"></div>
                <template v-for="(attribute, i) of attributes" :key="i">
                    <div class="text-neutral-400">
                        {{ attribute.trait_type }}
                    </div>
                    <div>
                        {{ attribute.value }}
                    </div>
                </template>
            </template>
        </div>

        <AppButton
            @click.prevent="collapse = !collapse"
            size="xs"
            color="transparent"
            class="!p-0"
        >
            <span class="block">
                <template v-if="collapse">Collapse attributes</template>
                <template v-else>Expand for all attributes</template>
            </span>
            <ChevronUpIcon v-if="collapse" class="w-2 h-2 block" />
            <ChevronDownIcon v-else class="w-2 h-2 block" />
        </AppButton>
    </div>
</template>

<script lang="ts" setup>
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import AppButton from "@/components/app/AppButton.vue";
import { computed, ref } from "vue";
import { useTimeAgo } from "@vueuse/core";
import { getShortAddress } from "@/utils/ethereum";

const props = defineProps(["token"]);
const collapse = ref(false);

const data = computed(() => ({
    Owner: getShortAddress(props.token?.owner?.id || ""),
    "Minted On": useTimeAgo(props.token?.createdAtTimestamp * 1000).value,
}));

const attributes = computed(() => props.token?.metadata?.attributes || []);
</script>
