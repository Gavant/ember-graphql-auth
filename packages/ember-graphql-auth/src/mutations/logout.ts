import { gql } from 'glimmer-apollo';

import { Exact } from 'utils/typescript';

export const LOGOUT = gql`
    mutation Logout($refreshToken: String!) {
        # logout returns a plain string on success - we don't need to parse it
        logout(refreshToken: $refreshToken)
    }
`;

export type LogoutMutationVariables = Exact<{
    refreshToken: string;
}>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: string };
