<template>
    <section :id="id" class="relative !py-0">
        <div class="container-default px-0 lg:px-12">
            <div
                class="relative w-full aspect-video lg:rounded overflow-hidden"
            >
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full flex"
                >
                    <img
                        :src="src"
                        :alt="alt || id"
                        class="w-full object-cover"
                        v-parallax="{
                            from: { yPercent: 25, scale: 1.5 },
                            to: { yPercent: -25, scale: 1.5 },
                        }"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id", "src", "alt"]);
</script>
