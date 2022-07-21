<template>
    <section id="explore">
        <div class="container-default max-w-2xl space-y-4">
            <h1 class="font-bold text-4xl pb-8">Explore</h1>
        </div>
        <div
            class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-12"
        >
            <TokenCard
                v-for="token in tokens"
                :key="token.name"
                :token="token"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import TokenCard from "@/components/token/TokenCard.vue";

const description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";

const tokens = Array.from({ length: 10 }, (_, id) => ({
    image: require(`@/assets/images/token/${id + 1}.jpg`),
    name: `Item #${id + 1}`,
    description,
}));
</script>
