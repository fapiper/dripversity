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
    });
};
