import { gql } from 'glimmer-apollo';

export const COMPLETE_SIGN_UP = gql`
    mutation CompleteSignUp($input: CompleteSignUpInput!) {
        completeSignUp(input: $input) {
            AccessToken
            TokenType
            ExpiresIn
        }
    }
`;
