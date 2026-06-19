import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // या globals.css जो भी आपकी फ़ाइल हो
import { HelmetProvider } from "react-helmet-async"; // 1. Import Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        {" "}
        {/* 2. Wrap the App component */}
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
