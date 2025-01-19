import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    setUser: () => undefined,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
