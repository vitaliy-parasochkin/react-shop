import { HashRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";

export default function Main() {
    return (
        <HashRouter basename="/react-shop">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<MainLayout />}>
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    );
}
