import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./adaptive.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-pw1xjuqn.us.auth0.com"
    clientId="j1cgvNrmIq8SSK2psVEPDSWlUH6jvFc8"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
