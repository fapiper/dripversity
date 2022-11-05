<template>
    <div class="space-y-4">
        <h3 class="title-3">Thank you!</h3>
        <p>
            Thank your for supporting this project! This is your NFT. Your
            transaction was successfully completed.
        </p>
        <TokenData :token="token" />
        <AppButton
            :href="
                'https://testnets.opensea.io/de-DE/assets/mumbai/' +
                token?.contract?.id +
                '/' +
                token?.id
            "
            size="sm"
            full-width
            >View on Opensea</AppButton
        >
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app/AppButton.vue";
import TokenData from "@/components/token/TokenData.vue";
import { computed, unref } from "vue";

const props = defineProps(["tokens"]);
const token = computed(() => {
    const tokens = unref(props.tokens);
    return tokens && tokens.length > 0 ? tokens[0] : undefined;
});
</script>
