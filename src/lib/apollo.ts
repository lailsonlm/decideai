import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`
  },
  // cache: new InMemoryCache()
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          companiesConnection: relayStylePagination(["cursor", "where"]),
        },
      },
    },
  })
})