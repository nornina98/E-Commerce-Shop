import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories-context";
import { CartProvider } from "./contexts/context-cart";

import { UserProvider } from "./contexts/context-user";

import "./index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
