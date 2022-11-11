import { init } from "@web3-onboard/vue";
import injected from "./injected";
import coinbaseWalletSdk from "./coinbase-wallet";
import walletConnect from "./wallet-connect";

import { env } from "@/constants";
import { hexlify, hexStripZeros } from "ethers/lib/utils";

const wallets = [injected, coinbaseWalletSdk, walletConnect];

export const setupWeb3Onboard = function () {
    // Only one RPC endpoint required per chain
    const rpcUrl = `https://polygon-mumbai.infura.io/v3/${env.infuraKey}`;

    return init({
        wallets,
        chains: [
            {
                id: hexStripZeros(hexlify(env.chain.chainId)),
                token: env.chain.nativeCurrency.symbol,
                label: env.chain.network,
                rpcUrl,
            },
        ],
        accountCenter: {
            desktop: { enabled: false },
            mobile: { enabled: false },
        },
        appMetadata: {
            name: "Dripversity",
            icon: require("@/assets/images/dripversity-dv.png"),
            description: "High School meets Metaverse",
            gettingStartedGuide: "http://dripversity.com",
            explore: "http://dripversity.com",
        },
    });
};
