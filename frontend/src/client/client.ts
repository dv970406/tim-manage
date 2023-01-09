import { Environment, Network, Store, RecordSource } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create(async (operation, variables) => {
  const GRAPHQL_SERVER_URL = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL || "";
  const response = await fetch(GRAPHQL_SERVER_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
