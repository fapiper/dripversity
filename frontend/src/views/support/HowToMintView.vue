<template>
    <section>
        <div class="space-y-12">
            <h1 class="title">How to Mint</h1>
            <p class="text-lg">
                Minting refers to the process of creating an NFT and initially
                writing it to the blockchain. It establishes an immutable record
                of authenticity and ownership and represents the first ever
                interaction with a Dripversity NFT. Before minting, the item
                metadata is hidden. Upon creation on the blockchain, it is
                revealed and all of its unique traits and it's rarity are
                visible to the public. Minting your Dripversity NFT is really
                simple, you’ll just need to do the following:
            </p>
            <div class="space-y-6">
                <div>
                    <h2>1. Crypto Wallet</h2>

                    <p class="normal">
                        Ensure that you have access to a
                        <router-link
                            class="link"
                            :to="routes.support['How to create a wallet']"
                            >crypto wallet</router-link
                        >. It will hold your NFT's and cryptocurrency.
                        Dripversity NFT's are living on the Ethereum Blockchain,
                        so you will need an Ethereum compatible crypto wallet
                        like Metamask, Coinbase Wallet or Rainbow Wallet.
                    </p>
                </div>

                <div>
                    <h2>2. Acquire ETH</h2>
                    <p>
                        Ensure that you have adequate amounts of funds in your
                        crypto wallet. Dripversity's supported currency is ETH.
                        If you haven't got enough ETH in your wallet, you can
                        easily acquire some at a crypto exchange (the most
                        common ones are
                        <a
                            href="https://www.coinbase.com/"
                            target="_blank"
                            class="link"
                            rel="noopener noreferrer"
                            >Coinbase</a
                        >,
                        <a
                            href="https://www.binance.com/"
                            target="_blank"
                            class="link"
                            rel="noopener noreferrer"
                            >Binance</a
                        >
                        or
                        <a
                            href="https://www.kraken.com/"
                            target="_blank"
                            class="link"
                            rel="noopener noreferrer"
                            >Kraken</a
                        >
                        - just to name a few). Keep in mind that you also need
                        to account for transaction fees.
                    </p>
                </div>
                <div>
                    <h2>3. The Minting page</h2>
                    <p>
                        Head over to the minting page at
                        <router-link class="link" :to="routes.mint"
                            >www.dripversity.com/mint</router-link
                        >. It will guide you through all the necessary steps for
                        minting your Dripversity NFT.
                    </p>

                    <img
                        src="@/assets/images/support/mintpage.png"
                        alt="The Minting page"
                        class="rounded w-full max-w-lg"
                    />
                </div>
                <div>
                    <h2>4. Connect your crypto wallet</h2>

                    <p>
                        Click on the button 'Connect Wallet' to connect your
                        Ethereum wallet to the Dripversity website. Select your
                        wallet provider and follow the necessary steps to
                        complete the process.
                    </p>

                    <img
                        src="@/assets/images/support/connectwallet.png"
                        alt="Connect Wallet"
                        class="rounded w-full max-w-xs"
                    />
                </div>
                <div>
                    <h2>5. Choose quantity</h2>
                    <p>
                        Choose the quantity of Dripversity NFTs that you want to
                        buy. Price and quantity vary depending on our current
                        sale phase: In whitelist sale, the maximum quantity is 3
                        items per user. In public sale the maximum quantity is 5
                        items per user. Click on 'Complete purchase' to move on.
                    </p>

                    <img
                        src="@/assets/images/support/mintdetails.png"
                        alt="Connect Wallet"
                        class="rounded w-full max-w-xs"
                    />
                </div>
                <div>
                    <h2>5. Confirm purchase in your crypto wallet</h2>
                    <p>
                        Continue with the transactions, guided by your wallet
                        prompt to confirm your purchase.
                    </p>

                    <img
                        src="@/assets/images/support/mintconfirm.png"
                        alt="Confirm your purchase of Dripversity NFT"
                        class="rounded w-full max-w-xs"
                    />
                </div>
                <div>
                    <h2>6. Wait for processing</h2>
                    <p>
                        Wait for your request to be processed by the Blockchain.
                    </p>

                    <img
                        src="@/assets/images/support/mintwait.png"
                        alt="Confirm your purchase of Dripversity NFT"
                        class="rounded w-full max-w-xs"
                    />
                </div>
                <div>
                    <h2>6. Load your NFT data</h2>

                    <p>
                        Your request was confirmed on the blockchain and your
                        Dripversity NFT's are yours. You may already view them
                        on public marketplaces like Opensea, Rarible or
                        Foundation. Our system will now load the token data to
                        instantly reveal your NFTs to you. This process may take
                        some time.
                    </p>
                    <img
                        src="@/assets/images/support/mintload.png"
                        alt="Confirm your purchase of Dripversity NFT"
                        class="rounded w-full max-w-xs"
                    />
                </div>
                <div>
                    <h2>7. Done</h2>
                    <p>Congratulations!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { routes } from "@/constants";
</script>
<style lang="postcss" scoped>
h2 {
    @apply title-3 mb-0 !important;
}

h2 ~ p {
    @apply my-4;
}
</style>
