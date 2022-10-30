<template>
    <div
        class="hidden lg:flex lg:col-span-1 sticky top-0 left-0 h-screen lg:flex-col flex-1 overflow-auto bg-black border-r border-neutral-900"
    >
        <span class="block h-32" />
        <div class="space-y-4 py-8 px-8 lg:px-12 max-w-lg">
            <h2 class="title-2">Legal Disclosure</h2>
            <p>
                Molestie ullamcorper egestas at amet, id proin gravida tortor.
                Semper pellentesque sed nisl enim volutpat sem est vel. Id nunc
                cras at neque.
            </p>
        </div>
        <div class="space-y-4 py-8 px-8 lg:px-12 mt-auto">
            <span class="title-4">Legal Disclosure</span>
            <ul>
                <li v-for="(to, name) in legals" :key="name">
                    <router-link class="link" :to="to">{{ name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { legals } from "@/constants/";
</script>
