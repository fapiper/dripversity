<template>
    <StepperContainer ref="stepperRef" :steps="steps" />
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, unref } from "vue";
import { storeToRefs } from "pinia";
import { MaybeRef, useAsyncState } from "@vueuse/core";
import { useUserStore } from "@/store/modules/user";
import { useDRIP } from "@/composables/useDRIP";
import MintStepConnectWallet from "@/components/mint/MintStepConnectWallet.vue";
import MintStepPurchaseDetails from "@/components/mint/MintStepPurchaseDetails.vue";
import MintStepGenericProcessing from "@/components/mint/MintStepGenericProcessing.vue";
import MintStepConfirmPurchase from "@/components/mint/MintStepConfirmPurchase.vue";
import StepperContainer from "@/components/stepper/StepperContainer.vue";
import { h } from "vue";

const { price, genericMint, waitForTokens } = useDRIP();
const userStore = useUserStore();
const { connect } = userStore;
const { isConnected, displayName } = storeToRefs(userStore);

const stepperRef = ref<typeof StepperContainer>();

const tokens = shallowRef<any[]>();
const quantity = ref(1);
const tx = shallowRef();

onMounted(() => {
    if (isConnected.value) {
        stepperRef.value?.goTo("purchase-details");
    }
});

const connectWallet = useAsyncState(
    async function () {
        await connect();
        if (isConnected.value) {
            stepperRef.value?.goToNext();
        }
    },
    null,
    { immediate: false }
);

const purchase = useAsyncState(
    async function () {
        stepperRef.value?.goToNext();
        tx.value = await genericMint(reactive({ quantity, price }));
        stepperRef.value?.goToNext();
        const receipt = await tx.value.wait();
        stepperRef.value?.goToNext();
        tokens.value = await waitForTokens(receipt);
        stepperRef.value?.goToNext();
        return tx.value;
    },
    null,
    { immediate: false }
);

const isCurrentError = function (id: string, error: MaybeRef<any>) {
    return computed(() => {
        return unref(stepperRef.value?.isCurrent(id))
            ? unref(error)?.message || unref(error)
            : null;
    });
};

const steps = [
    {
        id: "connect-wallet",
        title: "Connect Wallet",
        subtitle: displayName,
        error: connectWallet.error,
        vnode: () =>
            h(MintStepConnectWallet, {
                onSubmit: () => connectWallet.execute(),
            }),
    },
    {
        id: "purchase-details",
        title: "Purchase details",
        subtitle: computed(() => "x " + quantity.value),
        error: isCurrentError("purchase-details", purchase.error),
        vnode: () =>
            h(MintStepPurchaseDetails, {
                modelValue: quantity.value,
                "onUpdate:modelValue": (value: number) =>
                    (quantity.value = value),
                price: price.value,
                onSubmit: () => purchase.execute(),
            }),
    },
    {
        id: "sign-tx",
        title: "Sign transaction in wallet",
        subtitle: "Signed",
        error: isCurrentError("sign-tx", purchase.error),
        vnode: () =>
            h(
                MintStepGenericProcessing,
                {
                    label: "Waiting for Approval...",
                },
                () =>
                    "Check your wallet to confirm the transaction. You’ll be asked to\n" +
                    "approve this purchase from your wallet."
            ),
    },
    {
        id: "process-tx",
        title: "Processing transaction on network",
        subtitle: "Confirmed",
        error: isCurrentError("process-tx", purchase.error),
        vnode: () =>
            h(
                MintStepGenericProcessing,
                {
                    label: "Waiting for Confirmation...",
                },
                () => [
                    "Your purchase is processing. It should be confirmed on the blockchain shortly. We’re waiting for the network to process your transaction.",
                    h(
                        "a",
                        {
                            href:
                                "https://mumbai.polygonscan.com/tx/" +
                                tx.value?.hash,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "link",
                        },
                        "View transaction"
                    ),
                ]
            ),
    },
    {
        id: "load-token",
        title: "Loading your token data",
        subtitle: "Finished",
        error: isCurrentError("load-token", purchase.error),
        vnode: () =>
            h(
                MintStepGenericProcessing,
                {
                    label: "Waiting for token...",
                },
                () =>
                    "Your transaction is confirmed on the blockchain. Our system is now loading your token data."
            ),
    },
    {
        id: "confirm-purchase",
        title: "Celebrate your NFT",
        error: isCurrentError("confirm-purchase", purchase.error),
        vnode: () => h(MintStepConfirmPurchase, { tokens }),
    },
];
</script>
