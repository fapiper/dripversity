<template>
    <section>
        <div class="space-y-12">
            <h1 class="title">How to Mint</h1>
            <p class="text-lg">
                Minting refers to the process of creating an NFT and initially
                writing it to the blockchain. It establishes an immutable record
                of authenticity and ownership and represents the first ever
                interaction with every one-of-a-kind Dripversity token. Before
                minting, the item metadata is hidden. Upon creation on the
                blockchain, it is revealed and all of its unique traits and it's
                rarity are visible to the public.
            </p>
            <div>
                <p>
                    After you have added funds to your wallet, you will be able
                    to begin minting NFTs from Dripversity's
                    <router-link to="/mint">Minting interface</router-link>. It
                    is really simple, you’ll just need to do the following:
                </p>

                <ol>
                    <li>
                        Ensure that you have adequate amounts of ETH in your
                        wallet prior to the launch date.
                    </li>
                    <li>
                        Choose the quantity of NFTs that you want to buy on the
                        Mint page, the project will specify the maximum quantity
                        of NFTs you can purchase.
                    </li>
                    <li>
                        Select the “Mint” button, and then continue with the
                        transactions, guided by your wallet prompt.
                    </li>
                    <li>Done!</li>
                </ol>
            </div>
            <div>
                <p>
                    Also, keep in mind that you need to account for transaction
                    fees. The fees for the Ethereum network are between US$60
                    and US$100 on average, and they can go even higher during
                    times of heavy traffic volume.
                </p>
                <p>
                    The transaction expenses that you are required to pay in
                    addition to the cost of the NFT are referred to as “Gas
                    Fees.” You may also be able to change the gas fee, and the
                    greater the gas fee that you choose to pay, the higher
                    priority you will be given in being able to acquire your
                    NFT. You would consequently need to take into account the
                    transaction costs as well as the cost of each NFT as a
                    result of this.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="postcss" scoped>
ol {
    @apply list-decimal pl-8 leading-relaxed;
}
h2 {
    @apply title-2 mb-2 !important;
}

h2 ~ p {
    @apply italic my-4;
}
</style>
