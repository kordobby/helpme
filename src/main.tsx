import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyleProvider } from "./lib/styled-components/GlobalStyleProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyleProvider />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
