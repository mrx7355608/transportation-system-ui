import { useState, useContext } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { SignupFormContext } from "../../states/SignupState";
import { useMutation } from "@apollo/client";
import { CREATE_STUDENT } from "../../graphql/mutations/student";
import { SIGNUP_STUDENT_USER } from "../../graphql/mutations/auth";

export default function StudentRegistrationForm() {
    const navigate = useNavigate();
    const [createStudent, { loading, error }] = useMutation(CREATE_STUDENT);
    const [createUser] = useMutation(SIGNUP_STUDENT_USER);
    const { setFormToRender, signupData } = useContext(SignupFormContext);
    const [student, setStudent] = useState({
        cnic: "",
        fatherName: "",
        phoneNumber: "",
        address: "",
        campus: "",
    });

    const goToSignupForm = () => setFormToRender(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // TODO: validate

        // create student
        const response1 = await createStudent({
            variables: student,
        });
        console.log(error);

        // Create user
        delete signupData.confirmPassword;
        delete signupData.role;
        const { id } = response1.data.createStudent;

        await createUser({
            variables: {
                ...signupData,
                studentID: id,
            },
        });
        navigate("/auth/login");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
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
                {/* NAME & PHONE NUM */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Father Name"}
                        id={"fatherName"}
                        name={"fatherName"}
                        placeholder={"Enter your father name"}
                        onChange={handleChange}
                    />
                    <Input
                        label={"Phone Number"}
                        id={"phoneNumber"}
                        name={"phoneNumber"}
                        placeholder={"Enter your phone number"}
                        onChange={handleChange}
                    />
                </div>

                {/* CAMPUS & CNIC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Campus"}
                        id={"campus"}
                        name={"campus"}
                        placeholder={"Enter your campus"}
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
                <Input
                    label={"Address"}
                    id={"address"}
                    name={"address"}
                    placeholder={"Enter your address"}
                    onChange={handleChange}
                />

                {/* UNI_ID & PROFILE PICTURE */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
                {/*     <Input */}
                {/*         label={"Scanned copy of university card"} */}
                {/*         id={"uniCard"} */}
                {/*         name={"uniCard"} */}
                {/*         type="file" */}
                {/*         onChange={handleChange} */}
                {/*     /> */}
                {/* </div> */}

                <div className="flex flex-row gap-4 form-control">
                    <button
                        type="submit"
                        className="flex-1 btn btn-outline btn-ghost w-full"
                        onClick={goToSignupForm}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="flex-1 btn btn-primary w-full text-white"
                    >
                        {loading ? "Signing up..." : "Signup"}
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
