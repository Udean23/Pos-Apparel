import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/views/Pages/NotFoundPage/index";
import AuthPage from "@/views/Pages/Auth/index";

export const router = createBrowserRouter([
  {   
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);