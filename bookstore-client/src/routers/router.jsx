import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

import Home from "../components/Home";
import Shop from "../components/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Register from "../components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

<RouterProvider router={router} />;

export default router;
