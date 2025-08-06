import { createRoot } from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/countries",
    element: <h1>Countries Page</h1>,
  },
]);
const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
