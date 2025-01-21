import { useState } from "react";
import SignupForm from "../components/ui/SignupForm";
import DriverRegistration from "../components/ui/DriverRegistrationForm";
import StudentRegistration from "../components/ui/StudentRegistrationForm";
import { SignupFormContext } from "../states/SignupState";

export default function Signup() {
    const [formToRender, setFormToRender] = useState(0);
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
    });

    return (
        <SignupFormContext.Provider
            value={{ formToRender, setFormToRender, signupData, setSignupData }}
        >
            {formToRender == 0 && <SignupForm />}
            {formToRender == 1 && <StudentRegistration />}
            {formToRender == 2 && <DriverRegistration />}
        </SignupFormContext.Provider>
    );
}
