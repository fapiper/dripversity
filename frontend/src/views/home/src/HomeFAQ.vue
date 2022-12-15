<template>
    <ContainerSection id="faq">
        <div class="grid col-span-1 lg:grid-cols-5 gap-16">
            <div
                class="lg:col-span-2 space-y-6 lg:text-right"
                v-animate.stagger
            >
                <div>
                    <h2 class="title">Questions? We got answers.</h2>
                </div>
                <div>
                    <p class="lg:text-end">
                        Here are the most common and important questions to get
                        you started on purchasing a Dripversity token.
                    </p>
                </div>
                <div>
                    <AppButton :to="routes.support['How to Mint']"
                        >More Answers</AppButton
                    >
                </div>
            </div>

            <div class="lg:col-span-3">
                <ul class="flex flex-col space-y-2" v-animate.stagger>
                    <li
                        class="flex flex-col"
                        v-for="(answer, question) in questions"
                        :key="question"
                    >
                        <DisclosureItem>
                            <template #question>{{ question }}</template>
                            <template #answer>
                                <p>
                                    {{ answer }}
                                </p>
                            </template>
                        </DisclosureItem>
                    </li>
                </ul>
            </div>
        </div>
    </ContainerSection>
</template>

<script lang="ts" setup>
import DisclosureItem from "@/components/disclosure/DisclosureItem.vue";
import AppButton from "@/components/app/AppButton.vue";
import { routes } from "@/constants/";
import ContainerSection from "@/components/section/ContainerSection.vue";

const questions = {
    "Will the NFTs be sold on open marketplaces?":
        "Primary sales (Minting) of Dripversity NFTs will be on dripversity.com. Dripversity tokens will appear on secondary marketplaces like OpenSea and Rarible etc. for resale purchase. Dripversity NFTs will adhere to the ERC-721 standard.",
    "Can I resell my Dripversity NFT?":
        "Yes. Dripversity tokens can be resold on NFT marketplaces such as OpenSea and Rarible etc. If a Dripversity token is resold there will be a 5% royalty fee to Dripversity.",
    "How do I purchase a Dripversity NFT?":
        "In order to purchase a Dripversity NFT, you will need to conduct two important steps. First, you will need to purchase ETH from a crypto-currency exchange such as Coinbase, Kraken, or Binance. Once you have completed that step, you will need to transfer your ETH into a non-custodial digital wallet like MetaMask, Portis or WalletConnect compatible wallets. These wallets connect to the Dripversity website and allow you to purchase an NFT. For your reference, here are blog posts outlining in detail how to set up a crypto wallet, as well as the basic steps to take to send ETH to your wallet.",
    "How many Dripversity NFTs are there?":
        "There are 1 000 Dripversity tokens for this collection.",
    "What blockchain are these NFTs minted on?":
        "NFTs are minted on ERC-721 compliant contracts deployed to the Ethereum blockchain.",
};
</script>
