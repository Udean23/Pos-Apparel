import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/views/Pages/NotFoundPage/index";
import AuthPage from "@/views/Pages/Auth/index";
import { MainLayout } from "@/views/Layouts/MainLayout";
import { Dashboard } from "@/views/Pages/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);