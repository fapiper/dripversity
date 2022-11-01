<template>
    <div class="space-y-4">
        <p>
            Upon purchase we will send the NFT into your Ethereum Wallet. Lorem
            ipsum dolor sit amet ipsum dolor sit amet.
        </p>

        <AppButton
            full-width
            size="sm"
            @click.prevent="onClick"
            :disabled="connectingWallet"
        >
            <LoadingIcon v-if="connectingWallet" />
            <span class="block">
                {{
                    connectingWallet || settingChain
                        ? "Connecting..."
                        : isConnected
                        ? "Disconnect"
                        : "Connect Wallet"
                }}
            </span></AppButton
        >
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app/AppButton.vue";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/modules/user";

const { isConnected, connectingWallet, settingChain } = storeToRefs(
    useUserStore()
);

const emit = defineEmits(["submit"]);

const onClick = async function () {
    emit("submit");
};
</script>
