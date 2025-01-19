import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentRegistration from "./pages/StudentRegistration";
import DriverRegistration from "./pages/DriverRegistration";

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
    return <RouterProvider router={router} />;
}
