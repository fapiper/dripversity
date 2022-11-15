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

                <AppCta />
            </div>

            <div
                class="lg:col-span-3 grid grid-cols-2 lg:grid-cols-3"
                v-animate.stagger
            >
                <article
                    v-for="(item, i) in 6"
                    :key="item"
                    class="flex flex-col p-4 border-b border-l border-neutral-800"
                    :class="[
                        (i + 1) % 2 === 0 &&
                            (i + 1) % 3 !== 0 &&
                            'border-r lg:border-r-0',
                        (i + 1) % 3 === 0 && 'lg:border-r',
                        i < 2 && 'border-t',
                        i < 3 && 'lg:border-t',
                        i >= 6 - 2 && 'border-b',
                        i >= 6 - 3 && 'lg:border-b',
                    ]"
                >
                    <img
                        class="w-full aspect-square w-full rounded"
                        :src="require(`@/assets/images/token/${item + 1}.jpg`)"
                        :alt="'Member ' + item"
                    />
                    <div class="pt-2">
                        <h5 class="font-semibold leading-none">Name</h5>
                        <span
                            class="text-neutral-200/50 uppercase text-xs leading-none"
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
