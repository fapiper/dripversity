<template>
    <TransitionRoot appear :show="getShowMintModal" as="template">
        <Dialog as="div" @close="onClose">
            <div
                class="fixed right-0 top-0 w-full max-w-3xl h-screen z-50 flex"
            >
                <TransitionChild
                    as="template"
                    enter="duration-200 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay class="fixed inset-0 bg-black/60 -z-10" />
                </TransitionChild>

                <TransitionChild
                    as="template"
                    enter="duration-200 ease-out"
                    enter-from="translate-x-full"
                    enter-to="translate-x-0"
                    leave="duration-200 ease-in"
                    leave-from="translate-x-0"
                    leave-to="translate-x-full"
                >
                    <div
                        class="flex flex-col w-full bg-neutral-900 border-l border-neutral-800"
                    >
                        <div
                            class="flex items-center py-2 lg:py-4 px-4 lg:px-8 lg:col-span-5 border-b border-neutral-800"
                        >
                            <div class="flex-1 truncate">
                                <h3 class="title-2 !m-0">
                                    Claim your Dripversity NFT
                                </h3>
                            </div>

                            <AppButton
                                @click.prevent="onClose"
                                only-icon
                                rounded="full"
                                size="xs"
                                color="transparent"
                                ><XIcon class="flex-shrink-0 block w-4 h-4"
                            /></AppButton>
                        </div>

                        <div
                            class="p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 overflow-y-auto lg:overflow-y-hidden"
                        >
                            <div class="lg:order-last lg:col-span-2">
                                <img
                                    class="lg:mx-auto w-44 h-44 lg:h-80 lg:w-80 object-contain"
                                    src="@/assets/images/placeholder.png"
                                    alt="Dripversity token placeholder"
                                />
                            </div>

                            <div class="lg:overflow-y-auto lg:col-span-3">
                                <MintSteps />
                            </div>
                        </div>
                    </div>
                </TransitionChild>
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
import { XIcon } from "@heroicons/vue/outline";
import { useAppStore } from "@/store/modules/app";
import { storeToRefs } from "pinia";
import MintSteps from "@/components/mint/MintSteps.vue";
import AppButton from "@/components/app/AppButton.vue";

const appStore = useAppStore();
const { getShowMintModal } = storeToRefs(appStore);

const onClose = () => {
    appStore.setShowMintModal(false);
};
</script>
