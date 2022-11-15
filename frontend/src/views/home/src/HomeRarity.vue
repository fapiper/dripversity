<template>
    <section id="rarity">
        <div
            class="container-default px-0 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
            <div class="px-8 lg:px-0 space-y-8 lg:text-right" v-animate.stagger>
                <h2 class="title">Unique<br />characteristics</h2>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <div class="hidden lg:block">
                    <AppButton @click.prevent="next()">Shuffle</AppButton>
                </div>
            </div>
            <div
                class="flex flex-col space-y-4 px-8 lg:py-8 lg:bg-gradient-to-bl lg:from-neutral-900 lg:to-black lg:rounded"
                v-if="state"
            >
                <img
                    v-animate
                    :src="state.image"
                    :alt="index + ' rarity'"
                    class="rounded w-full sm:w-80 mx-auto"
                />
                <ul
                    class="grid grid-cols-3 grid-rows-4 gap-2"
                    v-animate.stagger
                >
                    <li
                        class="flex w-full"
                        v-for="attribute of state.attributes"
                        :key="attribute"
                    >
                        <AppPanel
                            :reverse="true"
                            size="xs"
                            color="gray"
                            :title="attribute.value"
                            :subtitle="attribute?.trait_type || ''"
                        ></AppPanel>
                    </li>
                </ul>
                <div class="lg:hidden flex flex-col items-center">
                    <AppButton color="outline" @click.prevent="next()"
                        >Shuffle</AppButton
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppButton from "@/components/app/AppButton.vue";
import AppPanel from "@/components/app/AppPanel.vue";
import { useCycleList } from "@vueuse/core";
import { tokens } from "@/constants";

const { state, index, next } = useCycleList<{ image: any; attributes: any }>(
    tokens.all
);
</script>
