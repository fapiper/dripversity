<template>
    <header id="home">
        <div
            class="w-full flex items-center justify-center relative h-screen overflow-hidden"
        >
            <div
                class="relative container-default flex flex-col items-center justify-center z-20 space-y-8"
            >
                <img
                    class="w-full max-w-sm"
                    src="@/assets/images/logo.png"
                    alt="Dripversity"
                />
                <div class="w-full max-w-md">
                    <NewsletterForm />
                    <div class="text-neutral-400 text-center p-4">
                        <p>
                            We will send you updates on the development on
                            dripversity to your email once a month.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <span
            class="block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10"
        />
        <div class="absolute top-0 left-0 w-full h-full flex z-0">
            <img
                class="flex-1 object-cover"
                v-parallax="{
                    from: { yPercent: 0 },
                    to: {
                        yPercent: 20,
                        scrollTrigger: { start: 'top top', scrub: true },
                    },
                }"
                src="@/assets/images/hero.jpeg"
                alt="Dripversity Environment"
            />
        </div>
    </header>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
</script>
