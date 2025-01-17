import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col justify-start items-center min-h-[80vh]">
            <div className="text-center mt-9 mb-7">
                <h2 className="text-2xl font-semibold">
                    Login to your account
                </h2>
            </div>
            <div className="card w-full max-w-md p-6 space-y-6">
                <form id="loginForm" method="POST" className="space-y-4">
                    {/* Username */}
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="username"
                            placeholder="Email"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-white"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Signup Link */}
                <div className="text-center">
                    <p className="">
                        Not a member?{" "}
                        <Link
                            to="/auth/sign-up"
                            className="text-primary font-medium hover:underline"
                        >
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
