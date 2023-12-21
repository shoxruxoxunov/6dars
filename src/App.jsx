// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// componentes

// firebase

// layout
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
