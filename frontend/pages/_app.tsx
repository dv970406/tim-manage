import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense } from "react";
import { environment } from "../src/client/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={`Loading...`}>
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
