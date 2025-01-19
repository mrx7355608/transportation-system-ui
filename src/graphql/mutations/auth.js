import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
    mutation AuthenticateUser($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            item {
                name
                email
                image {
                    publicUrlTransformed
                }
                role
            }
        }
    }
`;
