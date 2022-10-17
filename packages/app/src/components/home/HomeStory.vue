<template>
    <!--
    <img
        class="w-full object-cover overflow-hidden rounded-t-2xl mt-12 lg:mt-16"
        src="@/assets/images/story-1.png"
        alt="The story behind Dripversity"
    />
-->

    <section id="story">
        <div class="container-default">
            <div class="grid lg:grid-cols-4 gap-8 lg:gap-16 items-center">
                <div
                    class="space-y-4 lg:col-start-2 lg:col-span-2"
                    v-animate.stagger
                >
                    <h3 class="tracking-widest text-sm uppercase">
                        The story behind
                        <DripversityIcon
                            class="inline-block align-middle w-16 mb-1 text-neutral-50"
                        />
                    </h3>
                    <h2 class="title !mt-6 !mb-8">How we got here</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
</script>
