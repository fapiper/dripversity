<template>
    <Disclosure
        as="div"
        v-slot="{ open }"
        class="w-full bg-neutral-900 lg:rounded"
    >
        <DisclosureButton
            class="flex items-center justify-between w-full cursor-pointer px-8 py-4"
        >
            <span class="text-lg text-left"><slot name="question" /></span>
            <div class="w-4 h-4 text-neutral-400 ml-8">
                <MinusIcon v-if="open" /> <PlusIcon v-else />
            </div>
        </DisclosureButton>

        <Transition @enter="onEnter" @leave="onLeave" :css="false">
            <div v-show="open" class="h-0 px-8 pb-4 overflow-hidden">
                <div class=""><slot name="answer" /></div>
            </div>
        </Transition>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/solid";
import { gsap } from "gsap";
const toggle = (el: HTMLElement, height: string) =>
    gsap.to(el, { height, duration: 0.1, ease: "power3.out" });
const onEnter = async (el: HTMLElement, done: any) =>
    toggle(el, "auto").then(done);
const onLeave = async (el: HTMLElement, done: any) =>
    toggle(el, "0").then(done);
</script>
