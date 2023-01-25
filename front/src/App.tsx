import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import SurveyDetail from "./pages/survey/SurveyDetail";
import Surveys from "./pages/survey/Surveys";
import UserDetail from "./pages/user/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/login",
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: "/user",
    element: <Layout />,
    errorElement: <Error />,
    children: [{ path: ":userId", element: <UserDetail /> }],
  },
  {
    path: "/survey",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Surveys /> },
      { path: ":surveyId", element: <SurveyDetail /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
