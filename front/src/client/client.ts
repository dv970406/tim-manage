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

// 전역 선언 시 문제 생길 수 있음 - fetcher 호출마다 토큰이 있는지 확인해야 하기 때문
// const token = localStorage.getItem(TOKEN);

const fetcher: FetchFunction = async (operation, variables) => {
  // fetcher가 실행될때 마다 토큰이 있는지 확인해야 하므로 이 스코프 밖에서 전역적으로 선언, 할당하면 안됨!
  const token = localStorage.getItem(TOKEN);

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
  connectionParams: () => {
    const token = localStorage.getItem(TOKEN);

    return { token };
  },
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
