<template>
    <TextCenteredSection id="roadmap">
        <div>
            <h2 class="title">Roadmap</h2>
        </div>

        <div>
            <ProgressContainer>
                <ProgressItem
                    :is-current="true"
                    title="Community Presale"
                    tag="In 02/2023"
                >
                    <div class="space-y-2">
                        <p>
                            Register for allowlist to be eligible for the
                            DRIPVERSITY presale
                        </p>
                        <AppButton size="xs">Register now</AppButton>
                    </div>
                </ProgressItem>
                <ProgressItem title="Presale on Foundation" tag="In 04/2023"
                    ><p>
                        For registered allowlist supporters only
                    </p></ProgressItem
                >
                <ProgressItem title="Public sale" tag="In 05/2023">
                    <p>Exclusively on Foundation</p>
                </ProgressItem>
                <ProgressItem
                    title="Reveal of the collection"
                    tag="When sold out"
                ></ProgressItem>
                <ProgressItem title="Claim Airdrop" tag="When sold out">
                    <p>
                        Claim DRIPVERSITY CAMPUS airdrop by connecting the
                        wallet that holds DRIPVERSITY NFT(s) on
                        www.dripversity.com
                    </p>
                </ProgressItem>
                <ProgressItem
                    title="Enter Dripversity Digital Experience"
                    tag="In Q4 2023"
                >
                    <p>
                        Connect your wallet with DRIPVERSITY / CAMPUS NFT to
                        enter a browser-based experience and walk through the
                        DRIPVERSITY CAMPUS to explore and interact with the NFT
                        screens
                    </p>
                </ProgressItem>
                <ProgressItem title="Dripversity Relaunch" tag="In Q1 2024">
                    <p>
                        Second Drop of animated DRIPVERSITY NFTs with known
                        characters and new individual trait combinations
                    </p>
                </ProgressItem>
            </ProgressContainer>
        </div>
    </TextCenteredSection>
</template>

<script lang="ts" setup>
import DripversityIcon from "@/components/icons/DripversityIcon.vue";
import AppButton from "@/components/app/AppButton.vue";
import ImageOnlySection from "@/components/section/ImageOnlySection.vue";
import TextCenteredSection from "@/components/section/TextCenteredSection.vue";
import ProgressContainer from "@/components/progress/ProgressContainer.vue";
import ProgressItem from "@/components/progress/ProgressItem.vue";
</script>
