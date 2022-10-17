<template>
    <Popover class="relative pointer-events-auto" v-slot="{ open }">
        <PopoverButton
            class="relative cursor-pointer block border bg-neutral-50 w-20 h-10 rounded-full"
        >
            <span
                class="absolute top-1/2 left-4 right-4 block h-[2px] bg-black transform translate-y-[5px] transition-transform duration-200 ease-in-out"
                :class="open && 'rotate-[20deg] !translate-y-1/2'"
            />
            <span
                class="absolute top-1/2 left-4 right-4 block h-[2px] bg-black transform -translate-y-[5px] transition-transform duration-200 ease-in-out"
                :class="open && '-rotate-[20deg] !translate-y-1/2'"
            />
        </PopoverButton>
        <transition
            enter-active-class="transition duration-200 ease-in-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in-out"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel class="absolute top-full right-0 w-64 z-10 mt-2">
                <ul
                    class="flex flex-col space-y-2 p-4 bg-neutral-50 border text-neutral-50 rounded-2xl"
                >
                    <li v-for="(to, name) in routes" :key="name">
                        <router-link
                            class="text-2xl link text-neutral-900 opacity-100 hover:text-neutral-900/70"
                            :to="to"
                            >{{ name }}</router-link
                        >
                    </li>
                </ul>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script lang="ts" setup>
import { routes, socials } from "@/constants/";
import AppButton from "@/components/app/AppButton.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>
