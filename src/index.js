import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./adaptive.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-47dt8mc6.us.auth0.com"
    clientId="xg1Qr5S9WMpqW3NTVyPfON5CZ1fWBoBA"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
