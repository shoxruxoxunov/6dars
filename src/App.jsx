// react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// Hooks
import { useGlobalContext } from "./hooks/useGlobalContext";

// firebase
import { onAuthStateChanged } from "firebase/auth";

// layout
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/Signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);
  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
