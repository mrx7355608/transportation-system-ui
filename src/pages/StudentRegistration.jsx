import { Link } from "react-router-dom";
import Input from "../components/ui/Input";

const StudentRegistration = () => {
    const onChange = () => console.log("hello");

    return (
        <div className="container mx-auto px-4 py-8 mb-12">
            <h2 className="text-2xl text-center mb-9 font-semibold text-gray-800">
                Student Registration Form
            </h2>
            <form
                id="registrationForm"
                className="bg-base-100 rounded-lg p-6 space-y-6"
            >
                {/* NAME & FATHER NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Name"}
                        id={"name"}
                        name={"name"}
                        placeholder={"Enter your name"}
                        onChange={() => console.log("hello")}
                    />
                    <Input
                        label={"Father Name"}
                        id={"fatherName"}
                        name={"fatherName"}
                        placeholder={"Enter your father name"}
                        onChange={() => console.log("hello")}
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
                        onChange={() => console.log("hello")}
                    />
                    <Input
                        label={"Address"}
                        id={"address"}
                        name={"address"}
                        placeholder={"Enter your address"}
                        onChange={() => console.log("hello")}
                    />
                </div>

                {/* PHONE NUMBER & CNIC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Phone Number"}
                        id={"phoneNumber"}
                        name={"phoneNumber"}
                        placeholder={"Enter your phone number"}
                        onChange={() => console.log("hello")}
                    />
                    <Input
                        label={"Cnic"}
                        id={"cnic"}
                        name={"cnic"}
                        placeholder={"Enter your cnic number"}
                        onChange={() => console.log("hello")}
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
                        onChange={() => console.log("hello")}
                    />
                    <Input
                        label={"Confirm Password"}
                        type={"password"}
                        id={"confirm_password"}
                        name={"confirmPassword"}
                        placeholder={"Confirm your password"}
                        onChange={() => console.log("hello")}
                    />
                </div>

                {/* UNI_ID & PROFILE PICTURE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Scanned copy of university card"}
                        id={"uniCard"}
                        name={"uniCard"}
                        type="file"
                        onChange={onChange}
                    />
                    <Input
                        label={"Profile picture"}
                        id={"profilePicture"}
                        name={"profilePicture"}
                        type="file"
                        onChange={onChange}
                    />
                </div>

                {/* CLASS & SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Campus"}
                        id={"campus"}
                        name={"campus"}
                        placeholder={"Enter your campus"}
                        onChange={onChange}
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
