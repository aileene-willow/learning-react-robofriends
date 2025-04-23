import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

registerServiceWorker();
