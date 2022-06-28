import { gql } from 'glimmer-apollo';

export const FORGOT_PASSWORD = gql`
    mutation ForgotPassword($username: String!) {
        # forgotPassword returns a plain string on success - we don't need to parse it
        forgotPassword(username: $username)
    }
`;
