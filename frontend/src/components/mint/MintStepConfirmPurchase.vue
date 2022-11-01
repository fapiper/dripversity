<template>
    <div class="space-y-4">
        <h3 class="title-3">Thank you!</h3>
        <p>
            Thank your for supporting this project! This is your NFT. Your
            transaction was successfully completed.
        </p>
        <TokenData />
        <AppButton
            :href="'https://testnets.opensea.io/collection/dripversity'"
            full-width
            size="sm"
            >View on Opensea</AppButton
        >
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app/AppButton.vue";
import TokenData from "@/components/token/TokenData.vue";
</script>
