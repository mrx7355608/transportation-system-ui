import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
import DriverRegistration from "./pages/DriverRegistration";
import { useAuth } from "./states/AuthProvier";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "student-registration",
                element: <StudentRegistration />,
            },
            {
                path: "driver-registration",
                element: <DriverRegistration />,
            },
        ],
    },
]);

export default function App() {
    // Fetch user when page reloads
    const { setUser } = useAuth();
    const { data, loading } = useQuery(GET_AUTHENTICATED_USER);

    useEffect(() => {
        if (data) {
            setUser(data.authenticatedUser);
        }
    }, [data]);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return <RouterProvider router={router} />;
}
