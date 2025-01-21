import { Outlet, Navigate } from "react-router-dom";
import { HomeNavbar } from "../components/navbar/HomeNavbar";
import Footer from "../components/Footer";
import { useAuth } from "../states/AuthProvier";

export default function HomeLayout() {
    const { user } = useAuth();

    // If user is not authenticated, redirect him to login route
    if (user === null) {
        return <Navigate to={"/auth/login"} />;
    }

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
