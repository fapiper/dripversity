<template>
    <TextCenteredSection id="collection" class="!pt-0">
        <h2 class="title !mb-0">The spark for the collection</h2>

        <div class="space-y-2">
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </div>

        <AppCta />
    </TextCenteredSection>
</template>

<script lang="ts" setup></script>
<script>
import AppCta from "@/components/app/AppCta";
import TextCenteredSection from "@/components/section/TextCenteredSection";
export default {
    components: { TextCenteredSection, AppCta },
};
</script>
