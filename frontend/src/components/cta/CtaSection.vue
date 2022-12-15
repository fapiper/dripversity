<template>
    <ImageCenteredSection
        :id="id"
        :src="require('@/assets/images/lobby-2.png')"
        :alt="isPreSale ? 'Stay up to date' : 'Claim your NFT now'"
    >
        <div>
            <h2 class="title !mb-0">
                {{ isPreSale ? "Stay up to date" : "Claim your NFT now" }}
            </h2>
        </div>
        <div>
            <p class="text-neutral-50 text-lg text-center">
                {{
                    isPreSale
                        ? "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
                        : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt."
                }}
            </p>
        </div>
        <div><AppCta color="secondary" /></div>
    </ImageCenteredSection>
</template>

<script lang="ts" setup>
import { useSalePhase } from "@/composables/useSalePhase";
import AppCta from "@/components/app/AppCta.vue";
import ImageCenteredSection from "@/components/section/ImageCenteredSection.vue";

defineProps(["id"]);
const { isPreSale } = useSalePhase();
</script>
