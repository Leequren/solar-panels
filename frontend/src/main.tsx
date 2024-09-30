import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Header } from "./components/header/Header.tsx";
import { Footer } from "./components/footer/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
