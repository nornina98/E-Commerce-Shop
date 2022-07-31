import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories-context";
import { CartProvider } from "./contexts/context-cart";

import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </Provider>
);
