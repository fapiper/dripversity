<template>
    <section id="rarity">
        <div
            class="container-default grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
            <div class="space-y-8" v-animate.stagger>
                <h2 class="title">Unique<br />characteristics</h2>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <div class="w-full max-w-md">
                    <NewsletterForm />
                </div>
            </div>
            <div class="">
                <ul class="flex flex-col space-y-8" v-animate.stagger>
                    <li
                        class="block w-full space-y-1"
                        v-for="(traits, attributeName) in attributes"
                        :key="attributeName"
                    >
                        <h5 class="block text-neutral-50">
                            {{ attributeName }}
                        </h5>
                        <div
                            class="relative w-full h-6 flex rounded overflow-hidden"
                        >
                            <div
                                v-for="(classes, trait) in traits"
                                :key="attributeName + '/' + trait"
                                :class="classes"
                                class="flex items-center justify-center whitespace-nowrap"
                            >
                                <span
                                    class="text-xs text-neutral-50/50 block text-clip overflow-hidden"
                                    >{{ trait }}</span
                                >
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";

const attributes = {
    Headwear: {
        "Headwear 1": ["w-[30%]", "bg-green-900"],
        "Headwear 2": ["w-[30%]", "bg-green-800"],
        "Headwear 3": ["w-[25%]", "bg-green-700"],
        "Headwear 4": ["w-[10%]", "bg-green-600"],
        "Headwear 5": ["w-[5%]", "bg-green-500"],
    },
    Character: {
        "Character 1": ["w-[50%]", "bg-teal-700"],
        "Character 2": ["w-[40%]", "bg-teal-600"],
        "Character 3": ["w-[10%]", "bg-teal-500"],
    },
    Clothing: {
        "Clothing 1": ["w-[45%]", "bg-blue-700"],
        "Clothing 2": ["w-[35%]", "bg-blue-600"],
        "Clothing 3": ["w-[15%]", "bg-blue-500"],
        "Clothing 4": ["w-[5%]", "bg-blue-400"],
    },
    Jewelry: {
        "Jewelry 1": ["w-[50%]", "bg-purple-900"],
        "Jewelry 2": ["w-[20%]", "bg-purple-800"],
        "Jewelry 3": ["w-[15%]", "bg-purple-700"],
        "Jewelry 4": ["w-[10%]", "bg-purple-600"],
        "Jewelry 5": ["w-[5%]", "bg-purple-500"],
    },
    Lorem: {
        "Lorem 1": ["w-[35%]", "bg-orange-800"],
        "Lorem 2": ["w-[30%]", "bg-orange-700"],
        "Lorem 3": ["w-[20%]", "bg-orange-600"],
        "Lorem 4": ["w-[15%]", "bg-orange-500"],
    },
};
</script>
