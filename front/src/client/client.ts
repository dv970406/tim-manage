import { Environment, Network, Store, RecordSource } from "relay-runtime";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const TOKEN = "TOKEN";
const store = new Store(new RecordSource());

const network = Network.create(async (operation, variables) => {
  const token = localStorage.getItem(TOKEN);

  const GRAPHQL_SERVER_URL = process.env.REACT_APP_GRAPHQL_SERVER_URL || "";
  const response = await fetch(GRAPHQL_SERVER_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { token: token }),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
});

export const environment = new Environment({
  network,
  store,
});
