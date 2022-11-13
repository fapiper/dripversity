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
                    <AppButton color="outline" @click.prevent="token.next()"
                        >Shuffle</AppButton
                    >
                </div>
            </div>
            <div
                class="flex flex-col space-y-4 p-8 bg-gradient-to-tl from-neutral-900 to-black rounded"
                v-if="token.state"
            >
                <img
                    :src="token.state.image"
                    :alt="token.index + ' rarity'"
                    class="rounded w-56 mx-auto"
                    v-animate
                />
                <ul
                    class="grid grid-cols-3 grid-rows-4 gap-2"
                    v-animate.stagger
                >
                    <li
                        class="flex w-full"
                        v-for="attribute of token.state.attributes"
                        :key="token.id + '-' + attribute"
                    >
                        <AppPanel
                            :border="true"
                            :truncate="true"
                            size="xs"
                            :title="attribute.value"
                            :subtitle="attribute?.trait_type || ''"
                        ></AppPanel>
                    </li>
                </ul>
                <div class="lg:hidden pt-4 w-full">
                    <AppButton
                        color="outline"
                        full-width
                        @click.prevent="token.next()"
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
import { computedAsync, useCycleList } from "@vueuse/core";

const token = computedAsync(async () => {
    return useCycleList(
        await Promise.all(
            Array.from({ length: 21 }, async (_, i) => ({
                image: require("@/assets/images/rarity/" + i + ".png"),
                attributes: await import(
                    "@/assets/attributes/" + i + ".json"
                ).then((f) => {
                    return f.default;
                }),
            }))
        )
    );
}, useCycleList([]));
</script>
