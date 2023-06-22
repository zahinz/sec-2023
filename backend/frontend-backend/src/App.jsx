import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import Admin from "./pages/Admin";
import Users from "./pages/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/users",
      element: <Users />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
