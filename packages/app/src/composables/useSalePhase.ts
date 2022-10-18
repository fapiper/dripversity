import { salePhase } from "@/constants/";

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
}

export function useSalePhase(): UseSalePhase {
    const currentSalePhase = salePhase;
    const isPreSale = currentSalePhase === SalePhase.PRESALE;
    const isWhitelistSale = currentSalePhase === SalePhase.WHITELISTSALE;
    const isPublicSale = currentSalePhase === SalePhase.PUBLICSALE;

    return {
        currentSalePhase,
        isPreSale,
        isWhitelistSale,
        isPublicSale,
    };
}
