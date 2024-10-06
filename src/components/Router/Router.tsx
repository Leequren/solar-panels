import { routes } from "@/const/routes";
import { MainPage } from "@/pages/MainPage/MainPage";
import { Configurator } from "@/pages/ProductsPage/components/Configurator/Configurator";
import { ProductsPage } from "@/pages/ProductsPage/ProductsPage";
import { createBrowserRouter } from "react-router-dom";
import {ProductsCardInfoPage} from "@/pages/ProductsCardInfoPage/ProductsCardInfoPage.tsx";
import {CartPage} from "@/pages/CartPage/CartPage.tsx";

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
    path: routes.productsCardInfo,
    element: <ProductsCardInfoPage />,
  },
  {
    path: routes.cart,
    element: <CartPage />,
  }
]);
