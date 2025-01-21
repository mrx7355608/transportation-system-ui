import { Link } from "react-router-dom";

export default function DriverRegistration() {
    return (
        <div className="container mx-auto px-4 py-8 mb-12">
            <h2 className="text-2xl text-center mb-9 font-semibold text-gray-800">
                Driver Registration Form
            </h2>
            <form
                id="registrationForm"
                action="process_registration.php"
                method="POST"
                className="bg-base-100 rounded-lg p-6 space-y-6"
            >
                {/* Driver Registration Form */}
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
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
}
