<template>
    <AppButton
        full-width
        size="sm"
        @click.prevent="onClickConnect"
        :disabled="connectingWallet"
    >
        <LoadingIcon v-if="connectingWallet" />
        <span class="block">
            {{
                connectingWallet
                    ? "Connecting..."
                    : connectedWallet
                    ? "Disconnect"
                    : "Connect Wallet"
            }}
        </span></AppButton
    >
</template>

<script setup lang="ts">
import AppButton from "@/components/app/AppButton.vue";
import { useOnboard } from "@web3-onboard/vue";
import { ethers } from "ethers";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { watch } from "vue";

const emit = defineEmits(["connect"]);

const { connectedWallet, connectingWallet, connectWallet, disconnectWallet } =
    useOnboard();

watch(connectedWallet, () => {
    console.log("connectedWallet changed", connectedWallet.value);
    if (connectedWallet.value?.provider) {
        const ethersProvider = new ethers.providers.Web3Provider(
            connectedWallet.value.provider,
            "any"
        );
        console.log(
            "connectedWallet changed --> emit connect with",
            ethersProvider
        );
        emit("connect", ethersProvider);
    }
});

const onClickConnect = async () => {
    const { provider, label } = connectedWallet.value || {};
    if (provider && label) {
        await disconnectWallet({ label });
    } else {
        await connectWallet();
    }
};
</script>
