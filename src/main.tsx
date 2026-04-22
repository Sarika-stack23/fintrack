import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
