<template>
    <header
        class="sticky top-0 left-0 h-12 bg-white/60 backdrop-blur w-full flex z-40"
    >
        <nav class="container-default flex flex-1 items-center justify-between">
            <router-link class="block" to="/"
                ><span class="font-bold text-lg">Dripversity</span>
            </router-link>

            <ul class="flex items-center justify-center space-x-12">
                <li v-for="(to, title) of items" :key="title">
                    <router-link class="font-extrabold text-xs" :to="to">{{
                        title
                    }}</router-link>
                </li>
            </ul>

            <ul class="flex items-center justify-center space-x-4">
                <li>
                    <a href="/"><InstagramIcon class="h-4 w-4" /></a>
                </li>
                <li>
                    <router-link to="/"
                        ><TwitterIcon class="h-4 w-4"
                    /></router-link>
                </li>
                <li>
                    <router-link to="/"
                        ><DiscordIcon class="h-4 w-4"
                    /></router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

const items = {
    Home: "/",
    About: "/#about",
    Explore: "/#explore",
};
</script>
