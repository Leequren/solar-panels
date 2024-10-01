import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/header/Header.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
