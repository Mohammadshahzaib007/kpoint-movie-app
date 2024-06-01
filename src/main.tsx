import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RootStateProvider from "./state/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </React.StrictMode>
);
