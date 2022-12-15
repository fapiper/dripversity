<template>
    <ImageOnlySection
        id="story-img"
        :src="require('@/assets/images/hallway.png')"
        :alt="'Our Story'"
    />

    <TextCenteredSection id="story">
        <div class="space-y-2">
            <h3 class="text-xs tracking-widest uppercase">
                The story behind
                <DripversityIcon class="inline-block align-middle w-16" />
            </h3>

            <h2 class="title">How we got here</h2>
        </div>

        <div>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
            </p>
        </div>

        <div>
            <AppButton to="/#blockschmidt">Explore</AppButton>
        </div>
    </TextCenteredSection>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import AppButton from "@/components/app/AppButton.vue";
import ImageOnlySection from "@/components/section/ImageOnlySection.vue";
import TextCenteredSection from "@/components/section/TextCenteredSection.vue";
</script>
