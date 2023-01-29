import { Global, ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { environment } from "./client/client";
import { globalStyles, theme } from "./css/theme";
import ErrorPage from "./pages/Error";
import Error from "./pages/Error";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import LoginPage from "./pages/Login";
import SurveyDetailPage from "./pages/survey/SurveyDetail";
import SurveysPage from "./pages/survey/Surveys";
import JoinPage from "./pages/user/Join";
import UserDetailPage from "./pages/user/UserDetail";
import UsersPage from "./pages/user/Users";
import { ModalContext } from "./utils/modal/modal.context";

// 접근제한 라우터는 나중에 고민
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/login",
    errorElement: <Error />,
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      { path: ":userId", element: <UserDetailPage /> },
      { path: "join", element: <JoinPage /> },
      { index: true, element: <UsersPage /> },
    ],
  },
  {
    path: "/survey",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <SurveysPage /> },
      { path: ":surveyId", element: <SurveyDetailPage /> },
    ],
  },
]);
function App() {
  const [currentModal, setCurrentModal] = useState("");

  return (
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <ModalContext.Provider value={{ currentModal, setCurrentModal }}>
          <RouterProvider router={router} />
        </ModalContext.Provider>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
