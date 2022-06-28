import { gql } from 'glimmer-apollo';

import { Exact } from 'utils/typescript';

export const REFRESH_TOKEN = gql`
    mutation RefreshToken($refreshToken: String!) {
        refreshToken(refreshToken: $refreshToken) {
            AccessToken
            TokenType
            ExpiresIn
        }
    }
`;

export type RefreshTokenMutationVariables = Exact<{
    refreshToken: string;
}>;

export type RefreshTokenMutation = {
    __typename?: 'Mutation';
    refreshToken: {
        __typename?: 'BaseAuthenticationResult';
        AccessToken: string;
        TokenType: string;
        ExpiresIn: number;
    };
};
