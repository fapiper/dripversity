<template>
    <TransitionRoot appear :show="getShowMintModal" as="template">
        <Dialog as="div" @close="onClose">
            <div class="fixed inset-0 pt-16 lg:pt-32 z-50">
                <div class="container-default mx-auto flex justify-center">
                    <TransitionChild
                        as="template"
                        enter="duration-100 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-100 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay
                            class="fixed inset-0 bg-black/50 -z-10"
                        />
                    </TransitionChild>

                    <TransitionChild
                        as="template"
                        enter="duration-100 ease-out"
                        enter-from="opacity-0 translate-y-12"
                        enter-to="opacity-100 translate-y-0"
                        leave="duration-100 ease-in"
                        leave-from="opacity-100 translate-y-0"
                        leave-to="opacity-0 translate-y-12"
                    >
                        <div
                            class="rounded-t-2xl bg-neutral-900 border border-neutral-800 w-full p-8 lg:p-16 overflow-y-auto"
                        >
                            <div class="grid lg:grid-cols-5 gap-8 lg:gap-16">
                                <div class="lg:hidden">
                                    <h3 class="title !m-0">
                                        Claim your Dripversity NFT
                                    </h3>
                                </div>
                                <img
                                    class="col-span-2 lg:order-last w-full"
                                    src="@/assets/images/placeholder.png"
                                    alt="Dripversity token placeholder"
                                />
                                <div class="col-span-3">
                                    <h3 class="title">
                                        Claim your Dripversity NFT
                                    </h3>

                                    <MintSteps />
                                </div>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts" setup>
import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { useAppStore } from "@/store/modules/app";
import { storeToRefs } from "pinia";
import MintSteps from "@/components/mint/MintSteps.vue";

const appStore = useAppStore();
const { getShowMintModal } = storeToRefs(appStore);

const onClose = () => {
    appStore.setShowMintModal(false);
};
</script>
