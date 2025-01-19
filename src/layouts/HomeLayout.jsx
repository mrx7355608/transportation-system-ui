import React from "react";
import { Outlet } from "react-router-dom";
import { HomeNavbar } from "../components/navbar/HomeNavbar";
import Footer from "../components/Footer";

export default function HomeLayout() {
    return (
        <div>
            <HomeNavbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
