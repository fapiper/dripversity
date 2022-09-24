<template>
    <Disclosure as="div" v-slot="{ open }" class="w-full">
        <div class="w-full border-b border-neutral-800">
            <DisclosureButton
                class="flex items-center justify-between w-full py-4 cursor-pointer"
            >
                <span class="font-semibold text-left"
                    ><slot name="question"
                /></span>
                <div class="w-4 h-4 text-neutral-400">
                    <MinusIcon v-if="open" /> <PlusIcon v-else />
                </div>
            </DisclosureButton>

            <Transition @enter="onEnter" @leave="onLeave" :css="false">
                <div v-show="open" class="h-0 overflow-hidden">
                    <div class="py-4 pt-0"><slot name="answer" /></div>
                </div>
            </Transition>
        </div>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { MinusIcon, PlusIcon } from "@heroicons/vue/solid";
import { gsap } from "gsap";
import { computed, h } from "vue";
const toggle = (el: HTMLElement, height: string) =>
    gsap.to(el, { height, duration: 0.1, ease: "power3.out" });
const onEnter = async (el: HTMLElement, done: any) =>
    toggle(el, "auto").then(done);
const onLeave = async (el: HTMLElement, done: any) =>
    toggle(el, "0").then(done);
</script>
