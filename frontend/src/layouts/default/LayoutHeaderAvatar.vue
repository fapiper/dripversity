<template>
    <Popover class="relative pointer-events-auto" v-slot="{ open }">
        <PopoverButton
            class="flex items-center rounded-full space-x-2 cursor-pointer !outline-none bg-neutral-900/50 backdrop-blur-sm p-1 pr-3"
        >
            <div class="flex w-8 h-8 rounded-full">
                <img
                    v-if="isConnected"
                    class="block w-full rounded-full"
                    :src="image"
                    :alt="'Avatar'"
                />

                <img
                    v-else
                    class="block w-full rounded-full"
                    src="@/assets/images/placeholder.png"
                    :alt="'Avatar'"
                />

                <!--
                <div
                    v-else
                    class="flex items-center justify-center rounded-full bg-transparent w-full text-neutral-50"
                >
                    <WalletIcon class="block w-4 h-4" />
                </div>
-->
            </div>

            <div class="relative w-8 h-8 rounded">
                <span
                    class="absolute top-1/2 left-1 right-1 block h-[0.05rem] bg-neutral-50 transform translate-y-[0.25rem] transition-transform duration-200 ease-in-out"
                    :class="open && 'rotate-45 !translate-y-1/2'"
                />
                <span
                    class="absolute top-1/2 left-1 right-1 block h-[0.05rem] bg-neutral-50 transform -translate-y-[0.25rem] transition-transform duration-200 ease-in-out"
                    :class="open && '-rotate-45 !translate-y-1/2'"
                />
            </div>
        </PopoverButton>

        <transition
            enter-active-class="transition duration-200 ease-in-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in-out"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel class="absolute top-full right-0 w-60 z-10 mt-2">
                <div
                    class="py-2 bg-neutral-50 text-neutral-900 rounded-2xl overflow-hidden"
                >
                    <div
                        class="px-4 py-2 mb-1 border-b border-neutral-200"
                        v-if="isConnected"
                    >
                        <span class="block text-xs">Connected as</span>
                        <span class="block font-bold">{{ displayName }}</span>
                    </div>

                    <ul class="flex flex-col">
                        <li v-for="(to, name) in routes" :key="name">
                            <router-link
                                class="block w-full px-4 py-1 hover:bg-neutral-100 transition-color ease-in"
                                :to="to"
                                >{{ name }}</router-link
                            >
                        </li>
                    </ul>
                    <ul
                        class="flex flex-col space-y-2 pt-1 mt-1 border-t border-neutral-200"
                    >
                        <li>
                            <button
                                class="flex items-center justify-start space-x-2 font-bold w-full px-4 py-1 hover:bg-neutral-200 transition-color ease-in"
                                @click.prevent="
                                    isConnected
                                        ? disconnectConnectedWallet()
                                        : connect()
                                "
                            >
                                <template v-if="connectingWallet">
                                    <LoadingIcon />
                                    <span class="block">Connecting...</span>
                                </template>
                                <template v-else-if="isConnected">
                                    <ArrowLeftOnRectangleIcon
                                        class="block w-4 h-4"
                                    />
                                    <span class="block">Disconnect Wallet</span>
                                </template>
                                <template v-else>
                                    <ArrowRightOnRectangleIcon
                                        class="block w-4 h-4"
                                    />
                                    <span class="block">Connect Wallet</span>
                                </template>
                            </button>
                        </li>
                    </ul>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script lang="ts" setup>
import { routes } from "@/constants/";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/modules/user";
import {
    WalletIcon,
    ArrowLeftOnRectangleIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/vue/24/solid";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";

const userStore = useUserStore();
const { disconnectConnectedWallet, connect } = userStore;
const { isConnected, image, displayName, connectingWallet } =
    storeToRefs(userStore);
</script>
