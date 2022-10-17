<template>
    <section id="blockschmidt" class="lg:!p-0">
        <div class="container-default overflow-visible">
            <div class="relative grid grid-cols-1 lg:grid-cols-5">
                <div
                    class="w-full lg:absolute lg:top-0 lg:right-0 lg:w-4/5 lg:h-full flex"
                    v-animate
                >
                    <img
                        alt="Blockschmidt"
                        src="@/assets/images/blockschmidt.png"
                        class="flex-1 object-contain"
                    />
                </div>

                <div
                    v-parallax="{
                        from: { yPercent: 25 },
                        to: { yPercent: -25 },
                    }"
                    class="relative bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 py-8 px-4 lg:px-8 space-y-2 col-start-1 col-span-2 z-10 lg:my-32"
                    v-animate.stagger
                >
                    <h2 class="title-2">The first Collection</h2>
                    <p class="text-neutral-600">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>

                    <a
                        href="https://foundation.app/collection/maskof?sortOrder=DEFAULT"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center w-full bg-black/50 backdrop-blur-sm rounded p-2 space-x-4 !mt-8 transition hover:bg-black/60 duration-200"
                    >
                        <img
                            class="w-12 h-12 rounded object-cover"
                            src="@/assets/images/maskof.gif"
                            alt="Explore Mask Of Collection on Foundation"
                        />
                        <div class="flex flex-col">
                            <h4 class="font-semibold leading-none">
                                Explore MASKOF Collection
                            </h4>
                            <span class="text-neutral-400 text-sm"
                                >On Foundation</span
                            >
                        </div>
                        <button class="!ml-auto px-4">
                            <ChevronRightIcon
                                class="block w-4 text-neutral-200"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
import { ChevronRightIcon } from "@heroicons/vue/outline";
</script>
