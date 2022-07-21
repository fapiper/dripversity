<template>
    <header>
        <div class="min-h-screen w-full flex justify-center">
            <div
                class="container-default flex flex-col items-center justify-center"
            >
                <div
                    class="flex flex-col space-y-12 items-center lg:space-y-12"
                >
                    <div><DripversityIcon class="h-54" /></div>
                    <div>
                        <h1 class="font-bold text-6xl">Dripversity</h1>
                    </div>
                    <ul
                        class="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-8"
                    >
                        <li>
                            <AppButton @click="showNewsletterModal = true"
                                >Subscribe</AppButton
                            >
                        </li>
                        <li>
                            <AppButton to="/#about">Learn more</AppButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <NewsletterModal v-model="showNewsletterModal" />
    </header>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import AppButton from "@/components/app/AppButton.vue";
import { ref } from "vue";
import NewsletterModal from "@/components/Newsletter/NewsletterModal.vue";

const showNewsletterModal = ref(false);
</script>
