import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
    query GetUser {
        authenticatedUser {
            id
            name
            email
            role
            image
            student {
                id
            }
            driver {
                # license {
                #     publicUrl
                # }
                address
                phoneNumber
            }
        }
    }
`;

export const GET_USER_BY_EMAIL = gql`
    query GetUserByEmail($email: String!) {
        User(where: { email: $email }) {
            id
        }
    }
`;
