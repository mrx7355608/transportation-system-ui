import { useContext, useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { SignupFormContext } from "../../states/SignupState";

export default function SignupForm() {
    const { setFormToRender, signupData, setSignupData } =
        useContext(SignupFormContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const signup = (e) => {
        e.preventDefault();
        console.log(signupData);
        // TODO: validate data

        if (!signupData.role) {
            return;
        }
        setFormToRender(signupData.role === "driver" ? 2 : 1);
    };

    return (
        <div className="flex flex-col justify-start items-center min-h-[80vh]">
            <div className="text-center mt-9 mb-7">
                <h2 className="text-2xl font-semibold">Signup</h2>
            </div>
            <div className="card w-full max-w-md p-6 space-y-6">
                <form
                    id="loginForm"
                    method="POST"
                    className="space-y-4"
                    onSubmit={signup}
                >
                    <Input
                        label={"Name"}
                        id={"name"}
                        name={"name"}
                        placeholder={"Enter your name"}
                        onChange={handleChange}
                    />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select
                            name="role"
                            className="select select-bordered w-full"
                            onChange={handleChange}
                        >
                            <option disabled selected>
                                What is your role?
                            </option>
                            <option value="student">Student</option>
                            <option value="driver">Driver</option>
                        </select>
                    </div>
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
                    <Input
                        label={"Confirm Password"}
                        type={"password"}
                        id={"confirm_password"}
                        name={"confirmPassword"}
                        placeholder={"Confirm your password"}
                        onChange={handleChange}
                    />

                    {/* Submit Button */}
                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-white"
                        >
                            Next
                        </button>
                    </div>
                </form>

                {/* Signup Link */}
                <div className="text-center">
                    <p>
                        Already a member?{" "}
                        <Link
                            to="/auth/login"
                            className="text-primary font-medium underline hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
