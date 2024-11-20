import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import { RouterProvider, createHashRouter } from "react-router-dom";
import Challenge from "./pages/Challenge";
import "./index.css"; // Ensure your styles are correctly applied

// Define router with the future flag
const router = createHashRouter(
  [
    {
      path: "/",
      element: <Challenge />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Opt-in to new v7 behavior
    },
  }
);

// Create a root element and use React 18's createRoot
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
