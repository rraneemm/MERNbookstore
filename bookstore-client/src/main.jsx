import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import AuthNProvider from "./context/AuthNProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthNProvider>
      <RouterProvider router={router} />
    </AuthNProvider>
  </React.StrictMode>
);
