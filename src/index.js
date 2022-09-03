import React from "react"; //ES6 moduals, imported React
import { createRoot } from "react-dom/client"; //react 18 syntax before it was reactDOM

import "./index.css";
import MemeApp from "./components/meme-generator/MemeApp";
import "./Meme.css";

// pass component to render, and get root element to display it
// react 18 syntax, container and root
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <MemeApp />
  </div>
  // simple // var render
);
