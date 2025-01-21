import { Navigate, Outlet } from "react-router-dom";
import AuthNavbar from "../components/navbar/AuthNavbar";
import Footer from "../components/Footer";
import { useAuth } from "../states/AuthProvier";

export default function AuthLayout() {
    const { user } = useAuth();

    // If user is already authenticated, redirect him to home route
    if (user) {
        return <Navigate to={"/"} />;
    }

    return (
        <div>
            <AuthNavbar />
            <Outlet />
            <Footer />
        </div>
    );
}
