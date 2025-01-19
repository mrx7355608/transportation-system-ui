import { Link } from "react-router-dom";

const StudentRegistration = () => {
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
                {/* NAME & FATHER NAME */}
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

                {/* EMAIL & PASSWORD */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="address" className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                {/* PHONE NUMBER & CNIC */}
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

                {/* PASSWORD & CONFIRM PASSWORD  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm-password" className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm_password"
                            placeholder="Confirm your password"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                {/* CLASS & SECTION */}
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

                {/* UNI_ID & PROFILE PICTURE */}
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

export default StudentRegistration;
