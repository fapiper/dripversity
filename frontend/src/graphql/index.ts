import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { uniswapV3PolygonSubgraph } from "@/constants";

export function setupApolloClients() {
    // HTTP connection to the API
    const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: uniswapV3PolygonSubgraph,
    });

    // Cache implementation
    const cache = new InMemoryCache();

    // Create the apollo client
    const apolloClientUniswapV3Polygon = new ApolloClient({
        link: httpLink,
        cache,
    });

    provideApolloClient(apolloClientUniswapV3Polygon);
}
