<template>
    <section id="faq">
        <div class="container-default grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
                <div
                    class="space-y-8 w-full max-w-md mx-auto"
                    v-animate.stagger
                >
                    <h2 class="title">Questions?<br />We got answers.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <NewsletterForm />
                </div>
            </div>

            <div class="lg:mt-52">
                <ul class="flex flex-col" v-animate.stagger>
                    <li
                        class="flex flex-col space-y-1"
                        v-for="item in 5"
                        :key="item"
                    >
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
    </section>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
import DisclosureItem from "@/components/disclosure/DisclosureItem.vue";
</script>
