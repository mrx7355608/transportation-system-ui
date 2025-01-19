import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";

const StudentRegistration = () => {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        fatherName: "",
        cnic: "",
        campus: "",
        profilePicture: null,
        uniCard: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "profilePicture" || name === "uniCard") {
            setStudent({ ...student, [name]: e.target.files[0] });
            return;
        }
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);
    };

    return (
        <div className="container mx-auto px-4 py-8 mb-12">
            <h2 className="text-2xl text-center mb-9 font-semibold text-gray-800">
                Student Registration Form
            </h2>
            <form
                id="registrationForm"
                className="bg-base-100 rounded-lg p-6 space-y-6"
                onSubmit={handleSubmit}
            >
                {/* NAME & FATHER NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Name"}
                        id={"name"}
                        name={"name"}
                        placeholder={"Enter your name"}
                        onChange={handleChange}
                    />
                    <Input
                        label={"Father Name"}
                        id={"fatherName"}
                        name={"fatherName"}
                        placeholder={"Enter your father name"}
                        onChange={handleChange}
                    />
                </div>

                {/* EMAIL & PASSWORD */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Email address"}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"Enter your email"}
                        onChange={handleChange}
                    />
                    <Input
                        label={"Address"}
                        id={"address"}
                        name={"address"}
                        placeholder={"Enter your address"}
                        onChange={handleChange}
                    />
                </div>

                {/* PHONE NUMBER & CNIC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Phone Number"}
                        id={"phoneNumber"}
                        name={"phoneNumber"}
                        placeholder={"Enter your phone number"}
                        onChange={handleChange}
                    />
                    <Input
                        label={"Cnic"}
                        id={"cnic"}
                        name={"cnic"}
                        placeholder={"Enter your cnic number"}
                        onChange={handleChange}
                    />
                </div>

                {/* PASSWORD & CONFIRM PASSWORD  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                </div>

                {/* UNI_ID & PROFILE PICTURE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Scanned copy of university card"}
                        id={"uniCard"}
                        name={"uniCard"}
                        type="file"
                        onChange={handleChange}
                    />
                    <Input
                        label={"Profile picture"}
                        id={"profilePicture"}
                        name={"profilePicture"}
                        type="file"
                        onChange={handleChange}
                    />
                </div>

                {/* CLASS & SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Campus"}
                        id={"campus"}
                        name={"campus"}
                        placeholder={"Enter your campus"}
                        onChange={handleChange}
                    />
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
