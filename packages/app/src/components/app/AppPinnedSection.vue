<template>
    <section :id="id" class="!z-0 !p-0" v-pin>
        <div class="relative flex z-10 h-screen bg-blue">
            <div class="container-default flex flex-col justify-center">
                <slot />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id"]);
</script>
