<template>
    <section id="rarity">
        <div class="container-default max-w-6xl grid lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <div class="space-y-6">
                    <h2 class="text-5xl uppercase font-semibold">About</h2>
                    <h3 class="text-xs tracking-widest uppercase font-semibold">
                        Collection insights, process and rarity system
                    </h3>

                    <div class="space-y-3">
                        <p class="">
                            In total 1000 renders were created using a
                            randomizer tool with an integrated rarity system
                            that assigned unique trait combinations of 200+
                            traits consisting of headwear, hairstyle, clothes,
                            character avatar, facial expression, and jewelry.
                            The rarity system assigns lower drop rates to more
                            complex traits like clothes with multiple logo
                            variations or pinned metal accessories. Moreover,
                            simpler traits like headwear with single logo
                            variants or chains without a pendant are more likely
                            to drop due to their less complex structure.
                        </p>
                        <p class="">
                            For each of the five character avatars: Jordan,
                            Chris, Francesco, Hyuk, and Sanjith, 50 renders were
                            hand-picked after the randomization process to
                            achieve a balanced representation within the
                            collection of the most mesmerizing trait
                            combinations.
                        </p>
                        <p class="">
                            <button class="link-2" @click.prevent="next()">
                                Shuffle
                            </button>
                            to create trait combinations - can you spawn a rare
                            <DripversityIcon class="text-dripversity" />
                            patterned puffed hood jacket or an outstanding
                            golden hooded mask?
                        </p>
                    </div>

                    <div>
                        <AppButton @click.prevent="next()" color="secondary"
                            >Shuffle</AppButton
                        >
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:col-span-1" v-if="state">
                <img
                    v-animate
                    :src="state.image"
                    :alt="index + ' rarity'"
                    class="rounded-2xl w-full"
                />
                <div class="space-y-2">
                    <ul class="grid grid-cols-2 gap-2" v-animate.stagger>
                        <li
                            class="flex w-full"
                            v-for="attribute of collapse
                                ? state.attributes
                                : state.attributes.slice(0, 4)"
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
import DripversityIcon from "@/components/icons/DripversityIcon.vue";

const collapse = ref(false);

const { state, index, next } = useCycleList<{ image: any; attributes: any }>(
    tokens.all
);
</script>
