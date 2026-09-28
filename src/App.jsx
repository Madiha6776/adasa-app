
import About from "./Pages/About";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Pages/Blog";


//path ==> component
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "*", element: <NotFound></NotFound> },
      { path: "blog/:slug", element: <BlogDetails /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
