import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

import Home from "../components/Home";
import Shop from "../components/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Register from "../components/Register";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import Manage from "../dashboard/Manage";
import EditBooks from "../dashboard/EditBooks";
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
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <Manage />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
    ],
  },
]);

<RouterProvider router={router} />;

export default router;
