<template>
    <section :id="id" class="relative !py-0">
        <div class="container-default px-0 lg:px-12">
            <img :src="src" :alt="alt || id" class="w-full lg:rounded" />
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id", "src", "alt"]);
</script>
