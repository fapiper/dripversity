<template>
    <footer class="bg-neutral-900 border-t border-neutral-800">
        <div class="container-default grid lg:grid-cols-5 py-24 gap-24">
            <div class="lg:col-span-3">
                <div class="w-full max-w-md space-y-8">
                    <h3 class="font-semibold text-5xl">
                        Join the
                        <DripversityIcon
                            class="inline-block align-top w-60 text-blue stroke-creme"
                        />
                        community
                    </h3>
                    <p>
                        Non integer vulputate ut tempus mollis in blandit.
                        Vestibulum, ultrices quis vitae sagittis et
                        pellentesque.
                    </p>

                    <AppButton color="secondary"
                        ><DiscordIcon class="block w-4 h-4" />
                        <span class="block">Join our Discord</span></AppButton
                    >
                </div>
            </div>

            <div class="lg:col-span-2 flex flex-col justify-between space-y-8">
                <h4 class="font-semibold text-3xl">
                    Follow us on our social channels
                </h4>

                <ul class="flex flex-col space-y-2">
                    <li v-for="(social, name) in socials" :key="name">
                        <a
                            :href="social.baseUrl + '/' + social.account"
                            target="_blank"
                            class="inline-flex items-center space-x-2 link-2"
                            rel="noopener noreferrer"
                            ><component
                                :is="social.icon"
                                class="block w-4 h-4"
                            /><span class="block text-neutral-400 text-sm mb-1"
                                >@{{ social.account }}</span
                            ></a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div class="py-4 border-t border-neutral-800">
            <div
                class="container-default flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12"
            >
                <div class="text-xs leading-relaxed">
                    <p>
                        Copyright &copy; {{ new Date().getFullYear() }}
                        Dripversity
                    </p>
                    <!--
                    <p>
                        Made by
                        <a
                            href="https://www.decentum.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Decentum</a
                        >
                    </p>
-->
                </div>

                <ul class="flex items-center justify-end space-x-4">
                    <li v-for="(to, name) in legals" :key="name">
                        <router-link class="link text-xs" :to="to">{{
                            name
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { socials, legals } from "@/constants/";
import AppButton from "@/components/app/AppButton.vue";
import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
</script>
