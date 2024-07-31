import { ApolloProvider } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import createApolloClient from "../services/apollo";

export default function ApolloWrapper({ children }) {
  const { getAccessTokenSilently, user } = useAuth0();
  const [client, setClient] = useState(null);
  useEffect(() => {
    const initializeApollo = async () => {
      const accessToken = await getAccessTokenSilently();
      const apolloClient = createApolloClient(accessToken);
      console.log("token" + " " + accessToken);
      setClient(apolloClient);
    };
    initializeApollo();
  }, [getAccessTokenSilently]);
  return client && <ApolloProvider client={client}>{children}</ApolloProvider>;
}
