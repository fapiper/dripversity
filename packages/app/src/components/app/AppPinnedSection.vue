<template>
    <section :id="id" class="!z-0 !bg-transparent" v-pin>
        <div class="relative flex z-10 h-screen" :class="bg[bgFade]">
            <div class="container-default flex flex-col justify-center">
                <slot />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const bg = {
    "500": "bg-blue-400",
    "600": "bg-blue-500",
    "700": "bg-blue-600",
    "800": "bg-blue-700",
    "900": "bg-blue-800",
};

defineProps(["id", "bgFade"]);
</script>
