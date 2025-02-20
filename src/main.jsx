import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";
import Books from "./pages/Books.jsx";
import Courses from "./pages/Course.jsx";
import Schools from "./pages/Schools.jsx";
import Live from "./pages/Live.jsx";
import ForBusiness from "./pages/ForBusiness.jsx";
import ContactUs from "./pages/ContactUs.jsx";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books/>,
      },
      {
        path: "/courses",
        element: <Courses/>,
      },
      {
        path: "/schools",
        element: <Schools />,
      },
      {
        path: "/live",
        element: <Live />,
      },
      {
        path: "/business",
        element: <ForBusiness />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
