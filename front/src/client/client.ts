import {
  Environment,
  Network,
  Store,
  RecordSource,
  Observable,
  SubscribeFunction,
  FetchFunction,
} from "relay-runtime";
import { createClient } from "graphql-ws";

export const TOKEN = "TOKEN";
const store = new Store(new RecordSource());

const token = localStorage.getItem(TOKEN);
const fetcher: FetchFunction = async (operation, variables) => {
  const GRAPHQL_SERVER_URL = process.env.REACT_APP_GRAPHQL_SERVER_URL || "";
  const response = await fetch(GRAPHQL_SERVER_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { token }),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
};

const wsClient = createClient({
  url: process.env.REACT_APP_GRAPHQL_SERVER_WS_URL || "",
  connectionParams: () => ({ token }),
});

const subscribe: SubscribeFunction | undefined = (operation, variables) => {
  return Observable.create((sink: any) => {
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text!,
        variables,
      },
      sink
    );
  });
};

const network = Network.create(fetcher, subscribe);

export const environment = new Environment({
  network,
  store,
});
