import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/navbar/AuthNavbar";
import Footer from "../components/Footer";

export default function AuthLayout() {
    return (
        <div>
            <AuthNavbar />
            <Outlet />
            <Footer />
        </div>
    );
}
