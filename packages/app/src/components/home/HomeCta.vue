<template>
    <section id="cta" class="bg-black relative w-full overflow-hidden">
        <div
            class="relative pt-36 -mt-36 container-default overflow-visible z-10"
        >
            <div
                class="relative rounded-2xl bg-gradient-to-bl from-blue via-blue to-blue-700 border border-blue-700 p-4 lg:p-16 space-y-8"
                v-parallax="{
                    from: { yPercent: 25 },
                }"
            >
                <ul
                    class="w-full flex items-center justify-center space-x-8 -mt-36"
                    v-animate.stagger
                    v-parallax="{
                        from: { yPercent: -8 },
                        to: { yPercent: 8 },
                    }"
                >
                    <li
                        class="block flex-grow-0 flex-shrink-0 w-40"
                        v-for="item in 5"
                        :key="item"
                    >
                        <div
                            class="flex items-center justify-center text-center aspect-square w-full bg-black border-2 border-neutral-50 border-dashed rounded transform scale-100"
                            v-if="item === 3"
                        >
                            <span class="block font-bold text-3xl">?</span>
                        </div>
                        <img
                            v-else
                            class="w-full rounded scale-90"
                            :src="
                                require(`@/assets/images/token/${item + 1}.jpg`)
                            "
                            :alt="'Token Cta ' + item"
                        />
                    </li>
                </ul>

                <div
                    class="w-full max-w-lg mx-auto space-y-8 text-center"
                    v-animate.stagger
                >
                    <h2 class="title">Stay up to date</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt.
                    </p>

                    <NewsletterForm />
                </div>
            </div>
        </div>
        <span
            class="absolute block bg-neutral-900 -bottom-px left-0 w-full h-2/5"
        />
    </section>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/outline";
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
</script>
