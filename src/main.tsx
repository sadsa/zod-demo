import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { EnvProvider } from "./examples/04-env-validation/env-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EnvProvider>
      <App />
    </EnvProvider>
  </StrictMode>
);
