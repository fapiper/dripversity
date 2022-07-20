<template>
    <footer class="bg-black text-white py-4">
        <div class="container mx-auto px-4 md:px-8 lg:px-12">
            <ul class="flex items-center justify-end space-x-4">
                <li>
                    <router-link
                        class="text-xs text-neutral-400"
                        to="/privacy-policy"
                        >Privacy Policy</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="text-xs text-neutral-400"
                        to="/terms-of-service"
                        >Terms of Service</router-link
                    >
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup></script>
