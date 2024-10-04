import { App } from "@/App";
import { routes } from "@/const/routes";
import { MainPage } from "@/pages/MainPage/MainPage";
import { Configurator } from "@/pages/ProductsPage/components/Configurator/Configurator";
import { ProductsPage } from "@/pages/ProductsPage/ProductsPage";
import { createBrowserRouter } from "react-router-dom";
import {CardItemPage} from "@/pages/CardItemPage/CardItemPage.tsx";

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
  {
    path: routes.cardItemPage,
    element: <CardItemPage />,
  }
]);
