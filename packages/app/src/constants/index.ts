import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import { SalePhase } from "@/composables/useSalePhase";
import { getChain } from "evm-chains";

export const routes = {
    Home: "/#home",
    Rarity: "/#rarity",
    Story: "/#story",
    Team: "/#team",
    FAQ: "/#faq",
};

export const socials = {
    Instagram: {
        baseUrl: "https://www.instagram.com",
        account: "dripversitynft",
        icon: InstagramIcon,
    },
    Twtter: {
        baseUrl: "https://twitter.com",
        account: "dripversity",
        icon: TwitterIcon,
    },
    Discord: {
        baseUrl: "https://discord.com/invite",
        account: "dripversity",
        icon: DiscordIcon,
    },
};

export const legals = {
    "Terms of Service": "/legal/terms-of-service",
    "Privacy Policy": "/legal/privacy-policy",
};

export const uniswapV3PolygonSubgraph = `https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon`;
export const salePhase = Number(
    process.env["VUE_APP_SALE_PHASE"] || 0
) as SalePhase; // 0 = PRESALE | 1 = WHITELISTSALE | 2 = PUBLICSALE

export const chain = getChain(Number(process.env["VUE_APP_CHAIN_ID"] || 80001));
export const infuraKey = process.env["VUE_APP_INFURA_KEY"] || "";
export const DRIPContractAddress =
    process.env["VUE_APP_DRIP_CONTRACT_ADDRESS"] || "";
