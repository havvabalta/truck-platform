import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/variables.css";
// Aktif sitenin özel tema override'ları.
// Yeni site seçerken bu satırı o sitenin theme.css'ine çevir:
//   örn. import "./sites/tanker/theme.css";
import "./sites/city-delivery/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
