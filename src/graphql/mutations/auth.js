import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
    mutation Login($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            item {
                name
                email
                role
                image
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

export const SIGNUP_STUDENT_USER = gql`
    mutation Signup(
        $name: String!
        $email: String!
        $password: String!
        $studentID: ID!
    ) {
        createUser(
            data: {
                name: $name
                email: $email
                password: $password
                role: student
                student: { connect: { id: $studentID } }
            }
        ) {
            id
            name
            email
            role
            student {
                cnic
                address
            }
        }
    }
`;

export const SIGNUP_DRIVER_USER = gql`
    mutation Signup(
        $name: String!
        $email: String!
        $password: String!
        $driverID: ID!
    ) {
        createUser(
            data: {
                name: $name
                email: $email
                password: $password
                role: driver
                driver: { connect: { id: $driverID } }
            }
        ) {
            id
            name
            email
            role
            driver {
                id
            }
        }
    }
`;
