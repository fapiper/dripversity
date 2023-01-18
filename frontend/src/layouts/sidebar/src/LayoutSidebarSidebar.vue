<template>
    <div
        class="bg-black border-neutral-900 lg:border-r lg:pb-32 sticky sm:static top-32 flex-1 flex"
    >
        <div
            class="flex flex-col lg:col-span-1 lg:sticky lg:top-0 left-0 lg:h-screen flex-1 lg:overflow-auto"
        >
            <span class="hidden lg:block h-32" />
            <div class="space-y-4 lg:py-8 px-8 lg:px-12 lg:max-w-lg">
                <AppButtonBackOrHome />

                <h2 class="title lg:title-2">Need help?</h2>
                <p>
                    Explore the usage of the Dripversity app and read about the
                    necessary steps to become an owner of the Dripversity NFT.
                </p>
            </div>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 py-8 px-8 lg:px-12 mt-auto"
            >
                <div
                    v-for="(linkRoutes, linkName) in links"
                    :key="linkName"
                    class="space-y-2 p-3 rounded-xl bg-neutral-900"
                >
                    <span class="title-4">{{ linkName }}</span>
                    <ul>
                        <li
                            v-for="(to, routeName) in linkRoutes"
                            :key="linkName + '-' + routeName"
                        >
                            <router-link class="link text-sm" :to="to">{{
                                routeName
                            }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { routes } from "@/constants/";
import AppButtonBackOrHome from "@/components/app/AppButtonBackOrHome.vue";

const links = {
    "Getting Started": routes.support,
    "Legal Disclosure": routes.legals,
};
</script>
