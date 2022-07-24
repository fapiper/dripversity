<template>
    <header
        class="fixed top-0 left-0 h-20 bg-transparent mix-blend-difference text-white w-full flex z-40"
    >
        <nav
            class="container-default flex flex-1 items-center justify-start justify-between relative"
        >
            <ul class="flex items-center justify-center space-x-4">
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

            <router-link
                class="block order-first md:order-none md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
                to="/"
                ><span class="font-serif text-2xl font-bold">D</span>
            </router-link>

            <ul class="hidden md:flex items-center justify-center space-x-4">
                <li v-for="(to, name) in items" :key="name">
                    <router-link class="underline" :to="to">{{
                        name
                    }}</router-link>
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
