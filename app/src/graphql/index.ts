import { App } from "vue";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";
import { ApolloClients, provideApolloClient } from "@vue/apollo-composable";
import { uniswapV3PolygonSubgraph } from "@/constants";

export function setupApolloClients(app: App<Element>) {
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
    /*
    app.provide(ApolloClients, {
        default: apolloClientUniswapV3Polygon,
    });
*/
}
