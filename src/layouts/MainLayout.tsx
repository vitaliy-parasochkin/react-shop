import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="main-layout">
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
