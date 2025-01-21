import { createContext } from "react";

export const SignupFormContext = createContext({
    formToRender: 0,
    setFormToRender: () => undefined,
    signupData: null,
    setSignupData: () => undefined,
});
