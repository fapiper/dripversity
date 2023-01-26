<template>
    <ImageCenteredSection
        :id="id"
        :src="require('@/assets/images/seminar-hall.png')"
        :alt="isPreSale ? 'Mint your NFT now' : 'Mint your NFT now'"
        :gradient="true"
    >
        <div>
            <h2 class="title !mb-0">
                {{ isPreSale ? "Mint your NFT now" : "Mint your NFT now" }}
            </h2>
        </div>
        <div>
            <p class="text-neutral-50 text-lg text-center">
                {{
                    isPreSale
                        ? "Buy your unique DRIPVERSITY NFT from the collection drop on Foundation."
                        : "Buy your unique DRIPVERSITY NFT from the collection drop on Foundation."
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
