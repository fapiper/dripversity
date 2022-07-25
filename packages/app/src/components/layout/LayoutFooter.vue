<template>
    <section class="!mt-8" id="subscribe">
        <div class="container-default max-w-4xl">
            <div v-animate.stagger>
                <h2 class="title">Subscribe to<br />Dripversity</h2>

                <NewsletterForm />
            </div>
        </div>
    </section>

    <footer class="bg-black text-white">
        <div class="py-16">
            <div
                class="container-default flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12"
            >
                <div class="col-span-3">
                    <h3 class="font-logo text-5xl mb-8">D</h3>
                </div>

                <ul class="flex flex-col space-y-2">
                    <li v-for="(to, name) in routes" :key="name">
                        <router-link class="link" :to="to">{{
                            name
                        }}</router-link>
                    </li>
                </ul>

                <ul class="flex flex-col space-y-2">
                    <li v-for="(social, name) in socials" :key="name">
                        <a
                            :href="social.href"
                            target="_blank"
                            class="link"
                            rel="noopener noreferrer"
                            >{{ name }}</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div class="py-8 border-b-8 border-blue">
            <div
                class="container-default flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12"
            >
                <div class="text-xs text-neutral-400 leading-relaxed">
                    <p>
                        Copyright &copy; {{ new Date().getFullYear() }}
                        Dripversity
                    </p>
                    <p>Made by Decentum</p>
                </div>

                <ul class="flex items-center justify-end space-x-4">
                    <li v-for="(to, name) in legals" :key="name">
                        <router-link
                            class="link text-xs text-neutral-400"
                            :to="to"
                            >{{ name }}</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import NewsletterForm from "@/components/newsletter/NewsletterForm.vue";
import { routes, socials, legals } from "@/constants/";
</script>
