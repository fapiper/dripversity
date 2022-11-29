<template>
    <footer class="relative">
        <div class="border-t border-neutral-800">
            <div
                class="container-default !px-0 grid grid-cols-2 lg:grid-cols-6 lg:divide-x divide-neutral-800"
            >
                <FooterGridItem
                    title="Home"
                    :routes="routes.home"
                    class="border-r border-b border-neutral-800 lg:border-b-0 lg:border-r-0"
                />

                <FooterGridItem
                    title="Help"
                    :routes="routes.support"
                    class="border-b border-neutral-800 lg:border-b-0"
                />

                <FooterGridItem
                    title="Join the Community"
                    size="lg"
                    class="border-b border-neutral-800 lg:border-b-0"
                >
                    <p>
                        Non integer vulputate ut tempus mollis in blandit.
                        Vestibulum, ultrices quis vitae sagittis et
                        pellentesque.
                    </p>

                    <AppButton
                        color="outline"
                        size="sm"
                        :href="
                            routes.socials.Discord.baseUrl +
                            '/' +
                            routes.socials.Discord.account
                        "
                        ><DiscordIcon class="block w-4 h-4" />
                        <span class="block">Join our Discord</span></AppButton
                    >
                </FooterGridItem>

                <FooterGridItem
                    title="Follow us on our social channels"
                    size="lg"
                >
                    <ul class="flex flex-col space-y-2">
                        <li
                            v-for="(social, name) in routes.socials"
                            :key="name"
                        >
                            <a
                                :href="social.baseUrl + '/' + social.account"
                                target="_blank"
                                class="inline-flex items-center space-x-2 link-2"
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
                </FooterGridItem>
            </div>

            <div
                class="py-4 border-t border-b-[1rem] border-b-blue border-t-neutral-900"
            >
                <div
                    class="container-default flex flex-col md:flex-row items-start md:items-center justify-between md:space-x-8 lg:space-x-12"
                >
                    <div class="text-xs leading-relaxed">
                        <p>
                            Copyright &copy; {{ new Date().getFullYear() }}
                            Dripversity
                        </p>
                    </div>

                    <ul class="flex items-center justify-end space-x-4">
                        <li v-for="(to, name) in routes.legals" :key="name">
                            <router-link class="link text-xs" :to="to">{{
                                name
                            }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { routes } from "@/constants/";
import AppButton from "@/components/app/AppButton.vue";
import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import FooterGridItem from "@/layouts/default/Footer/FooterGridItem.vue";
</script>
