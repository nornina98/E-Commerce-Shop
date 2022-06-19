import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/context-user";

import "./index.scss";
import { render } from "@testing-library/react";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
