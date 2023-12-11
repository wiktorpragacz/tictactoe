import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BoardContext from "./context/BoardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BoardContext>
      <App />
    </BoardContext>
  </React.StrictMode>
);
