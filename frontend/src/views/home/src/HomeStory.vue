<template>
    <!--
    <ImageOnlySection
        id="story-img"
        :src="require('@/assets/images/hallway.png')"
        :alt="'Unrevealed Campus'"
    />
-->

    <TextCenteredSection id="story">
        <div class="space-y-2">
            <h3 class="text-xs tracking-widest uppercase">
                Story of
                <DripversityIcon class="inline-block align-middle w-16" />
            </h3>

            <h2 class="title">How we got here</h2>
        </div>

        <div>
            <p>
                Increasingly seeing people with college gear from Harvard or
                Yale makes one wonder if those people are students of those
                universities, supposedly they are not, why would they wear those
                clothes?
            </p>
            <p>
                With this increase of college-themed logomania in urban fashion,
                questions of conformity and unification arose, and DRIPVERSITY
                investigates this crossover by colliding college-themed and
                urban fashion garments to a level where a golden pinned
                balaclava is worn with a logomania college varsity jacket.
            </p>
            <p>
                Moreover, DRIPVERSITY showcases those five character avatars as
                the heroes of their own told story that is captured by a
                portrait photo look. With that approach, DRIPVERSITY portrays a
                story of a subcultural world of conformity, unification, and the
                romanticization of educational institutions in fashion, media,
                and youth culture.
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
