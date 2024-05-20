import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CursorAnimated from "./assets/cursorAnimated.tsx";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import AOS from "aos";
import "aos/dist/aos.css";
import store from "./redux/store.ts";

// Inicializa AOS
AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <SnackbarProvider>
      <React.StrictMode>
        <CursorAnimated />
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  </Provider>
);
