<template>
    <article class="relative flex group rounded w-full overflow-hidden">
        <img
            :src="token.image"
            alt="# XXX"
            class="block w-full aspect-square rounded"
        />
    </article>
</template>

<script lang="ts" setup>
defineProps(["token"]);
</script>
