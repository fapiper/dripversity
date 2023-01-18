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
                    tag="02/2023"
                >
                    <div>
                        <p class="text-left text-sm">
                            Register for allowlist to be eligible for the
                            <DripversityIcon class="text-dripversity" /> presale
                        </p>
                    </div>
                </ProgressItem>
                <ProgressItem title="Presale on Foundation" tag="04/2023"
                    ><p class="text-left text-sm">
                        For registered allowlist supporters only
                    </p></ProgressItem
                >
                <ProgressItem title="Public sale" tag="In 05/2023">
                    <p class="text-left text-sm">Exclusively on Foundation</p>
                </ProgressItem>
                <ProgressItem
                    title="Reveal of the collection"
                    tag="When sold out"
                ></ProgressItem>
                <ProgressItem title="Claim Airdrop" tag="When sold out">
                    <p class="text-left text-sm">
                        Claim
                        <DripversityIcon class="text-dripversity" />
                        CAMPUS airdrop by connecting the wallet that holds
                        <DripversityIcon class="text-dripversity" />
                        NFT(s) on www.dripversity.com
                    </p>
                </ProgressItem>
                <ProgressItem title="Dripversity Experience" tag="Q4 2023">
                    <p class="text-left text-sm">
                        Connect your wallet with
                        <DripversityIcon class="text-dripversity" />
                        / Campus NFT to enter a browser-based experience and
                        walk through the
                        <DripversityIcon class="text-dripversity" /> Campus to
                        explore and interact with the NFT screens
                    </p>
                </ProgressItem>
                <ProgressItem
                    :isLast="true"
                    title="Dripversity Relaunch"
                    tag="Q1 2024"
                >
                    <p class="text-left text-sm">
                        Second Drop of animated
                        <DripversityIcon class="text-dripversity" /> NFTs with
                        known characters and new individual trait combinations
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
