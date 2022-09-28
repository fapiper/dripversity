<template>
    <div
        class="hidden lg:flex lg:col-span-1 sticky top-0 left-0 h-screen lg:flex-col flex-1 overflow-auto z-40 bg-black"
    >
        <div class="h-32 px-8 flex items-center">
            <router-link class="block" to="/"
                ><span class="font-logo text-2xl">DRIPVERSITY</span>
            </router-link>
        </div>
        <div class="space-y-4 p-8 max-w-lg">
            <h2 class="title">Legal Disclosure</h2>
            <p>
                Molestie ullamcorper egestas at amet, id proin gravida tortor.
                Semper pellentesque sed nisl enim volutpat sem est vel. Id nunc
                cras at neque.
            </p>
        </div>
        <div class="p-8 space-y-4 mt-auto">
            <span class="title-4">Legal Disclosure</span>
            <ul>
                <li v-for="(to, name) in legals" :key="name">
                    <router-link class="link-2" :to="to">{{
                        name
                    }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { legals } from "@/constants/";
</script>
