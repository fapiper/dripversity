import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClients } from "@vue/apollo-composable";
import { uniswapV3PolygonSubgraph, dripversitySubgraph } from "@/constants";

export const clientIdUniswapV3 = "UNISWAP_V3";

export function setupApolloClients() {
    // Create the apollo client
    const apolloClientUniswapV3Polygon = new ApolloClient({
        link: createHttpLink({
            uri: uniswapV3PolygonSubgraph,
        }),
        cache: new InMemoryCache(),
    });

    const apolloClientDripversity = new ApolloClient({
        link: createHttpLink({
            uri: dripversitySubgraph,
        }),
        cache: new InMemoryCache(),
    });

    provideApolloClients({
        default: apolloClientDripversity,
        [clientIdUniswapV3]: apolloClientUniswapV3Polygon,
    });
}
