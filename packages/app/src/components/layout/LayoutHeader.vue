<template>
    <header class="sticky top-0 left-0 h-16 bg-white w-full flex z-40">
        <nav class="container-default flex flex-1 items-center justify-between">
            <router-link class="block" to="/"
                ><span class="font-bold text-lg">Dripversity</span>
            </router-link>

            <ul class="hidden md:flex items-center justify-center space-x-12">
                <li v-for="(to, title) of items" :key="title">
                    <router-link class="font-bold text-xs" :to="to">{{
                        title
                    }}</router-link>
                </li>
            </ul>

            <ul class="hidden md:flex items-center justify-center space-x-4">
                <li>
                    <a
                        href="https://www.instagram.com/dripversityenrollment"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><InstagramIcon class="h-4 w-4"
                    /></a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/dripversity"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><TwitterIcon class="h-4 w-4"
                    /></a>
                </li>
                <li>
                    <a
                        href="https://discord.com/invite/dripversity"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><DiscordIcon class="h-4 w-4"
                    /></a>
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
