import React from "react";
import { CartProvider } from "./context/CartContext";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./styles/global.css";
import App from "./app";
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <CartProvider>
        <App />
      </CartProvider>
    </ClerkProvider>
  </React.StrictMode>,
);
