<template>
    <section id="cta" class="bg-black relative w-full overflow-hidden">
        <div
            class="relative container-default max-w-6xl space-y-8 lg:space-y-16 text-center mx-auto z-10"
        >
            <ul class="grid grid-cols-5 gap-4 md:gap-16" v-animate.stagger>
                <li class="block" v-for="item in 5" :key="item">
                    <div
                        class="flex items-center justify-center text-center aspect-square w-full border-2 border-neutral-50 border-dashed rounded transform scale-125"
                        v-if="item === 3"
                    >
                        <span class="block font-bold text-3xl">?</span>
                    </div>
                    <img
                        v-else
                        class="w-full rounded"
                        :src="require(`@/assets/images/token/${item + 1}.jpg`)"
                        :alt="'Token Cta ' + item"
                    />
                </li>
            </ul>

            <div class="w-full max-w-lg mx-auto space-y-8" v-animate.stagger>
                <h2 class="title">Stay up to date</h2>

                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt.
                </p>

                <NewsletterForm />
            </div>
        </div>

        <div
            class="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
        >
            <div v-parallax class="block font-logo text-neutral-50/25 text-9xl">
                DRIPVERSITY
            </div>
        </div>

        <div
            class="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
        >
            <span v-parallax class="block font-logo text-neutral-50/25 text-9xl"
                >DRIPVERSITY</span
            >
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/outline";
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
</script>
