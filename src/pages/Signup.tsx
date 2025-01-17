import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="container mx-auto px-4 py-8 mb-12">
            <h2 className="text-2xl text-center mb-9 font-semibold text-gray-800">
                Student Registration Form
            </h2>
            <form
                id="registrationForm"
                action="process_registration.php"
                method="POST"
                className="bg-base-100 rounded-lg p-6 space-y-6"
            >
                {/* Student Registration Form */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="fatherName" className="label">
                            <span className="label-text">Father's Name</span>
                        </label>
                        <input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            placeholder="Enter your father's name"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="phoneNumber" className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="cnic" className="label">
                            <span className="label-text">CNIC</span>
                        </label>
                        <input
                            type="tel"
                            id="cnic"
                            name="cnic"
                            placeholder="Enter your CNIC"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="class" className="label">
                            <span className="label-text">Class</span>
                        </label>
                        <input
                            type="text"
                            id="class"
                            name="class"
                            placeholder="Enter your class"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="section" className="label">
                            <span className="label-text">Section</span>
                        </label>
                        <input
                            type="text"
                            id="section"
                            name="section"
                            placeholder="Enter your section"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="universityId" className="label">
                            <span className="label-text">
                                Scan Copy of University ID
                            </span>
                        </label>
                        <input
                            type="file"
                            id="universityId"
                            name="universityId"
                            required
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="profilePic" className="label">
                            <span className="label-text">Profile Picture</span>
                        </label>
                        <input
                            type="file"
                            id="profilePic"
                            name="profilePic"
                            required
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="address" className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        required
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white"
                    >
                        Submit
                    </button>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-600">
                        Already a member?
                        <Link
                            to="/auth/login"
                            className="text-primary font-medium hover:underline ml-1"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
