<template>
    <section id="collection">
        <div class="container-default">
            <div class="grid lg:grid-cols-4 gap-8 lg:gap-16 items-center">
                <div
                    class="space-y-4 lg:col-start-2 lg:col-span-2"
                    v-animate.stagger
                >
                    <h2 class="title">The spark for the collection</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppPinnedSection from "@/components/app/AppPinnedSection.vue";
</script>
