<template>
    <section id="rarity">
        <div
            class="container-default px-0 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
            <div class="px-8 lg:px-0 space-y-2 lg:text-right" v-animate.stagger>
                <h2 class="title">Rarity System</h2>
                <p>
                    We equipped DRIPVERSITY with a rarity system that controls
                    the spawn probability of every trait. Lower rarity ranks are
                    assigned to more complex traits like headwear with multiple
                    logo variations or clothes with an inner-, and outer layer.
                    Less shared color variants or pinned metal accessories also
                    make traits rarer. Moreover, simpler traits like clothes
                    that only have an inner-, and no outer layer, headwear with
                    one logo, or chains without a pendant, are more likely to
                    drop due to a higher rarity rank. Concerning each trait's
                    rarity, the integrated randomizer generates a unique trait
                    combination for every NFT.
                </p>
                <p>
                    Check out the SHUFFLE function to recreate the randomizing
                    process and look at which traits spawn for a better
                    understanding. Maybe you get an ultra-rare DRIPVERSITY
                    patterned puffed hood jacket or an outstanding golden hooded
                    mask?
                </p>
                <div class="hidden lg:block !mt-6">
                    <AppButton @click.prevent="next()" color="outline"
                        >Shuffle</AppButton
                    >
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
                    class="grid grid-cols-2 grid-rows-6 gap-1 sm:gap-2"
                    v-animate.stagger
                >
                    <li
                        class="flex w-full"
                        v-for="attribute of state.attributes"
                        :key="attribute"
                    >
                        <AppPanel
                            :truncate="true"
                            :reverse="true"
                            size="xs"
                            color="gray"
                            :title="attribute.value"
                            :subtitle="attribute?.trait_type || ''"
                        ></AppPanel>
                    </li>
                </ul>
                <div class="lg:hidden flex flex-col items-start">
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
