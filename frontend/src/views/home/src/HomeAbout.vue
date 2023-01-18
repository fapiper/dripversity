<template>
    <section id="about">
        <div class="container-default max-w-4xl">
            <div class="relative lg:pl-40">
                <div
                    v-parallax="{
                        from: { yPercent: 25 },
                        to: { yPercent: -25 },
                    }"
                    class="absolute bottom-1/2 left-0"
                >
                    <DripversityDvIcon class="w-60 opacity-25" />
                </div>
                <div class="relative space-y-6">
                    <div>
                        <h2 class="title">The Spark for Dripversity</h2>
                    </div>

                    <div class="space-y-2">
                        <p>
                            NFT collections displaying one human base avatar
                            with various shades of skin colors and calling it
                            diverse is something that
                            <DripversityIcon class="text-dripversity" /> wants
                            to do better. Therefore, the inclusion of five
                            diverse ethnic backgrounds shows actual relatable
                            individual human characters.
                        </p>
                        <p>
                            <DripversityIcon class="text-dripversity" /> uses a
                            concept of five human character avatars that
                            cherishes each individual's uniqueness while still
                            being able to assign all wearable traits. A concept
                            that highlights everyone's diverse appearance while
                            also showcasing what connects us.
                        </p>
                    </div>

                    <div>
                        <AppCta />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppCta from "@/components/app/AppCta.vue";
import TextCenteredSection from "@/components/section/TextCenteredSection.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import DripversityDvIcon from "@/components/icons/DripversityDvIcon.vue";
</script>
