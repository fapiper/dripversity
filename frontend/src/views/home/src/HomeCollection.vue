<template>
    <TextCenteredSection id="collection" class="!pt-0">
        <h2 class="title !mb-0">The spark for the collection</h2>

        <div class="space-y-2">
            <p>
                To speak frankly, we were fed up with NFT collections displaying
                one human avatar with various shades of skin colors and calling
                it diverse. This ordinary NFT profile picture approach bored us
                and we wanted to include different ethnic backgrounds to display
                actual individual human characters. DRIPVERSITY uses a concept
                of five human characters that cherishes each individual's
                uniqueness while still being able to assign all wearable
                clothes, headwear pieces, and jewelry traits to every character.
                Moreover, we can underline everyone's unique appearance while
                also showcasing what connects us as wearables.
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
