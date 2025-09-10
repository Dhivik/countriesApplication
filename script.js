import { createRoot } from "react-dom/client";
import App from "./App.js";
import CountryDetails from "./Components/Main/CountryDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Main/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
      {
        path:"/contact",
        element:<Contact />
      }
    ],
  },
]);
const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
