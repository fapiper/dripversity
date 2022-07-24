<template>
    <header>
        <div
            class="w-full flex items-center justify-center min-h-screen relative"
        >
            <div
                class="container-default flex flex-col items-center justify-center"
            >
                <div
                    class="absolute bottom-0 left-0 w-full p-4 flex items-center justify-center"
                ></div>

                <div
                    class="flex flex-col space-y-4 items-center transform translate-y-1/3"
                >
                    <div>
                        <h1
                            class="font-serif font-bold text-7xl md:text-9xl text-center"
                        >
                            D
                        </h1>
                    </div>
                    <div>
                        <p class="text-xl tracking-widest">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <div
                        class="pt-12 flex flex-col items-center justify-center space-y-4"
                    >
                        <AppButton to="/#about">About the collection</AppButton>
                        <router-link to="/#explore" class="underline"
                            >Explore
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import AppButton from "@/components/app/AppButton.vue";
import { ref } from "vue";
</script>
