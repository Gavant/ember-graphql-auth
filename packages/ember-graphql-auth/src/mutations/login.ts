import { gql } from 'glimmer-apollo';

import { Exact } from 'utils/typescript';

export const LOGIN = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            AccessToken
            RefreshToken
            TokenType
            ExpiresIn
        }
    }
`;

export type LoginInput = {
    password: string;
    username: string;
};
export type LoginMutationVariables = Exact<{
    input: LoginInput;
}>;

export type LoginMutation = {
    __typename?: 'Mutation';
    login: {
        __typename?: 'LoginAuthenticationResult';
        AccessToken: string;
        RefreshToken: string;
        TokenType: string;
        ExpiresIn: number;
    };
};
