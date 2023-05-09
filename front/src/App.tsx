import { Global, ThemeProvider } from "@emotion/react";
import { RelayEnvironmentProvider } from "react-relay";
import { RouterProvider } from "react-router-dom";
import { environment } from "./client/client";
import { theme } from "./css/theme";
import { globalStyles } from "./css/global";
import { router } from "./router";

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
