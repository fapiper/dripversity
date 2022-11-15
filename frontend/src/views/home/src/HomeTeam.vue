<template>
    <ContainerSection id="team">
        <div class="grid col-span-1 lg:grid-cols-5 gap-16">
            <div
                class="lg:col-span-2 space-y-6 text-center lg:text-right"
                v-animate.stagger
            >
                <h2 class="title">Building a Team</h2>
                <div class="space-y-2">
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
                </div>

                <AppCta color="outline" />
            </div>

            <div
                class="lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
                v-animate.stagger
            >
                <article
                    v-for="item in 6"
                    :key="item"
                    class="flex flex-col rounded bg-neutral-900"
                >
                    <img
                        class="w-full aspect-square w-full rounded"
                        :src="require(`@/assets/images/token/${item + 1}.jpg`)"
                        :alt="'Member ' + item"
                    />
                    <div class="p-2 text-center">
                        <h5 class="font-semibold leading-normal">Name</h5>
                        <span
                            class="text-neutral-200/50 uppercase text-xs leading-normal"
                            >Role</span
                        >
                    </div>
                </article>
            </div>
        </div>
    </ContainerSection>
</template>

<script lang="ts" setup>
import ContainerSection from "@/components/section/ContainerSection.vue";
import AppButton from "@/components/app/AppButton.vue";
import AppCta from "@/components/app/AppCta.vue";
</script>
