import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
