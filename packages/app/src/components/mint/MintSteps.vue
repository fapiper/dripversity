<template>
    <div class="flex flex-col">
        <StepItem
            :title="'Connect wallet'"
            :subtitle="isConnected && displayName"
            :index="1"
            :is-current="isCurrent('connect-wallet')"
            :is-success="isAfter('connect-wallet')"
        >
            <div class="space-y-4">
                <p>
                    Upon purchase we will send the NFT into your Ethereum
                    Wallet. Lorem ipsum dolor sit amet ipsum dolor sit amet.
                </p>

                <AppButton
                    full-width
                    size="sm"
                    @click.prevent="onClickConnect"
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
        </StepItem>

        <StepItem
            :title="'Purchase details'"
            :subtitle="isAfter('purchase-details') && 'x' + quantity"
            :index="2"
            :is-current="isCurrent('purchase-details')"
            :is-success="isAfter('purchase-details')"
        >
            <div class="space-y-4">
                <AppPanel
                    :transparent="true"
                    title="Dripversity NFT"
                    subtitle="1:1 NFT"
                    :src="require('@/assets/images/placeholder.png')"
                >
                    <div class="flex flex-1 items-center justify-end space-x-2">
                        <InputNumber
                            id="mint-price"
                            label="Price"
                            v-model="quantity"
                            :min="1"
                            :max="5"
                        />
                        <AppPrice
                            :price="quantity * price"
                            :digits="4"
                            class="w-20 items-end"
                        />
                    </div>
                </AppPanel>

                <AppButton full-width size="sm" @click.prevent="onClickBuy"
                    >Complete Purchase</AppButton
                >
            </div>
        </StepItem>

        <StepItem
            :title="'Sign transaction in wallet'"
            :subtitle="isAfter('sign-transaction') && 'Signed'"
            :index="3"
            :is-current="isCurrent('sign-transaction')"
            :is-success="isAfter('sign-transaction')"
            :is-error="false"
        >
            <div class="space-y-4">
                <p>
                    Check your wallet to confirm the transaction. You’ll be
                    asked to approve this purchase from your wallet.
                </p>

                <AppButton full-width size="xs" disabled
                    ><LoadingIcon /><span class="block"
                        >Waiting for Approval...</span
                    ></AppButton
                >
            </div>
        </StepItem>

        <StepItem
            :title="'Processing transaction on network'"
            :subtitle="isAfter('process-transaction') && 'Confirmed'"
            :index="4"
            :is-current="isCurrent('process-transaction')"
            :is-success="isAfter('process-transaction')"
            :is-error="false"
        >
            <div class="space-y-4">
                <p>
                    Your purchase is processing. It should be confirmed on the
                    blockchain shortly. We’re waiting for the network to process
                    your transaction.
                    <a
                        :href="'https://mumbai.polygonscan.com/tx/' + tx?.hash"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link"
                        >View transaction</a
                    >
                </p>

                <AppButton full-width size="xs" disabled
                    ><LoadingIcon /><span class="block"
                        >Waiting for Confirmation...</span
                    ></AppButton
                >
            </div>
        </StepItem>
        <StepItem
            :title="'Celebrate your NFT'"
            :is-current="isCurrent('confirm-purchase')"
            :is-success="isAfter('confirm-purchase')"
            :index="5"
        >
            <div class="space-y-4">
                <h3 class="title-3">Thank you!</h3>
                <p>
                    Thank your for supporting this project! This is your NFT.
                    Your transaction was successfully completed.
                </p>
                <TokenData />
                <AppButton
                    :href="'https://testnets.opensea.io/collection/dripversity'"
                    full-width
                    size="sm"
                    >View on Opensea</AppButton
                >
            </div>
        </StepItem>
    </div>
</template>

<script setup lang="ts">
import StepItem from "@/components/stepper/StepItem.vue";
import AppButton from "@/components/app/AppButton.vue";
import AppPanel from "@/components/app/AppPanel.vue";
import AppPrice from "@/components/app/AppPrice.vue";
import InputNumber from "@/components/input/InputNumber.vue";
import { onMounted, reactive, ref, shallowRef, unref, watch } from "vue";
import { noop, useStepper } from "@vueuse/core";
import TokenData from "@/components/token/TokenData.vue";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/modules/user";
import { Dripversity } from "@dripversity/contracts/typechain";
import { useDRIP } from "@/composables/useDRIP";

const quantity = ref(1);
const tx = shallowRef();

const { price, genericMint } = useDRIP();
const userStore = useUserStore();
const { connect } = userStore;
const { isConnected, displayName, connectingWallet, settingChain } =
    storeToRefs(userStore);

const onClickConnect = async function () {
    await connect();
    if (isConnected.value) {
        goToNext();
    }
};

const onClickBuy = async function () {
    const mintParams = reactive({ quantity, price });
    console.log("sign transaction with genericMint", mintParams);
    goToNext();
    tx.value = await genericMint(mintParams);
    goToNext();
    await tx.value.wait().then(() => goToNext());
};

onMounted(() => {
    if (isConnected.value) {
        goTo("purchase-details");
    }
});

const { current, goTo, goToNext, isCurrent, isAfter } = useStepper([
    "connect-wallet",
    "purchase-details",
    "sign-transaction",
    "process-transaction",
    "confirm-purchase",
]);
</script>
