import { Global, ThemeProvider } from "@emotion/react";
import { lazy, useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { environment } from "./client/client";
import { globalStyles, theme } from "./css/theme";
import SurveyManagementPage from "./pages/manager/SurveyManagement";
import UserManagementPage from "./pages/manager/UserManagement";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
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
import ShowUserComments from "./components/templates/content/user/ShowUserComments";
import ShowUserLikes from "./components/templates/content/user/ShowUserLikes";
import "./styles.css";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFound";

// const Layout = lazy(() => import("./pages/Layout"));

// 접근제한 라우터는 나중에 고민
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "meal", element: <MealWeeklyPlannerPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <Layout />,
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
            path: "comment",
            element: <ShowUserComments />,
          },
          {
            path: "like",
            element: <ShowUserLikes />,
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

    children: [
      { index: true, element: <SurveysPage /> },
      { path: ":surveyId", element: <SurveyDetailPage /> },
    ],
  },
  {
    path: "/post",
    element: <Layout />,

    children: [
      { index: true, element: <PostsPage /> },
      { path: "update/:postId", element: <PostUpdatePage /> },
      { path: "create", element: <PostCreatePage /> },
      { path: ":postId", element: <PostDetailPage /> },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [{ path: "*", element: <NotFoundPage /> }],
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
