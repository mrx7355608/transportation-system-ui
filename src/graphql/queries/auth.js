import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
    query GetUser {
        authenticatedUser {
            id
            name
            email
            image {
                publicUrl
            }
            role
        }
    }
`;
