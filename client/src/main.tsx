import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("✅ App starting...");
console.log("Root element:", document.getElementById("root"));

createRoot(document.getElementById("root")!).render(<App />);
