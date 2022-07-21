<template>
    <article class="flex flex-col space-y-2 w-full text-center">
        <img :src="token.image" :alt="token.name" class="rounded" />
        <div>
            <h4 class="font-bold leading-relaxed text-lg">{{ token.name }}</h4>
            <p class="text-xs">"{{ token.description }}"</p>
        </div>
    </article>
</template>

<script lang="ts" setup>
defineProps(["token"]);
</script>
