<template>
    <TransitionRoot appear :show="getShowMintModal" as="template">
        <Dialog as="div" @close="onClose">
            <div
                class="fixed right-0 top-0 w-full max-w-4xl h-screen z-50 flex"
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
                            class="flex items-center p-4 lg:px-8 lg:col-span-5 border-b border-neutral-800"
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
                                ><XMarkIcon class="flex-shrink-0 block w-4 h-4"
                            /></AppButton>
                        </div>

                        <div
                            class="grid grid-cols-1 lg:grid-cols-5 overflow-y-auto lg:overflow-y-hidden"
                        >
                            <div class="lg:order-last lg:col-span-2 p-4 lg:p-8">
                                <MintPreview
                                    ref="preview"
                                    :image="tokens[0]?.metadata?.image"
                                    :alt="tokens[0]?.metadata?.name"
                                />
                            </div>

                            <div
                                class="lg:overflow-y-auto lg:col-span-3 p-4 lg:p-8"
                            >
                                <MintSteps
                                    v-model="tokens"
                                    @update:modelValue="preview?.pause()"
                                    @load="preview?.play()"
                                />
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
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useAppStore } from "@/store/modules/app";
import { storeToRefs } from "pinia";
import MintSteps from "@/views/mint/src/MintSteps.vue";
import AppButton from "@/components/app/AppButton.vue";
import { ref } from "vue";
const appStore = useAppStore();
const { getShowMintModal } = storeToRefs(appStore);
import MintPreview from "@/views/mint/src/MintPreview.vue";

const tokens = ref([]);
const preview = ref<typeof MintPreview>();

const onClose = async () => {
    appStore.setShowMintModal(false);
};
</script>
