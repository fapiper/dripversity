<template>
    <TextCenteredSection id="about">
        <div>
            <h2 class="title !mb-0">The Spark for Dripversity</h2>
        </div>

        <div class="space-y-2">
            <p>
                NFT collections displaying one human base avatar with various
                shades of skin colors and calling it diverse is something that
                <DripversityIcon class="text-dripversity" /> wants to do better.
                Therefore, the inclusion of five diverse ethnic backgrounds
                shows actual relatable individual human characters.
            </p>
            <p>
                <DripversityIcon class="text-dripversity" /> uses a concept of
                five human character avatars that cherishes each individual's
                uniqueness while still being able to assign all wearable traits.
                A concept that highlights everyone's diverse appearance while
                also showcasing what connects us.
            </p>
        </div>

        <div>
            <AppCta />
        </div>
    </TextCenteredSection>
</template>

<script lang="ts" setup>
import AppCta from "@/components/app/AppCta.vue";
import TextCenteredSection from "@/components/section/TextCenteredSection.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
</script>
