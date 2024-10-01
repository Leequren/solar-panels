import { App } from "@/App";
import { routes } from "@/const/routes";
import { Products } from "@/pages/MainPage/components/Products/Products";
import { MainPage } from "@/pages/MainPage/MainPage";
import { Configurator } from "@/pages/ProductsPage/components/Configurator/Configurator";
import { ProductsPage } from "@/pages/ProductsPage/ProductsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: routes.products,
    element: <ProductsPage />,
  },
  {
    path: routes.configurator,
    element: <Configurator />,
  },
]);
