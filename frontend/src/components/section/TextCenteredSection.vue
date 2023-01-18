<template>
    <section :id="id">
        <div class="container-default !px-3 !lg:px-0">
            <div
                class="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden text-center"
            >
                <template v-if="!!src">
                    <img
                        class="absolute top-0 left-0 object-cover w-full h-full"
                        :src="src"
                        :alt="alt || id"
                        v-parallax="{
                            from: { yPercent: 25, scale: 1.5 },
                            to: { yPercent: -25, scale: 1.5 },
                        }"
                    />

                    <div
                        class="relative bg-black/80 px-3 py-16 lg:px-12 flex flex-col space-y-6"
                        v-animate.stagger
                    >
                        <slot />
                    </div>
                </template>
                <template v-else>
                    <div
                        class="relative px-3 lg:px-12 py-0 flex flex-col space-y-6"
                        v-animate.stagger
                    >
                        <slot />
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps(["id", "src", "alt"]);
</script>
