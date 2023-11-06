import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./components/ContextProvider";
import Gallery from "./components/Gallery";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Gallery />
    </ContextProvider>
  </React.StrictMode>
);
