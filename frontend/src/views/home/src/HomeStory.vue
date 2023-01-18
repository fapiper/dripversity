<template>
    <!--
    <ImageOnlySection
        id="story-img"
        :src="require('@/assets/images/hallway.png')"
        :alt="'Unrevealed Campus'"
    />
-->
    <TextCenteredSection
        id="story"
        :src="require('@/assets/images/hallway.png')"
        :alt="'Unrevealed Campus'"
    >
        <h2 class="title uppercase">How we got here</h2>

        <h3 class="subtitle">
            The Story of
            <DripversityIcon class="text-dripversity w-16 mb-0.5" />
        </h3>

        <div class="space-y-1">
            <p class="text-center">
                Increasingly seeing people with college gear from Harvard or
                Yale makes one wonder if those people are students of those
                universities, supposedly they are not, why would they wear those
                clothes?
            </p>
            <p class="text-center">
                With this increase of college-themed logomania in urban fashion,
                questions of conformity and unification arose, and
                <DripversityIcon class="text-dripversity" />
                investigates this crossover by colliding college-themed and
                urban fashion garments to a level where a golden pinned
                balaclava is worn with a logomania college varsity jacket.
            </p>
            <p class="text-center">
                Moreover,
                <DripversityIcon class="text-dripversity" />
                showcases those five character avatars as the heroes of their
                own told story that is captured by a portrait photo look. With
                that approach,
                <DripversityIcon class="text-dripversity" />
                portrays a story of a subcultural world of conformity,
                unification, and the romanticization of educational institutions
                in fashion, media, and youth culture.
            </p>
        </div>
        <div class="flex items-center justify-center">
            <AppButton color="secondary" to="/#roadmap">Explore</AppButton>
        </div>
    </TextCenteredSection>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import AppButton from "@/components/app/AppButton.vue";
import TextCenteredSection from "@/components/section/TextCenteredSection.vue";
</script>
