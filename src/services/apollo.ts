import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { graphql, ws } from "../config";

// Create an HTTP link
const httpLink = (accessToken) =>
  new HttpLink({
    uri: graphql,
    fetch: async (uri, options) => {
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  });

// Create a WebSocket link
const wsLink = (accessToken) =>
  new GraphQLWsLink(
    createClient({
      url: ws,
      connectionParams: async () => {
        return {
          Authorization: `Bearer ${accessToken}`,
        };
      },
    })
  );

const splitLink = (accessToken) => {
  return split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink(accessToken),
    httpLink(accessToken)
  );
};

const createApolloClient = (accessToken) => {
  return new ApolloClient({
    link: splitLink(accessToken),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
