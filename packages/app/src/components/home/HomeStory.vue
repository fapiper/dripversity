<template>
    <!--
    <img
        class="w-full object-cover overflow-hidden rounded-t-2xl mt-12 lg:mt-16"
        src="@/assets/images/story-1.png"
        alt="The story behind Dripversity"
    />
-->

    <AppPinnedSection id="story" bg-fade="900">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div class="space-y-4" v-animate.stagger>
                <h3 class="tracking-widest text-xs uppercase">
                    The story behind <span class="font-logo">D</span>
                </h3>
                <h2 class="title !mt-6 !mb-8">How we got here</h2>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div v-animate class="flex-1">
                <img
                    v-parallax
                    class="w-full object-cover"
                    src="@/assets/images/story-2.png"
                    alt="How we got here"
                />
            </div>
        </div>
    </AppPinnedSection>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
</script>
