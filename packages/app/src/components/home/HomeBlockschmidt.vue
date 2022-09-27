<template>
    <AppPinnedSection id="blockschmidt">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="space-y-4" v-animate.stagger>
                <h2 class="title">The first Collection</h2>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>

                <a
                    href="https://foundation.app/collection/maskof?sortOrder=DEFAULT"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center w-full bg-black/50 backdrop-blur-sm rounded p-2 space-x-4 !mt-8"
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
                        <ChevronRightIcon class="block w-4 text-neutral-200" />
                    </button>
                </a>
            </div>
            <div class="flex-1" v-animate>
                <img
                    v-parallax
                    alt="Blockschmidt"
                    src="@/assets/images/blockschmidt.png"
                    class="w-full object-contain hidden lg:block"
                />
            </div>
        </div>
    </AppPinnedSection>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
import { ChevronRightIcon } from "@heroicons/vue/outline";
</script>
