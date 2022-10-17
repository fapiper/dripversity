<template>
    <section :id="id" class="bg-blue">
        <div class="container-default">
            <slot />
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id"]);
</script>
