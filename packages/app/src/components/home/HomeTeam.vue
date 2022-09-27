<template>
    <AppPinnedSection id="team">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="space-y-2" v-animate.stagger>
                <h2 class="title">Building a Team</h2>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                </p>
                <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                </p>
            </div>

            <div>
                <ul
                    class="hidden lg:grid lg:grid-cols-3 gap-8"
                    v-animate.stagger
                >
                    <li
                        class="flex flex-col space-y-1"
                        v-for="item in 5"
                        :key="item"
                    >
                        <div class="aspect-square w-full bg-black rounded" />
                        <div>
                            <h5 class="font-semibold">Name</h5>
                            <span class="text-neutral-400 text-sm">Role</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </AppPinnedSection>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
</script>
