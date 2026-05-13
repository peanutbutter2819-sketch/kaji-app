import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KajiDemo from "../kaji_demo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KajiDemo />
  </StrictMode>
);
