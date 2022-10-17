<template>
    <section id="team">
        <div class="container-default">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div
                    class="space-y-4 lg:col-start-2 lg:col-span-2"
                    v-animate.stagger
                >
                    <h2 class="title">Building a Team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p>
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <ul
                    class="lg:col-start-2 lg:col-span-3 flex space-x-4 overflow-hidden w-full"
                    v-animate.stagger
                >
                    <li
                        class="flex flex-col p-4 space-y-4 w-64 flex-shrink-0 shadow-2xl border border-neutral-800 bg-neutral-900 rounded"
                        v-for="item in 5"
                        :key="item"
                    >
                        <img
                            class="w-full aspect-square w-full rounded"
                            :src="
                                require(`@/assets/images/token/${item + 1}.jpg`)
                            "
                            :alt="'Member ' + item"
                        />
                        <div class="">
                            <h5 class="font-semibold leading-none">Name</h5>
                            <span class="text-neutral-400/50 text-xs uppercase"
                                >Role</span
                            >
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
</script>
