import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
    mutation Login($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            item {
                name
                email
                image {
                    publicUrl
                }
                role
            }
        }
    }
`;

export const UN_AUTHENTICATE_USER = gql`
    mutation {
        unauthenticateUser {
            success
        }
    }
`;
