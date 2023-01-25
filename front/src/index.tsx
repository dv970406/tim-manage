import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RelayEnvironmentProvider } from "react-relay";
import { ThemeProvider, Global } from "@emotion/react";
import { environment } from "./client/client";
import { globalStyles, theme } from "./css/theme";
import { RecoilRoot } from "recoil";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
