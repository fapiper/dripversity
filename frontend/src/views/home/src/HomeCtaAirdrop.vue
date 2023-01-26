<template>
    <ImageCenteredSection
        :id="'cta-airdrop'"
        :src="require('@/assets/images/campus-unrevealed.gif')"
        :alt="'Claim Campus Airdrop'"
        :gradient="false"
    >
        <div>
            <h2 class="title !mb-0">
                Claim your
                <DripversityIcon class="text-dripversity w-52" /> CAMPUS airdrop
            </h2>
        </div>
        <div>
            <p class="text-neutral-50 text-base text-center">
                Each <DripversityIcon class="text-dripversity" /> NFT has a twin
                NFT version, the
                <DripversityIcon class="text-dripversity" /> CAMPUS NFT, that
                showcases every 250 renders on a screen inside of the CAMPUS
                environment with four unknown locations. To be eligible for the
                <DripversityIcon class="text-dripversity" /> CAMPUS airdrop you
                have to buy a <DripversityIcon class="text-dripversity" /> NFT
                of the collection drop on Foundation. After the drop reveal you
                can connect your wallet that holds
                <DripversityIcon class="text-dripversity" /> NFT(s) to claim
                your CAMPUS airdrop
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
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
</script>
