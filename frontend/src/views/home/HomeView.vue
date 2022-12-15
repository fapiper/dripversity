<template>
    <div>
        <HomeHero />
        <HomeExplore />
        <HomeRarity />
        <HomeStory />
        <HomeMaskOf />
        <HomeAbout />
        <HomeTeam />
        <HomeCta />
        <HomeQuestions />
    </div>
</template>

<script lang="ts" setup>
import HomeHero from "@/views/home/src/HomeHero.vue";
import HomeRarity from "@/views/home/src/HomeRarity.vue";
import HomeExplore from "@/views/home/src/HomeExplorer.vue";
import HomeStory from "@/views/home/src/HomeStory.vue";
import HomeMaskOf from "@/views/home/src/HomeMaskOf.vue";
import HomeAbout from "@/views/home/src/HomeAbout.vue";
import HomeTeam from "@/views/home/src/HomeTeam.vue";
import HomeCta from "@/views/home/src/HomeCta.vue";
import HomeQuestions from "@/views/home/src/HomeFAQ.vue";
</script>
