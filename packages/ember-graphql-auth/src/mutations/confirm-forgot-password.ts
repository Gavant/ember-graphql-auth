import { gql } from 'glimmer-apollo';

export const CONFIRM_FORGOT_PASSWORD = gql`
    mutation ConfirmForgotPassword($input: ConfirmForgotPasswordInput!) {
        # confirmForgotPassword returns a plain string on success - we don't need to parse it
        confirmForgotPassword(input: $input)
    }
`;
