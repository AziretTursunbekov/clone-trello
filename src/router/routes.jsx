import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFoundPage from "../pages/404/NotFoundPage";
import { PrivateRouter } from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { useEffect } from "react";
import { isAuth } from "../store/slices/authSlice";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((store) => store.auth);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || {};
    dispatch(isAuth(data?.role));
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRouter
          Component={<MainLayout />}
          fallBackPath={"/register"}
          isAllowed={!role}
        />
      ),
    },
    {
      path: "/register",
      element: (
        <PrivateRouter
          Component={<SignUp />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },
    {
      path: "/login",
      element: (
        <PrivateRouter
          Component={<SignIn />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
