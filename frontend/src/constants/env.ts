import { SalePhase } from "@/composables/useSalePhase";
import { getChain } from "evm-chains";

const uniswapV3PolygonSubgraph = `https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon`;
const dripversitySubgraph =
    process.env["VUE_APP_DRIP_SUBGRAPH"] ||
    "https://api.thegraph.com/subgraphs/name/whitelabel-market/dripversity-test";

const salePhase = Number(process.env["VUE_APP_SALE_PHASE"] || 0) as SalePhase; // 0 = PRESALE | 1 = WHITELISTSALE | 2 = PUBLICSALE

const chain = getChain(Number(process.env["VUE_APP_CHAIN_ID"] || 80001));
const infuraKey = process.env["VUE_APP_INFURA_KEY"] || "";
const DRIPContractAddress = process.env["VUE_APP_DRIP_CONTRACT_ADDRESS"] || "";

export const env = {
    uniswapV3PolygonSubgraph,
    dripversitySubgraph,
    salePhase,
    chain,
    infuraKey,
    DRIPContractAddress,
};
