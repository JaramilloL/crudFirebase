import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import StateContext from "./context/StateContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateContext>
      <RouterProvider router={router}></RouterProvider>
    </StateContext>
  </StrictMode>
);
