import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
