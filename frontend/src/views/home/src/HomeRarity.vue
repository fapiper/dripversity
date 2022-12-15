<template>
    <section id="rarity">
        <div class="container-default px-0 lg:px-12 grid lg:grid-cols-5 gap-8">
            <div
                class="px-8 lg:px-0 space-y-6 lg:text-right lg:col-span-2"
                v-animate.stagger
            >
                <div>
                    <h2 class="title">Rarity System</h2>
                </div>

                <div class="space-y-2">
                    <p class="lg:text-end">
                        We equipped DRIPVERSITY with a rarity system that
                        controls the spawn probability of every trait. Lower
                        rarity ranks are assigned to more complex traits with
                        multiple logo and color variations or clothes with an
                        inner-, and outer layer. Pinned metal accessories also
                        make traits rarer.
                    </p>
                    <p class="lg:text-end">
                        Therefore, simpler traits with single logos usage,
                        clothes with an inner-, and no outer layer or chains
                        without a pendant, are more likely to drop due to a
                        higher rarity rank. Concerning each trait's rarity, the
                        integrated randomizer generates a unique trait
                        combination for every NFT.
                    </p>
                    <p class="lg:text-end">
                        <button class="link-2" @click.prevent="next()">
                            Shuffle
                        </button>
                        to create randomized trait combinations and see which
                        traits spawn. Maybe you get an ultra-rare DRIPVERSITY
                        patterned puffed hood jacket or an outstanding golden
                        hooded mask?
                    </p>
                </div>

                <div>
                    <AppButton @click.prevent="next()" color="outline"
                        >Shuffle</AppButton
                    >
                </div>
            </div>
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 lg:py-8 lg:bg-gradient-to-bl lg:from-neutral-900 lg:to-black lg:rounded lg:col-span-3"
                v-if="state"
            >
                <img
                    v-animate
                    :src="state.image"
                    :alt="index + ' rarity'"
                    class="rounded w-full"
                />
                <div class="space-y-2">
                    <ul
                        class="grid grid-cols-2 lg:grid-cols-1 gap-2"
                        v-animate.stagger
                    >
                        <li
                            class="flex w-full"
                            v-for="attribute of collapse
                                ? state.attributes
                                : state.attributes.slice(0, 6)"
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

                    <AppButton
                        @click.prevent="collapse = !collapse"
                        size="xs"
                        color="transparent"
                        class="!p-0"
                    >
                        <span class="block">
                            <template v-if="collapse"
                                >Collapse attributes</template
                            >
                            <template v-else
                                >Expand for all attributes</template
                            >
                        </span>
                        <ChevronUpIcon v-if="collapse" class="w-2 h-2 block" />
                        <ChevronDownIcon v-else class="w-2 h-2 block" />
                    </AppButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import AppButton from "@/components/app/AppButton.vue";
import AppPanel from "@/components/app/AppPanel.vue";
import { useCycleList } from "@vueuse/core";
import { tokens } from "@/constants";
import { ref } from "vue";

const collapse = ref(false);

const { state, index, next } = useCycleList<{ image: any; attributes: any }>(
    tokens.all
);
</script>
