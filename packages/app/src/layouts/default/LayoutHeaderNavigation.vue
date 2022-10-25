<template>
    <Popover class="relative pointer-events-auto" v-slot="{ open }">
        <PopoverButton
            class="relative cursor-pointer block bg-transparent w-12 h-12 rounded-xl !outline-none"
        >
            <span
                class="absolute top-1/2 left-1 right-1 block h-[0.1rem] bg-neutral-50 transform translate-y-[0.25rem] transition-transform duration-200 ease-in-out"
                :class="open && 'rotate-45 !translate-y-1/2'"
            />
            <span
                class="absolute top-1/2 left-1 right-1 block h-[0.1rem] bg-neutral-50 transform -translate-y-[0.25rem] transition-transform duration-200 ease-in-out"
                :class="open && '-rotate-45 !translate-y-1/2'"
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
            <PopoverPanel class="absolute top-full right-0 w-60 z-10 mt-2">
                <div
                    class="p-4 bg-neutral-50 border text-neutral-900 rounded-2xl"
                >
                    <ul class="flex flex-col space-y-2">
                        <li v-for="(to, name) in routes" :key="name">
                            <router-link
                                class="text-2xl link text-neutral-900 opacity-100 hover:text-neutral-900/70"
                                :to="to"
                                >{{ name }}</router-link
                            >
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
</script>
