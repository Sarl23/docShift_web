import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config/firebase.ts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </StrictMode>
);
