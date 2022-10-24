<template>
    <div>
        <table class="table-auto w-full">
            <tbody>
                <tr v-for="(value, key) in data" :key="key">
                    <td class="text-neutral-400">{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>

                <template v-if="collapse">
                    <tr class="border-t border-neutral-800"></tr>
                    <tr v-for="(value, key) in attributes" :key="key">
                        <td class="text-neutral-400">{{ key }}</td>
                        <td>{{ value }}</td>
                    </tr>
                </template>
            </tbody>
        </table>

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
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import AppButton from "@/components/app/AppButton.vue";
import { ref } from "vue";

defineProps(["token"]);

const collapse = ref(false);

const data = {
    Owner: "florentin.eth",
    Rarity: "florentin.eth",
    "Minted On": "florentin.eth",
};

const attributes = {
    Clothing: "Lorem",
    Color: "Ipsum",
    Any: "Dolor",
    More: "Lorem",
    Example: "Lorem",
};
</script>
