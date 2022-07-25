<template>
    <section id="about">
        <AppTextContainer>
            <h2 class="title">About</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
            </p>

            <div class="!mt-8">
                <AppButton to="/#subscribe">Subscribe to Dripversity</AppButton>
            </div>
        </AppTextContainer>
    </section>
</template>

<script lang="ts" setup>
import AppTextContainer from "@/components/app/AppTextContainer.vue";
import AppButton from "@/components/app/AppButton.vue";
</script>
