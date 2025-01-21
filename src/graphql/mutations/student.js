import { gql } from "@apollo/client";

export const CREATE_STUDENT = gql`
    mutation CreateStudent(
        $fatherName: String!
        $address: String!
        $campus: String!
        $cnic: String!
        $phoneNumber: String!
    ) {
        createStudent(
            data: {
                fatherName: $fatherName
                address: $address
                campus: $campus
                cnic: $cnic
                phoneNumber: $phoneNumber
            }
        ) {
            id
            cnic
            address
        }
    }
`;
