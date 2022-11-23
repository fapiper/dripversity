<template>
    <header
        class="fixed top-0 left-0 h-32 pointer-events-none text-white w-full flex z-40"
    >
        <nav
            class="px-8 lg:px-12 w-full flex flex-1 items-center justify-start justify-end space-x-4 md:space-x-8 relative"
        >
            <router-link class="block pointer-events-auto !mr-auto" to="/">
                <DripversityDvIcon class="block w-10 lg:w-12" />
            </router-link>

            <ul class="flex items-center justify-start space-x-4">
                <li
                    v-for="(social, name) in routes.socials"
                    :key="name"
                    class="inline-flex items-center justify-center"
                >
                    <AppButton
                        class="pointer-events-auto !background-blur-sm"
                        color="blur"
                        size="xs"
                        only-icon
                        rounded="base"
                        :href="social.baseUrl + '/' + social.account"
                    >
                        <component :is="social.icon" class="h-3.5 w-3.5" />
                    </AppButton>
                </li>
            </ul>

            <LayoutHeaderAvatar />
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { routes } from "@/constants/";
import LayoutHeaderAvatar from "./LayoutHeaderAvatar.vue";
import AppButton from "@/components/app/AppButton.vue";
import DripversityDvIcon from "@/components/icons/DripversityDvIcon.vue";
</script>
