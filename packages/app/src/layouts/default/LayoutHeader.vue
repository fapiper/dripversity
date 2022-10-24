<template>
    <header
        class="fixed top-0 left-0 h-32 pointer-events-none bg-gradient-to-b from-black/50 via-transparent text-white w-full flex z-40"
    >
        <nav
            class="px-8 lg:px-12 w-full flex flex-1 items-center justify-start justify-end space-x-4 relative"
        >
            <router-link class="block pointer-events-auto !mr-auto" to="/"
                ><img
                    src="@/assets/images/dripversity-dv.png"
                    alt="Dripversity DV Logo"
                    class="block w-12"
                />
            </router-link>

            <LayoutHeaderNavigation />
        </nav>
    </header>
</template>

<script lang="ts" setup>
import LayoutHeaderNavigation from "@/layouts/default/LayoutHeaderNavigation.vue";
</script>
