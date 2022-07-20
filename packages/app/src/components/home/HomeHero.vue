<template>
    <header>
        <div class="min-h-screen w-full flex justify-center">
            <div
                class="container-default flex flex-col items-center justify-center"
            >
                <div class="flex flex-col space-y-4 items-center lg:space-y-8">
                    <div><DripversityIcon class="w-54" /></div>
                    <div>
                        <h1 class="font-extrabold text-5xl">Dripversity</h1>
                    </div>
                    <ul
                        class="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4"
                    >
                        <li>
                            <AppButton>Subscribe</AppButton>
                        </li>
                        <li>
                            <AppButton to="/#about">Learn more</AppButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import AppButton from "@/components/app/AppButton.vue";
</script>
