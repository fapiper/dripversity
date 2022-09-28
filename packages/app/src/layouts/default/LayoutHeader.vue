<template>
    <header
        class="fixed top-0 left-0 h-32 pointer-events-none bg-gradient-to-b from-black/50 via-transparent text-white w-full flex z-40"
    >
        <nav
            class="container-default flex flex-1 items-center justify-start justify-end space-x-8 relative"
        >
            <router-link class="block pointer-events-auto !mr-auto" to="/"
                ><span class="font-logo text-2xl">DRIPVERSITY</span>
            </router-link>

            <ul class="hidden md:flex items-center justify-center space-x-8">
                <li v-for="(to, name) in routes" :key="name">
                    <router-link class="pointer-events-auto link-1" :to="to">{{
                        name
                    }}</router-link>
                </li>
            </ul>

            <ul class="flex items-center justify-center space-x-2">
                <!--
                <li
                    v-for="(social, name) in socials"
                    :key="name"
                    class="inline-flex items-center justify-center"
                >
                    <a
                        :href="social.href"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="cursor-pointer inline-flex items-center justify-center h-6 w-6 pointer-events-auto"
                        ><component :is="social.icon" class="h-4 w-4"
                    /></a>
                </li>
-->
                <li class="inline-flex items-center justify-center">
                    <AppButton
                        size="sm"
                        to="/#home"
                        color="secondary"
                        class="pointer-events-auto"
                        >Join Waitlist</AppButton
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { routes, socials } from "@/constants/";
import AppButton from "@/components/app/AppButton.vue";
</script>
