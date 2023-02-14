import { Global, ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { environment } from "./client/client";
import { globalStyles, theme } from "./css/theme";
import SurveyManagementPage from "./pages/manager/SurveyManagement";
import UserManagementPage from "./pages/manager/UserManagement";
import ErrorPage from "./pages/Error";

import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import LoginPage from "./pages/Login";
import PostDetailPage from "./pages/post/PostDetail";
import PostsPage from "./pages/post/Posts";
import SurveyDetailPage from "./pages/survey/SurveyDetail";
import SurveysPage from "./pages/survey/Surveys";
import UserDetailPage from "./pages/user/UserDetail";
import UsersPage from "./pages/user/Users";
import { ModalContext } from "./utils/contexts/modal.context";
import UserCreatePage from "./pages/manager/UserCreate";
import SurveyCreatePage from "./pages/manager/SurveyCreate";
import PostUpdatePage from "./pages/post/PostUpdate";
import PostCreatePage from "./pages/post/PostCreate";
import UnConfirmedVacationsPage from "./pages/manager/UnConfirmedVacations";
import TeamManagementPage from "./pages/manager/TeamManagement";
import PositionManagementPage from "./pages/manager/PositionManagement";
import ShowUserPosts from "./components/templates/content/user/ShowUserPosts";
import MealWeeklyPlannerPage from "./pages/manager/MealWeeklyPlanner";
import MealWeeklyCreatePage from "./pages/manager/MealWeeklyCreate";
import UpdateUserPassword from "./components/templates/content/user/UpdateUserPassword";
import ShowUserVacations from "./components/templates/content/user/ShowUserVacations";
import MyPage from "./pages/user/MyPage";
import ShowUserInfo from "./components/templates/content/user/ShowUserInfo";
import ShowUserAnswers from "./components/templates/content/user/ShowUserAnswers";

// 접근제한 라우터는 나중에 고민
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "meal", element: <MealWeeklyPlannerPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <UsersPage /> },
      {
        path: "my",
        element: <MyPage />,
        children: [
          { index: true, element: <ShowUserInfo /> },
          {
            path: "post",
            element: <ShowUserPosts />,
          },
          {
            path: "answer",
            element: <ShowUserAnswers />,
          },
          {
            path: "vacation",
            element: <ShowUserVacations />,
          },
          {
            path: "update",
            element: <UpdateUserPassword />,
          },
        ],
      },
      {
        path: ":userId",
        element: <UserDetailPage />,
        children: [
          { index: true, element: <ShowUserInfo /> },
          {
            path: "vacation",
            element: <ShowUserVacations />,
          },
        ],
      },
    ],
  },
  {
    path: "/manager",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // 얘도 분리가능
      { path: "user/create", element: <UserCreatePage /> },
      { path: "user", element: <UserManagementPage /> },
      { path: "survey/create", element: <SurveyCreatePage /> },
      { path: "survey", element: <SurveyManagementPage /> },
      { path: "vacation", element: <UnConfirmedVacationsPage /> },
      { path: "team", element: <TeamManagementPage /> },
      { path: "position", element: <PositionManagementPage /> },
      { path: "meal/create", element: <MealWeeklyCreatePage /> },
    ],
  },
  {
    path: "/survey",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SurveysPage /> },
      { path: ":surveyId", element: <SurveyDetailPage /> },
    ],
  },
  {
    path: "/post",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: "update/:postId", element: <PostUpdatePage /> },
      { path: "create", element: <PostCreatePage /> },
      { path: ":postId", element: <PostDetailPage /> },
    ],
  },
  {
    path: "/*",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
