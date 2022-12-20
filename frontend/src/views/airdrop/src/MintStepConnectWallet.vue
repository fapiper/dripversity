<template>
    <div class="space-y-4">
        <p>
            Upon purchase you will receive your custom Dripversity NFT into your
            Ethereum Wallet. It will then be available in all Ethereum supported
            marketplaces like Opensea or Foundation.
            <br /><span class="italic">New to Ethereum wallets?&nbsp;</span>
            <router-link
                class="link-2"
                :to="routes.support['How to create a wallet']"
            >
                Learn More
            </router-link>
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
import { routes } from "@/constants/";
const { isConnected, connectingWallet, settingChain } = storeToRefs(
    useUserStore()
);

const emit = defineEmits(["submit"]);

const onClick = async function () {
    emit("submit");
};
</script>
