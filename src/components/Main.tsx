import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                },

                {
                    path: "/",
                    element: <MainLayout />,
                    children: [
                        {
                            path: "products",
                            element: <Products />,
                        },
                        {
                            path: "cart",
                            element: <Cart />,
                        },
                    ],
                },
            ],
        },
    ],
    {
        basename: "/react-shop",
    }
);

export default function Main() {
    return <RouterProvider router={router} />;
}
