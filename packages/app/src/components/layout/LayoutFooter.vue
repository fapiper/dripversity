<template>
    <footer class="">
        <div>
            <div class="grid lg:grid-cols-5 rounded-2xl">
                <div class="lg:col-span-3 bg-discord p-8 lg:p-16 space-y-8">
                    <h3 class="font-semibold text-5xl">
                        Join the <span class="font-logo">D</span> community
                    </h3>
                    <div class="w-full max-w-md">
                        <p>
                            Non integer vulputate ut tempus mollis in blandit.
                            Vestibulum, ultrices quis vitae sagittis et
                            pellentesque.
                        </p>
                    </div>

                    <AppButton color="secondary"
                        ><DiscordIcon class="block w-4 h-4" />
                        <span class="block">Join our Discord</span></AppButton
                    >
                </div>

                <div
                    class="lg:col-span-2 flex flex-col justify-between bg-black p-8 lg:p-16 space-y-8"
                >
                    <h4 class="font-semibold text-3xl">
                        Follow us on our social channels
                    </h4>

                    <ul class="flex flex-col space-y-2">
                        <li v-for="(social, name) in socials" :key="name">
                            <a
                                :href="social.baseUrl + '/' + social.account"
                                target="_blank"
                                class="inline-flex items-center space-x-2"
                                rel="noopener noreferrer"
                                ><component
                                    :is="social.icon"
                                    class="block w-4 h-4"
                                /><span
                                    class="block text-neutral-400 text-sm mb-1"
                                    >@{{ social.account }}</span
                                ></a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="py-4">
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
import AppButton from "@/components/app/AppButton.vue";
import DiscordIcon from "@/components/icons/DiscordIcon.vue";
</script>
