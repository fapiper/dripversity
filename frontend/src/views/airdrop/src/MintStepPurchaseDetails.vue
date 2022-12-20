<template>
    <div class="space-y-4">
        <AppPanel
            color="transparent"
            title="Dripversity NFT"
            subtitle="1:1 NFT"
            :src="require('@/assets/images/placeholder.png')"
        >
            <div class="flex flex-1 items-center justify-end space-x-2">
                <InputNumber
                    id="mint-price"
                    label="Price"
                    :model-value="modelValue"
                    @update:modelValue="emit('update:modelValue', $event)"
                    :min="1"
                    :max="5"
                />
                <AppPrice
                    :price="modelValue * price"
                    :digits="4"
                    class="w-16 items-end"
                />
            </div>
        </AppPanel>

        <AppButton full-width size="sm" @click.prevent="onClick"
            >Complete Purchase</AppButton
        >
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app/AppButton.vue";
import AppPanel from "@/components/app/AppPanel.vue";
import InputNumber from "@/components/input/InputNumber.vue";
import AppPrice from "@/components/app/AppPrice.vue";

const props = defineProps(["modelValue", "price"]);
const emit = defineEmits(["update:modelValue", "submit"]);

const onClick = async function () {
    emit("submit", { quantity: props.modelValue, price: props.price });
};
</script>
