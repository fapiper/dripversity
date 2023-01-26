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
                        <p class="text-left">
                            Register for allowlist to be eligible for the
                            <DripversityIcon class="text-dripversity" /> presale
                        </p>
                    </div>
                </ProgressItem>
                <ProgressItem title="Presale on Foundation" tag="04/2023"
                    ><p class="text-left">
                        For registered allowlist supporters only
                    </p></ProgressItem
                >
                <ProgressItem title="Public sale" tag="05/2023">
                    <p class="text-left">Exclusively on Foundation</p>
                </ProgressItem>
                <ProgressItem
                    title="Reveal of the collection"
                    tag="When sold out"
                ></ProgressItem>
                <ProgressItem title="Claim Airdrop" tag="When sold out">
                    <p class="text-left">
                        Claim
                        <DripversityIcon class="text-dripversity" />
                        CAMPUS airdrop by connecting the wallet that holds
                        <DripversityIcon class="text-dripversity" />
                        NFT(s) on www.dripversity.com
                    </p>
                </ProgressItem>
                <ProgressItem
                    title="DRIPVERISTY Worlds - a curated collection"
                    tag="Q4 2023"
                >
                    <p class="text-left">
                        As an owner of a
                        <DripversityIcon class="text-dripversity" /> NFT and its
                        according twin
                        <DripversityIcon class="text-dripversity" /> CAMPUS NFT
                        airdrop you are eligible to be featured in the
                        Blockschmidt and community curated,
                        <DripversityIcon class="text-dripversity" /> Worlds NFT
                        collection on
                        <a
                            class="link"
                            href="https://foundation.app/worlds"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Foundation
                        </a>
                    </p>
                </ProgressItem>
                <ProgressItem
                    :isLast="true"
                    title="DRIPVERISTY Experience"
                    tag="After DRIPVERISTY Worlds"
                >
                    <p class="text-left">
                        The
                        <DripversityIcon class="text-dripversity" /> Experience
                        is an interactive 3D exhibition on the
                        <DripversityIcon class="text-dripversity" /> CAMPUS and
                        will feature artists from the
                        <DripversityIcon class="text-dripversity" /> Worlds NFT
                        collection on
                        <a
                            class="link"
                            href="https://foundation.app/worlds"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Foundation
                        </a>
                        .
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
