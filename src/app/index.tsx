import { StrictMode } from "react";

import "@/styles/index.scss";
import { createRoot } from "react-dom/client";

import Providers from "@/app/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
