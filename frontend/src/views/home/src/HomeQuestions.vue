<template>
    <ContainerSection id="faq">
        <div class="grid col-span-1 lg:grid-cols-5 gap-16">
            <div
                class="lg:col-span-2 space-y-6 lg:text-right"
                v-animate.stagger
            >
                <h2 class="title">Questions? We got answers.</h2>
                <p class="lg:text-end">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                </p>
                <AppButton :to="routes.support['How to Mint']"
                    >More Answers</AppButton
                >
            </div>

            <div class="lg:col-span-3">
                <ul class="flex flex-col space-y-2" v-animate.stagger>
                    <li class="flex flex-col" v-for="item in 5" :key="item">
                        <DisclosureItem>
                            <template #question
                                >Duis lacus ipsum pretium pellentesque venenatis
                                egestas?</template
                            >
                            <template #answer>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do ciusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </template>
                        </DisclosureItem>
                    </li>
                </ul>
            </div>
        </div>
    </ContainerSection>

    <div class="container-default max-w-4xl"></div>
</template>

<script lang="ts" setup>
import DisclosureItem from "@/components/disclosure/DisclosureItem.vue";
import AppCta from "@/components/app/AppCta.vue";
import AppButton from "@/components/app/AppButton.vue";
import { routes } from "@/constants/";
import TextCenteredSection from "@/components/section/TextCenteredSection.vue";
import ContainerSection from "@/components/section/ContainerSection.vue";
</script>
