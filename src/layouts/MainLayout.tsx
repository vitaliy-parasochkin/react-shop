import { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function MainLayout() {
    const navigate = useNavigate();
    const { isAuth } = useAppSelector((state) => state.login);

    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
