<template>
    <section :id="id">
        <div class="container-default">
            <slot />
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id"]);
</script>
