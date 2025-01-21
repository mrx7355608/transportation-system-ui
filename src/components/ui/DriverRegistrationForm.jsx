import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupFormContext } from "../../states/SignupState";
import Input from "./Input";
import { CREATE_DRIVER } from "../../graphql/mutations/driver";
import { useMutation } from "@apollo/client";
import { SIGNUP_DRIVER_USER } from "../../graphql/mutations/auth";

export default function DriverRegistrationForm() {
    const navigate = useNavigate();
    const { setFormToRender, signupData } = useContext(SignupFormContext);
    const [createDriver, { loading, error }] = useMutation(CREATE_DRIVER);
    const [createUser] = useMutation(SIGNUP_DRIVER_USER);
    const [driver, setDriver] = useState({
        // license: "",
        address: "",
        phoneNumber: "",
        cnic: "",
    });

    const goToSignupForm = () => setFormToRender(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // create driver
        delete driver.license;
        console.log({ driver });
        const response1 = await createDriver({
            variables: driver,
        });
        console.log(error);

        // Create user
        delete signupData.confirmPassword;
        delete signupData.role;
        const { id } = response1.data.createDriver;

        await createUser({
            variables: {
                ...signupData,
                driverID: id,
            },
        });
        navigate("/auth/login");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "license") {
            // setDriver({ ...driver, license: e.target.files[0] });
            return;
        }
        setDriver({ ...driver, [name]: value });
    };

    return (
        <div className="container mx-auto px-4 py-8 mb-12">
            <h2 className="text-2xl text-center mb-9 font-semibold text-gray-800">
                Driver Registration Form
            </h2>
            <form
                id="registrationForm"
                className="bg-base-100 rounded-lg p-6 space-y-6"
                onSubmit={handleSubmit}
            >
                {/* Driver Registration Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label htmlFor="address" className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Input
                        label={"License"}
                        id={"license"}
                        name={"license"}
                        onChange={handleChange}
                        type={"file"}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label={"Cnic"}
                        id={"cnic"}
                        name={"cnic"}
                        placeholder={"Enter your cnic number"}
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

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
                {/*     <div className="form-control"> */}
                {/*         <label htmlFor="profilePic" className="label"> */}
                {/*             <span className="label-text">Profile Picture</span> */}
                {/*         </label> */}
                {/*         <input */}
                {/*             type="file" */}
                {/*             id="profilePic" */}
                {/*             name="profilePic" */}
                {/*             required */}
                {/*             className="file-input file-input-bordered w-full" */}
                {/*             onChange={handleChange} */}
                {/*         /> */}
                {/*     </div> */}
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
