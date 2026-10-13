import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {CartProvider} from "./context/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Navbar />
      <App />
    </CartProvider>
  </StrictMode>
);
