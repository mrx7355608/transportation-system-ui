import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import AuthProvider from "./states/AuthProvier.jsx";

const link = createHttpLink({
    uri: import.meta.env.VITE_SERVER_URL,
    credentials: "include",
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ApolloProvider>
    </StrictMode>,
);
