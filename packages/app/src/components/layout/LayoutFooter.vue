<template>
    <footer class="bg-black text-white">
        <div class="py-16 md:py-32 bg-neutral-900/90">
            <div class="container-default max-w-4xl mx-auto">
                <div class="space-y-8">
                    <h2 class="font-bold text-4xl uppercase mb-8 italic">
                        Subscribe to the<br />Dripversity <br />newsletter
                    </h2>

                    <NewsletterForm />
                </div>
            </div>
        </div>
        <div class="py-16 bg-neutral-900/70">
            <div
                class="container-default flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12"
            >
                <div class="flex flex-col justify-between col-span-3">
                    <h3 class="font-serif font-bold text-5xl">D</h3>
                </div>

                <div class="flex flex-col space-y-2">
                    <router-link to="/" class="underline">Home</router-link>
                    <router-link to="/#about" class="underline"
                        >About</router-link
                    >
                    <router-link to="/#explore" class="underline"
                        >Explore</router-link
                    >
                </div>

                <ul class="flex flex-col space-y-2">
                    <li>
                        <a
                            href="https://www.instagram.com/dripversityenrollment"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline"
                            >Instagram</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/dripversity"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline"
                            >Twitter</a
                        >
                    </li>
                    <li>
                        <a
                            class="underline"
                            href="https://discord.com/invite/dripversity"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Discord</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-neutral-900/0 py-8 border-b-4 border-blue">
            <div
                class="container-default flex items-center justify-between space-x-4 md:space-x-8 lg:space-x-12"
            >
                <div class="text-xs text-neutral-400">
                    <p>
                        Copyright &copy; {{ new Date().getFullYear() }}
                        Dripversity
                    </p>
                    <p>Made by Decentum</p>
                </div>

                <ul
                    class="flex items-center justify-end space-x-1 md:space-x-4"
                >
                    <li>
                        <router-link
                            class="text-xs text-neutral-400"
                            to="/privacy-policy"
                            >Privacy Policy</router-link
                        >
                    </li>
                    <li class="text-neutral-600">|</li>
                    <li>
                        <router-link
                            class="text-xs text-neutral-400"
                            to="/terms-of-service"
                            >Terms of Service</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup></script>
<script>
import NewsletterForm from "@/components/Newsletter/NewsletterForm";
export default {
    components: { NewsletterForm },
};
</script>
