<template>
    <article class="flex flex-col w-full p-2 group rounded">
        <div class="relative aspect-square rounded overflow-hidden">
            <img
                :src="token.image"
                :alt="token.name"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
            />
        </div>
        <div class="p-2">
            <h4 class="font-bold text-xs uppercase">{{ token.name }}</h4>
            <p class="text-xs text-black/50">
                {{ token.description }}
            </p>
        </div>
    </article>
</template>

<script lang="ts" setup>
defineProps(["token"]);
</script>
