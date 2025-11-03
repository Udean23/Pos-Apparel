import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/views/Pages/NotFoundPage/index";
import AuthPage from "@/views/Pages/Auth/index";
import { MainLayout } from "@/views/Layouts/MainLayout";
import { Cashier, Dashboard, Category, Product, Bundling, Color, Size, BundlingDetail, BundlingCreate, BundlingEdit } from "@/views/Pages/pages";
import Discount from "@/views/Pages/Admin/Discount";

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
      },
      {
        path: "kasir",
        element: <Cashier />,
      },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "products",
        element: <Product/>
      },
      {
        path: "discounts",
        element: <Discount/>
      },
      {
        path: "colors",
        element: <Color/>
      },
      {
        path: "sizes",
        element: <Size/>
      },
      {
        path: "bundlings",
        element: <Bundling/>
      },
      {
        path: "bundling/:id",
        element: <BundlingDetail/>
      },
      {
        path: "bundling/create",
        element: <BundlingCreate/>
      },
      {
        path: "bundling/edit/:id",
        element: <BundlingEdit/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);