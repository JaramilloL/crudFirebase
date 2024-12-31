import { createBrowserRouter, Navigate } from "react-router-dom";
import Index from "../layout/Index";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/users/HomePage";
import CreateTaskPage from "../pages/tasks/CreateTaskPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/createTasks",
        element: <CreateTaskPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      }
    ],
  },
]);
