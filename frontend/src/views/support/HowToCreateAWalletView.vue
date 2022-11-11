<template>
    <section>
        <div class="space-y-12">
            <h1 class="title">How to create a wallet</h1>
            <p class="text-lg">
                Your wallet is the gateway to all things Ethereum, the
                technology that makes it possible to collect, create, and curate
                NFTs and many more. Dripversity NFTs are compatible with any
                Ethereum wallet. Here are some that we recommend.
            </p>

            <div>
                <h2>Metamask</h2>
                <p>works on your computer, iOS, and Android phones.</p>
                <ol class="list-decimal pl-4">
                    <li>
                        Download and install the MetaMask browser extension
                        through their website.
                    </li>
                    <li>Select “Create a Wallet.”</li>
                    <li>
                        Create a username and password - IMPORTANT that you
                        write down the seed phrase connected to your wallet and
                        store it in a place you won't forget. If you forget your
                        password in the future, there is no option to recover
                        your password.
                    </li>
                    <li>
                        Metamask will prompt you to confirm the phrase before
                        finalizing your account set-up.
                    </li>
                    <li>
                        Success! Your Metamask wallet is now set up and ready to
                        connect.
                    </li>
                </ol>
            </div>
            <div>
                <h2>Coinbase</h2>
                <p>works on your computer, iOS, and Android phones.</p>
                <ol>
                    <li>
                        Click here to download Coinbase wallet
                        https://wallet.coinbase.com/
                    </li>
                    <li>Follow the process for “Create a new wallet”</li>
                    <li>Read and accept the Terms of Service</li>
                    <li>Choose your username</li>
                    <li>Set your privacy preferences</li>
                    <li>Set up your password</li>
                    <li>
                        IMPORTANT that you write down the seed phrase connected
                        to your wallet and store it in a place you won't forget.
                        If you forget your password in the future, there is no
                        option to recover your password.
                    </li>
                    <li>
                        Success! Your Coinbase wallet is now set up and ready to
                        connect.
                    </li>
                </ol>
            </div>

            <div>
                <h2>Rainbow Wallet</h2>
                <p>iOS only app 📱</p>
                <ol>
                    <li>
                        Download and install the MetaMask browser extension
                        through their website.
                    </li>
                    <li>Select “Create a Wallet.”</li>
                    <li>
                        Create a username and password - IMPORTANT that you
                        write down the seed phrase connected to your wallet and
                        store it in a place you won't forget. If you forget your
                        password in the future, there is no option to recover
                        your password.
                    </li>
                    <li>
                        Metamask will prompt you to confirm the phrase before
                        finalizing your account set-up.
                    </li>
                    <li>
                        Success! Your Metamask wallet is now set up and ready to
                        connect.
                    </li>
                </ol>
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
