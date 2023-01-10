<template>
    <ImageCenteredSection
        :id="'cta-airdrop'"
        :src="require('@/assets/images/campus-unrevealed.gif')"
        :alt="'Claim Campus Airdrop'"
        :gradient="false"
    >
        <div>
            <h2 class="title !mb-0">Claim Campus Airdrop</h2>
        </div>
        <div>
            <p class="text-neutral-50 text-lg text-center">
                In order to be eligible for the DRIPVERSITY CAMPUS airdrop you
                have to buy a DRIPVERSITY NFT of the collection drop on
                Foundation. After the drop reveal you can connect your wallet
                that holds one or more DRIPVERSITY NFTs to claim your CAMPUS
                airdrop
            </p>
        </div>
        <div>
            <AppButton to="/airdrop" color="secondary"
                ><span class="block">Claim Campus Airdrop</span>
            </AppButton>
        </div>
    </ImageCenteredSection>
</template>

<script lang="ts" setup>
import AppButton from "@/components/app/AppButton.vue";
import ImageCenteredSection from "@/components/section/ImageCenteredSection.vue";
</script>
