import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <App />
    </div>
  </StrictMode>,
  rootElement
);
