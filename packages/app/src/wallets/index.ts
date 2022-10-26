import { init } from "@web3-onboard/vue";
import injectedModule from "@web3-onboard/injected-wallets";
import { chain, infuraKey } from "@/constants";

export const setupWeb3Onboard = function () {
    const injected = injectedModule();

    // Only one RPC endpoint required per chain
    const rpcUrl = `https://polygon-mumbai.infura.io/v3/${infuraKey}`;

    return init({
        wallets: [injected],
        chains: [
            {
                id: `0x${chain.chainId}`,
                token: chain.nativeCurrency.symbol,
                label: chain.network,
                rpcUrl,
            },
        ],
        appMetadata: {
            // The name of your dApp
            name: "Dripversity",
            // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
            icon: require("@/assets/images/dripversity-dv.png"),
            // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
            // logo: blocknativeLogo,
            // The description of your app
            description: "High School meets Metaverse",
            // The url to a getting started guide for app
            // gettingStartedGuide: 'http://mydapp.io/getting-started',
            // url that points to more information about app
            explore: "http://dripversity.com",
            // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
        },
    });
};
