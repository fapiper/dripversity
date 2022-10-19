<template>
    <ul class="flex flex-col" v-animate.stagger>
        <li class="flex flex-col space-y-1" v-for="(item, i) in 5" :key="item">
            <Disclosure as="div" v-slot="{ open }" class="w-full">
                <div class="w-full border-b border-neutral-800">
                    <DisclosureButton
                        class="flex items-center justify-start space-x-4 w-full py-4 cursor-pointer"
                    >
                        <span
                            class="bg-neutral-700 inline-flex items-center justify-center w-6 h-6 text-sm text-neutral-400 rounded-full"
                            ><span class="block">{{ i + 1 }}</span></span
                        >
                        <h5 class="block font-semibold">Lorem Ipsum dolor</h5>
                    </DisclosureButton>

                    <Transition @enter="onEnter" @leave="onLeave" :css="false">
                        <div v-show="open" class="h-0 overflow-hidden">
                            <div class="py-4 pt-0">
                                <p>
                                    Upon purchase we will send the NFT into your
                                    Ethereum Wallet. Lorem ipsum dolor sit amet
                                    ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </Transition>
                </div>
            </Disclosure>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { gsap } from "gsap";
const toggle = (el: HTMLElement, height: string) =>
    gsap.to(el, { height, duration: 0.1, ease: "power3.out" });
const onEnter = async (el: HTMLElement, done: any) =>
    toggle(el, "auto").then(done);
const onLeave = async (el: HTMLElement, done: any) =>
    toggle(el, "0").then(done);
</script>
