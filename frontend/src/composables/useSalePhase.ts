import { env } from "@/constants/";

export enum SalePhase {
    "PRESALE",
    "WHITELISTSALE",
    "PUBLICSALE",
}

export interface UseSalePhase {
    currentSalePhase: SalePhase;
    isPreSale: boolean;
    isWhitelistSale: boolean;
    isPublicSale: boolean;
    stringify: (salePhase: SalePhase) => string;
}

export function useSalePhase(): UseSalePhase {
    const currentSalePhase = env.salePhase;
    const isPreSale = currentSalePhase === SalePhase.PRESALE;
    const isWhitelistSale = currentSalePhase === SalePhase.WHITELISTSALE;
    const isPublicSale = currentSalePhase === SalePhase.PUBLICSALE;

    const stringify = function (salePhase: SalePhase) {
        return {
            0: "Pre Sale",
            1: "Whitelist Sale",
            2: "Public Sale",
        }[salePhase];
    };

    return {
        currentSalePhase,
        isPreSale,
        isWhitelistSale,
        isPublicSale,
        stringify,
    };
}
