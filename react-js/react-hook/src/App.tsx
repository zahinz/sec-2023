import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Post from "./pages/Post";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "articles",
      element: <Articles />,
    },
    {
      path: "articles/:slug",
      element: <Post />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
