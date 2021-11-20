import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
    concat,
} from '@apollo/client';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
});

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }) => ({
        headers: {
            authorization: `Bearer ${process.env.CONTENTFUL_CONTENT_DELIVERY_API}`,
            ...headers,
        },
    }));
    return forward(operation);
});

const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    link: concat(authLink, httpLink),

    // Provide some optional constructor fields
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

export default client;
