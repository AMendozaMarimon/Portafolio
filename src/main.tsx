import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CursorAnimated from "./assets/cursorAnimated.tsx";
import { Provider } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from "./redux/store.ts";

// Inicializa AOS
AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <CursorAnimated />
      <App />
    </React.StrictMode>
  </Provider>
);
