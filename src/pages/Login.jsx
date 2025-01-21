import { useState } from "react";
import { useAuth } from "../states/AuthProvier";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations/auth";
import Input from "../components/ui/Input";

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [authenticateUser, { loading }] = useMutation(AUTHENTICATE_USER);
    const [loginCreds, setLoginCreds] = useState({
        email: "",
        password: "",
    });

    return (
        <div className="flex flex-col justify-start items-center min-h-[80vh]">
            <div className="text-center mt-9 mb-7">
                <h2 className="text-2xl font-semibold">
                    Login to your account
                </h2>
            </div>
            <div className="card w-full max-w-md p-6 space-y-6">
                <form
                    id="loginForm"
                    method="POST"
                    className="space-y-4"
                    onSubmit={login}
                >
                    <Input
                        label={"Email address"}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"Enter your email"}
                        onChange={handleChange}
                    />
                    <Input
                        label={"Password"}
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        placeholder={"Enter your password"}
                        onChange={handleChange}
                    />

                    {/* Submit Button */}
                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-white"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>

                {/* Signup Link */}
                <div className="text-center">
                    <Link
                        to="/auth/student-registration"
                        className="underline hover:underline"
                    >
                        Register as a student
                    </Link>
                    <br />
                    <Link
                        to="/auth/driver-registration"
                        className="underline hover:underline"
                    >
                        Register as a driver
                    </Link>
                </div>
            </div>
        </div>
    );

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginCreds({ ...loginCreds, [name]: value });
    }

    // Login user
    async function login(e) {
        e.preventDefault();
        const response = await authenticateUser({
            variables: loginCreds,
        });
        setUser(response.data.authenticateUserWithPassword.item);
        navigate("/");
    }
}
