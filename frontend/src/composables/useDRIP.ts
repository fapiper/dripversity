import { computed, inject, ref, shallowRef, watch } from "vue";
import { storeToRefs } from "pinia";
import { useUserStoreWithOut } from "@/store/modules/user";
import { ethers } from "ethers";
import type { Dripversity } from "@dripversity/contracts/typechain";
import dripversityJson from "@dripversity/contracts/artifacts/contracts/Dripversity.sol/Dripversity.json";
import { DRIPContractAddress } from "@/constants";
import { useSalePhase } from "@/composables/useSalePhase";

interface txOptions {
    txWait: boolean;
}

interface MintParams {
    quantity: number;
    price: string;
    signature?: string;
}

type MintOptions = txOptions;

export const DRIP_CONTEXT = Symbol();

export function createDRIP(): any {
    const { provider, signer, account } = storeToRefs(useUserStoreWithOut());
    const { isWhitelistSale } = useSalePhase();

    const id = ref("");
    const maxSupply = ref(0);
    const totalSupply = ref(0);
    const maxReserved = ref(0);
    const supportsMetadata = ref(false);
    const name = ref("");
    const paused = ref(false);
    const symbol = ref("");
    const price = ref(0.0005);

    const contract = shallowRef<Dripversity>();

    const isPaused = computed<boolean>(() => !!paused.value);
    const isSoldOut = computed<boolean>(
        () => maxSupply.value === totalSupply.value
    );

    /*
    watch(contractRes, () => {
        if (contractRes.value.data?.contract) {
            const { contract: res } = contractRes.value.data;
            id.value = res.id;
            maxSupply.value = res.maxSupply;
            totalSupply.value = res.totalSupply;
            maxReserved.value = res.maxReserved;
            supportsMetadata.value = res.supportsMetadata;
            name.value = res.name;
            paused.value = res.paused;
            symbol.value = res.symbol;
        }
    });
*/

    watch(provider, () => {
        contract.value = new ethers.Contract(
            DRIPContractAddress,
            dripversityJson.abi,
            provider.value
        ) as Dripversity;
    });

    /**
     * Mint new tokens. Chooses respective mint function call depending on current sale phase
     * @param params params
     * @param options options
     */
    const genericMint = async function (
        params: MintParams,
        options?: MintOptions
    ) {
        try {
            const tx = isWhitelistSale
                ? await whitelistMint(params)
                : await publicMint(params);

            if (options?.txWait) {
                await tx?.wait();
            }

            return tx;
        } catch (e: any) {
            console.error("genericMint error", e);

            const error: any = {};
            Object.keys(e).forEach((key) => {
                error[key] = e[key];
            });
            throw error;
        }
    };

    // Internal components function for Whitelist Sale
    const whitelistMint = async function ({
        quantity,
        price,
        signature,
    }: MintParams) {
        if (!account.value || !signer.value || !signature) {
            throw new Error("No account, signer or signature available");
        }

        const signedContract = contract.value?.connect(signer.value);

        return signedContract?.whitelistMint(
            account.value.address,
            quantity,
            signature,
            {
                value: ethers.utils.parseEther(String(price)).mul(quantity),
            }
        );
    };

    // Internal components function for Public Sale
    const publicMint = async function ({ quantity, price }: MintParams) {
        console.log("account.value", account.value, "signer.value");

        if (!account.value || !signer.value) {
            throw new Error("No account, signer or signature available");
        }

        const signedContract = contract.value?.connect(signer.value);

        return signedContract?.publicSaleMint(account.value.address, quantity, {
            value: ethers.utils.parseEther(String(price)).mul(quantity),
        });
    };

    return {
        id,
        maxSupply,
        price,
        totalSupply,
        maxReserved,
        supportsMetadata,
        name,
        paused,
        isPaused,
        isSoldOut,
        symbol,
        genericMint,
        whitelistMint,
        publicMint,
    };
}

export function useDRIP(): any {
    const context = inject(DRIP_CONTEXT) as any;

    if (!context) {
        throw new Error("useDRIP must be used with createDRIP");
    }

    return context;
}
