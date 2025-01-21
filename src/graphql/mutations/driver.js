import { gql } from "@apollo/client";

export const CREATE_DRIVER = gql`
    mutation CreateDriver(
        # $license: Upload!
        $address: String!
        $cnic: String!
        $phoneNumber: String!
    ) {
        createDriver(
            data: {
                # license: $license
                address: $address
                cnic: $cnic
                phoneNumber: $phoneNumber
            }
        ) {
            id
            address
            # license {
            #     publicUrl
            # }
            phoneNumber
        }
    }
`;
