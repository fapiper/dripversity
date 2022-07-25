<template>
    <header
        class="fixed top-0 left-0 h-28 pointer-events-none bg-transparent mix-blend-difference text-white w-full flex z-40"
    >
        <nav
            class="container-default flex flex-1 items-center justify-start justify-between relative"
        >
            <ul class="flex items-center justify-center space-x-4">
                <li v-for="(social, name) in socials" :key="name">
                    <AppButton
                        :href="social.href"
                        class="pointer-events-auto"
                        only-icon
                        size="xs"
                        color="outline"
                        ><component :is="social.icon" class="h-4 w-4"
                    /></AppButton>
                </li>
            </ul>

            <router-link
                class="block order-first md:order-none md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-auto"
                to="/"
                ><span class="font-logo text-3xl">D</span>
            </router-link>

            <ul class="hidden md:flex items-center justify-center space-x-4">
                <li v-for="(to, name) in routes" :key="name">
                    <router-link class="link pointer-events-auto" :to="to">{{
                        name
                    }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { routes, socials } from "@/constants/";
import AppButton from "@/components/app/AppButton.vue";
</script>
